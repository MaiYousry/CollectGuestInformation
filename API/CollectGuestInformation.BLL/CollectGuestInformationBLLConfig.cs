using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.Configuration;
using CollectGuestInformation.BLL.DataServices;
using CollectGuestInformation.BLL.DataServices.Interfaces;
using CollectGuestInformation.BLL.DTOs;
using CollectGuestInformation.DAL;
using CollectGuestInformation.DAL.Entities.Model;

using Unity;
using Unity.Lifetime;

namespace CollectGuestInformation.BLL
{
    public static class CollectGuestInformationBLLConfig
    {
        public static void RegisterMappings(MapperConfigurationExpression mapperConfiguration)
        {
            mapperConfiguration.CreateMap<User, UserDTO>();
            Mapper.Initialize(mapperConfiguration);
        }

        public static void RegisterTypes(IUnityContainer container)
        {
            CollectGuestInformationDALConfig.RegisterTypes(container);
            container
                
                .RegisterType<IUserService, UserService>(new PerResolveLifetimeManager());
        }
    }
}
