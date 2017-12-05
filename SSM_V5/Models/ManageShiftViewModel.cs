using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SSM_V5.Models
{
    public class ManageShiftViewModel
    {
        public Shift ShiftModelObject { get; set; }
        public CoveredShift CoveredModelObject { get; set; }
        public AspNetUser UserModelObject { get; set; }
    }
}