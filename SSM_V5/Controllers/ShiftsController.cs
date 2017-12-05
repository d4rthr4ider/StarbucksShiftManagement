using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using SSM_V5.Models;
using Microsoft.AspNet.Identity;
using SSM_V5.Controllers;
using System.Web.WebPages;
using static SSM_V5.Models.Shift;
using Twilio;
using Twilio.Clients;
using System.Configuration;
using System.Threading.Tasks;

namespace SSM_V5.Controllers
{   [Authorize]
    public class ShiftsController : Controller
    {
        private SSM_Data3Entities1 db = new SSM_Data3Entities1();

  //      static async Task SmsApprove()
   //     {
    //        string AccountSid = ConfigurationManager.AppSettings["TwilioAccountSID"];
      //      string Auth = ConfigurationManager.AppSettings["TwilioAuthToken"];
        //    string TwilioNum = ConfigurationManager.AppSettings["TwilioNumber"];
        //
          //  TwilioClient.Init(AccountSid, Auth);
            //var twilio = new TwilioRestClient(AccountSid, Auth);


        //}

        // GET: Shifts
        public ActionResult Index()
        {
            var shifts = db.Shifts.Include(s => s.AspNetUser).Include(s => s.Store);
            return View(shifts.ToList());
        }

        // GET: Shifts/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Shift shift = db.Shifts.Find(id);
            if (shift == null)
            {
                return HttpNotFound();
            }
            return View(shift);
        }

        // GET: Shifts/Create
        public ActionResult Create(string id)
        {

                //Shift shift = db.Shifts.Where(s => s.Id == id)

                ViewBag.Id = User.Identity.GetUserId();
                ViewBag.StoreNum = User.StoreNum();
            return View();
        
            
        }

        // POST: Shifts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ShiftID,Date,StartTime,EndTime,StoreNum,Id,IsCovered")] Shift shift)
        {
            if (ModelState.IsValid)
            {
                if (shift.Date < DateTime.Today)
                {
                    ModelState.AddModelError("Date", "Date cannot be before the current date.");
                    return View();
                }
                shift.Id = User.Identity.GetUserId();
                shift.StoreNum = User.StoreNum();
                db.Shifts.Add(shift);
                db.SaveChanges();
                TempData["Success"] = "Shift posted for " + shift.Date.ToString("MM/dd/yyyy") + " at store #" + shift.StoreNum + " successfully.";
                return RedirectToAction("Create", "Shifts");
            }

            return View(shift);
        }

        // GET: Shifts/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Shift shift = db.Shifts.Find(id);
            if (shift == null)
            {
                return HttpNotFound();
            }
           // ViewBag.Id = new SelectList(db.AspNetUsers, "Id", "Email", shift.Id);
            //ViewBag.StoreNum = new SelectList(db.Stores, "StoreNum", "StoreName", shift.StoreNum);
            return View(shift);
        }

        
        // POST: Shifts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ShiftID,Date,StartTime,EndTime,StoreNum,IsCovered,Id")] Shift shift)
        {
            if (ModelState.IsValid)
            {
                shift.Id = User.Identity.GetUserId();
                db.Entry(shift).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("UserShiftIndex");
            }
           // ViewBag.Id = new SelectList(db.AspNetUsers, "Id", "Email", shift.Id);
           // ViewBag.StoreNum = new SelectList(db.Stores, "StoreNum", "StoreName", shift.StoreNum);
            return View(shift);
        }

        // GET: Shifts/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Shift shift = db.Shifts.Find(id);
            if (shift == null)
            {
                return HttpNotFound();
            }
            return View(shift);
        }

        // POST: Shifts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Shift shift = db.Shifts.Find(id);
            db.Shifts.Remove(shift);
            db.SaveChanges();
            return RedirectToAction("Index");
        }
        [HttpGet]
        public ActionResult CoverShift(int? id)
        {
            Shift shiftModel = db.Shifts.Find(id);
            var coverModel = new CoveredShift();
            var pmViewModel = new CoveredViewModel

          
            {
                CoveredModelObject = coverModel,
                ShiftModelObject = shiftModel
                
        };
            coverModel.Id = User.Identity.GetUserId();
            Session["ShiftID"] = shiftModel.ShiftID;
            return View(pmViewModel);
        }
        [HttpPost]
        public ActionResult CoverShift(CoveredViewModel vm)
        {
            Shift shift = db.Shifts.Find(Session["ShiftID"]);
            var covered = new CoveredShift();

            if (ModelState.IsValid)
            {


                covered.ShiftID = shift.ShiftID;
                covered.Id = User.Identity.GetUserId();
                db.CoveredShifts.Add(covered);
                shift.IsCovered = true;
                shift.Status = "Submitted";
                db.SaveChanges();
                TempData["Success"] = "Shift coverage for " + shift.Date.ToString("MM/dd/yyyy") + " at " + shift.Store.StoreName + " (" + shift.StoreNum + ")" + " submitted for approval.";
                return RedirectToAction("OpenShiftList");


            }
            return View(covered);
        }
        [HttpGet]
        public ActionResult ManageShifts ()
        {
            DateTime todayDate = DateTime.Now;
            TimeSpan oneWeek = new System.TimeSpan(7, 0, 0, 0);
            DateTime oneWeekAgo = todayDate.Subtract(oneWeek);
            var thisStore = User.StoreNum();
            var viewModel =
                from s in db.Shifts
                join c in db.CoveredShifts on s.ShiftID equals c.ShiftID
                join u in db.AspNetUsers on c.Id equals u.Id
                where s.StoreNum == thisStore
                select new ManageShiftViewModel { ShiftModelObject = s, CoveredModelObject = c, UserModelObject = u };
                viewModel = viewModel.Where(s => s.ShiftModelObject.Status != null && s.ShiftModelObject.Date >= oneWeekAgo);
            return View(viewModel);
        }
        [HttpGet]
        public ActionResult ApproveShift (int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            var viewModel =(
            from s in db.Shifts
            join c in db.CoveredShifts on s.ShiftID equals c.ShiftID
            join u in db.AspNetUsers on c.Id equals u.Id
            where s.ShiftID == id
            select new ManageShiftViewModel { ShiftModelObject = s, CoveredModelObject = c, UserModelObject = u }).FirstOrDefault();
            Session["ShiftID"] = viewModel.ShiftModelObject.ShiftID;
            Session["Covering"] = viewModel.CoveredModelObject.Id;
            if (viewModel == null)
            {
                return HttpNotFound();
            }
            return View(viewModel);
        }
        [HttpPost]
        public ActionResult ApproveShift ()
        {
            Shift shift = db.Shifts.Find(Session["ShiftID"]);


            if (ModelState.IsValid)
            {
                shift.Status = "Approved";
                db.SaveChanges();
                TempData["Success"] = "Shift Approved!";
                return RedirectToAction("ManageShifts");
            }
            return View();
        }

        [HttpGet]
        public ActionResult DeclineShift(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            var viewModel = (
            from s in db.Shifts
            join c in db.CoveredShifts on s.ShiftID equals c.ShiftID
            join u in db.AspNetUsers on c.Id equals u.Id
            where s.ShiftID == id
            select new ManageShiftViewModel { ShiftModelObject = s, CoveredModelObject = c, UserModelObject = u }).FirstOrDefault();
            Session["ShiftID"] = viewModel.ShiftModelObject.ShiftID;
            if (viewModel == null)
            {
                return HttpNotFound();
            }
            return View(viewModel);
        }
        [HttpPost]
        public ActionResult DeclineShift()
        {
            Shift shift = db.Shifts.Find(Session["ShiftID"]);
            if (ModelState.IsValid)
            {
                shift.Status = "Declined";
                shift.IsCovered = false;
                db.SaveChanges();
                TempData["Success"] = "Shift Declined!";
                return RedirectToAction("ManageShifts");
            }
            return View();
        }

        [HttpGet]
        public ActionResult UserShiftIndex()
        {
            var thisUserId = User.Identity.GetUserId();
            var query = (from shift in db.Shifts
                         where shift.Id == thisUserId && shift.IsCovered == false && shift.Date >= DateTime.Today
                         select shift).ToList();
            return View(query);
        }

        [HttpGet]
        public ActionResult ApprovalIndex()
        {
            DateTime todayDate = DateTime.Now;
            TimeSpan oneWeek = new System.TimeSpan(7, 0, 0, 0);
            DateTime oneWeekAgo = todayDate.Subtract(oneWeek);
            var thisUser = User.Identity.GetUserId();
            var shifts = (from s in db.Shifts
                          where s.Id == thisUser && s.Status == "Approved" && s.Date >= oneWeekAgo
                          select s).ToList();
            return View(shifts);
        }

        [HttpGet]
        public ActionResult CoveredApproval()
        {
            DateTime todayDate = DateTime.Now;
            TimeSpan oneWeek = new System.TimeSpan(7, 0, 0, 0);
            DateTime oneWeekAgo = todayDate.Subtract(oneWeek);
            var thisUser = User.Identity.GetUserId();
            var viewModel = (
                            from s in db.Shifts
                            join c in db.CoveredShifts on s.ShiftID equals c.ShiftID
                            join u in db.AspNetUsers on c.Id equals u.Id
                            where c.Id == thisUser
                            select new ManageShiftViewModel { ShiftModelObject = s, CoveredModelObject = c, UserModelObject = u });
            viewModel = viewModel.Where(s => s.ShiftModelObject.Status == "Approved" && s.ShiftModelObject.Date >= oneWeekAgo);
            return View(viewModel);

        }

        [HttpGet]
        public ActionResult OpenShiftList(DateTime? searchStartDate = null, DateTime? searchEndDate = null, DateTime? searchStartTime = null, DateTime? searchEndTime = null, Boolean? searchStore = null, Boolean? searchArea = false, Boolean? searchDistrict = false)
        {
            var thisStore = User.StoreNum();
            var GetArea = from shift in db.Shifts
                           join store in db.Stores on shift.StoreNum equals store.StoreNum
                           where store.StoreNum == thisStore
                           select store.Area;
            var thisArea = GetArea.First();

            var GetDistrict = from shift in db.Shifts
                           join store in db.Stores on shift.StoreNum equals store.StoreNum
                           where store.StoreNum == thisStore
                           select store.District;
            var thisDistrict = GetDistrict.First();
            var data =
                        from s in db.Shifts
                       select s;




            if (searchStartDate.HasValue || searchStartDate.HasValue)
            {
                data = data.Where(s => s.Date >= searchStartDate && s.Date <= searchEndDate && s.IsCovered == false);
              
            }
            if (searchStartTime.HasValue)
            {
                data = data.Where(s => s.StartTime == searchStartTime && s.IsCovered == false);

            }
            if (searchEndTime.HasValue)
            {
                data = data.Where(s => s.EndTime == searchEndTime && s.IsCovered == false);

            }
            if (searchStore == true)
            {
                data = data.Where(s => s.StoreNum == thisStore && s.IsCovered == false);
            }

            if (searchArea == true)
            {
                data = from shift in db.Shifts
                                   join store in db.Stores on shift.StoreNum equals store.StoreNum
                                   where store.Area.Contains(thisArea)
                                   select shift;
            }
            if (searchDistrict == true)
            {
                data = from shift in db.Shifts
                       join store in db.Stores on shift.StoreNum equals store.StoreNum
                       where store.District.Contains(thisDistrict)
                       select shift;
            }

            data = data.Where(s => s.IsCovered.Equals(false) && s.Date >= DateTime.Today);
             return View(data.ToList());
            
         }
        
        public ActionResult StoreFinder(string id)
        {
            Store store = db.Stores.Find(id);
            var url = "https://www.starbucks.com/store-locator?place=";
            var addr = store.StreetAddr + " " + store.City + " " + store.State;
            var customUrl = url + addr;
            return Redirect(customUrl);
        }
         


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }


    }
}
