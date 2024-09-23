using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Nettestone.Infrastructure;

public class NettestoneDbContext : IdentityDbContext<IdentityUser>
{
    public NettestoneDbContext(DbContextOptions<NettestoneDbContext> options)
        : base(options) { }
}
