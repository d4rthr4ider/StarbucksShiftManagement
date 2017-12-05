using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SSM_V5.Models
{
    public class CreateViewModel
    {
        public IEnumerable<Shift> Shifts { get; set; }
        public Shift CreateShift { get; set; }
    }
}