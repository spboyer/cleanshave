using System;
using System.Linq;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Framework.OptionsModel;

namespace CleanShave.Models
{
    public class ApplicationUser : IdentityUser { }

    public class ApplicationContext: IdentityDbContext<ApplicationUser>
    {
        public ApplicationContext()
        {
        }

		protected override void OnModelCreating(ModelBuilder builder)
		{
			// Configure pluralization

            base.OnModelCreating(builder);
        }
    }
}
