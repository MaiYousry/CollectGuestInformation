using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CollectGuestInformation.DAL.Entities.Model;
using Service.Pattern;

namespace CollectGuestInformation.BLL.DataServices.Interfaces
{
    public interface IUserService : IService<User>
    {
        List<User> GetAllUsers();
        string GetLastUserCode();
    }
}
