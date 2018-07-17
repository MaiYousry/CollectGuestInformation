using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using CollectGuestInformation.API.Models;
using CollectGuestInformation.BLL.DTOs;
using Invitations.API.Infrastructure;
using CollectGuestInformation.BLL.Services.Interfaces;
using AutoMapper;

namespace CollectGuestInformation.API.Controllers
{
    public class UsersController : BaseApiController
    {
        private IUserFacade _userFacade;

        public UsersController(IUserFacade userFacade)
        {
            _userFacade = userFacade;
        }

        [Route("api/Users", Name = "GetAllUsers")]
        [HttpGet]
        [ResponseType(typeof(List<UserModel>))]
        public IHttpActionResult GetAllUsers()
        {                                                                                                    
            var users = Mapper.Map<List<UserModel>>(_userFacade.GetAllUsers());

            return Ok(users);
        }

        [Route("api/Users", Name = "AddUsers")]
        [HttpPost]
        public IHttpActionResult AddUsers([FromBody] UserModel userModel)
        {
            var userCode = _userFacade.AddUser(Mapper.Map<UserDTO>(userModel));
            return Ok(userCode);
        }
    }
}
