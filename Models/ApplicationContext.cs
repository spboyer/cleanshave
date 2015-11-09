using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;

namespace CleanShave.Models
{
    public class ApplicationUser : IdentityUser { }

    public class ApplicationDbContext: IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
        {
        }

		protected override void OnModelCreating(ModelBuilder builder)
		{
			// Configure pluralization

            base.OnModelCreating(builder);
        }
    }
}
