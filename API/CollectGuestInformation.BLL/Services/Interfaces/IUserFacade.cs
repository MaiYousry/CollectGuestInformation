using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CollectGuestInformation.BLL.DTOs;

namespace CollectGuestInformation.BLL.Services.Interfaces
{
    public interface IUserFacade
    {
        UserDTO AddUser(UserDTO userDto);
        List<UserDTO> GetAllUsers();
    }
}
