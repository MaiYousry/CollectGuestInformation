using Repository.Pattern.Ef6;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using CollectGuestInformation.DAL.Entities.Model;

namespace CollectGuestInformation.DAL.Entities
{
    public class CollectGuestInformationContext:DataContext
    {
        public CollectGuestInformationContext() : base("name=CollectGuestInformationDB")
        {
            Database.SetInitializer<CollectGuestInformationContext>(null);
        }
        public DbSet<User> Users { get; set; }
    }
}
