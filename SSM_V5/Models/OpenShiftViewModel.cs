using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SSM_V5.Models
{
    public class OpenShiftViewModel
    {
        public Shift ShiftModelObject { get; set; }
        public Store StoreModelObject { get; set; }
        public virtual AspNetUser AspNetUser { get; set; }
    }
}