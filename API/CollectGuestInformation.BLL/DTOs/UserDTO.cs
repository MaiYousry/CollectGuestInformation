using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CollectGuestInformation.BLL.DTOs
{
    public class UserDTO
    {
        public long UserId { get; set; }
        public string UserFirstName { get; set; }
        public string UserSecondName { get; set; }
        public string UserFamilyName { get; set; }
        public bool UserGender { get; set; }
        public bool UserNationality { get; set; }
        public string UserJob { get; set; }
        public string UserCountry { get; set; }
        public string UserCity { get; set; }
        public string UserMobile { get; set; }
        public string UserEmail { get; set; }
        public string UserCode { get; set; }
        public DateTime UserAge { get; set; }
        public string UserBank { get; set; }
        public long UserBankNo { get; set; }
        public string UserComment { get; set; }
    }
}
