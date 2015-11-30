using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Stebra_Design.Startup))]
namespace Stebra_Design
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
