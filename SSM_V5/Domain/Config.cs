using System.Web.Configuration;

namespace SSM_V5.Domain
{
    public class Config
    {
        public static string AccountSid => WebConfigurationManager.AppSettings["AccountSid"] ??
                                           "ACca3651e889aea2f894865736bed46a0e";

        public static string AuthToken => WebConfigurationManager.AppSettings["AuthToken"] ??
                                          "cc470004dadf2f5bca2c110c299da125";

        public static string TwilioNumber => WebConfigurationManager.AppSettings["TwilioNumber"] ??
                                             "+14156971058";
    }
}