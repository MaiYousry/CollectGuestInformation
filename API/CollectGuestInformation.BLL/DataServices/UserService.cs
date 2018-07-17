using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CollectGuestInformation.BLL.DataServices.Interfaces;
using Service.Pattern;
using CollectGuestInformation.DAL.Entities.Model;
using Repository.Pattern.Repositories;

namespace CollectGuestInformation.BLL.DataServices
{
    public class UserService : Service<User>, IUserService
    {
        public UserService(IRepositoryAsync<User> repository) : base(repository)
        {

        }

        public User GetUser(string UserFirstName, string UserSecondName, string UserFamilyName)
        {
            var user = _repository.Query().Select().FirstOrDefault(); // law kaza user bnafs al asm? mafrud arag3 kolo
            return user;
        }

        public List<User> GetAllUsers()
        {
            var users = _repository.Query().Select().ToList();
            return users;
        }

        public string GetLastUserCode()
        {
            var user = _repository.Query().Select(x => x.UserCode).LastOrDefault();
            return user;
        }

    }
}
