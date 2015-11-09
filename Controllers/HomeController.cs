using Microsoft.AspNet.Mvc;

namespace CleanShave.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var url = Request.Path.Value;
            if (url.EndsWith(".ico") || url.EndsWith(".map")) {
                return new HttpStatusCodeResult(404);
            } else {
                return View();
            }
        }

        public IActionResult Error()
        {
            return View("~/Views/Shared/Error.cshtml");
        }
    }
}
