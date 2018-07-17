using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using CollectGuestInformation.BLL.DataServices.Interfaces;
using CollectGuestInformation.BLL.DTOs;
using CollectGuestInformation.BLL.Services.Interfaces;
using CollectGuestInformation.DAL.Entities.Model;
using Invitations.BLL.Services;
using Repository.Pattern.UnitOfWork;

namespace CollectGuestInformation.BLL.Services
{
    public class UserFacade : BaseFacade, IUserFacade
    {
        private IUserService _userService;

        public UserFacade(IUserService userService, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _userService = userService;
        }

        public List<UserDTO> GetAllUsers()
        {
            var users = _userService.GetAllUsers();
            return Mapper.Map<List<UserDTO>>(users);

        }

        public UserDTO AddUser(UserDTO userDto)
        {
            var user = new User();

            user.UserCity = userDto.UserCity;
            user.UserCountry = userDto.UserCountry;
            user.UserEmail = userDto.UserEmail;
            user.UserFamilyName = userDto.UserFamilyName;
            user.UserFirstName = userDto.UserFirstName;
            user.UserGender = userDto.UserGender;
            user.UserJob = userDto.UserJob;
            user.UserMobile = "00966" + userDto.UserMobile;
            user.UserNationality = userDto.UserNationality;
            user.UserSecondName = userDto.UserSecondName;
            user.UserBank = userDto.UserBank;
            user.UserBankNo = userDto.UserBankNo;
            user.UserComment = userDto.UserComment;
            user.UserAge = userDto.UserAge.AddDays(1);

            var userCodeDB = _userService.GetLastUserCode();
            var userCode = string.IsNullOrEmpty(userCodeDB) ? 1 : long.Parse(userCodeDB) + 1;
            var codeLength = userCode.ToString().Length;
            var userCodeSt = "";
            if(codeLength < 7)
            {
                int diff = 7 - codeLength;

                for(int i =0; i< diff; i++)
                {
                    userCodeSt += "0";
                }
                userCodeSt += userCode.ToString();
            }
            user.UserCode = userCodeSt;

            _userService.Insert(user);
            SaveChanges();
            var usera = Mapper.Map<UserDTO>(user);
            return usera;
        }
    }
}
