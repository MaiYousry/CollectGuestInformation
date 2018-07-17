using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using CollectGuestInformation.BLL;
using CollectGuestInformation.BLL.Services;
using CollectGuestInformation.BLL.Services.Interfaces;
using Unity;
using Unity.Lifetime;
using Unity.WebApi;

namespace CollectGuestInformation.API.App_Start
{
    public static class UnityConfig
    {
        public static void RegisterTypes(HttpConfiguration config)
        {
            // NOTE: To load from web.config uncomment the line below. Make sure to add a Microsoft.Practices.Unity.Configuration to the using statements.
            // container.LoadConfiguration();
            var container = new UnityContainer();

            // TODO: Register your types here

            ApplyMapping(container, false);


            //GlobalConfiguration.Configuration.DependencyResolver = new Unity.WebApi.UnityDependencyResolver(container);
            GlobalConfiguration.Configuration.DependencyResolver =
                config.DependencyResolver = new UnityDependencyResolver(container);


        }

        public static void ApplyMapping(IUnityContainer container, bool applyDependencyResolver)
        {
            container.RegisterType<IUserFacade, UserFacade>(new PerResolveLifetimeManager());


            CollectGuestInformationBLLConfig.RegisterTypes(container);
            if (applyDependencyResolver)
                GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);


        }
    }
}