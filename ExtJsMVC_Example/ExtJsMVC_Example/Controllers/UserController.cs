using ExtJsMVC_Example.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ExtJsMVC_Example.Controllers
{
    public class UserController : Controller
    {

        static List<UserModel> _list = Enumerable.Range(1, 30).Select(x => new UserModel
        {
            id = x,
            name = string.Format("name-{0}", x),
            email = string.Format("email-{0}@gmail.com", x)
        }).ToList();

        public ActionResult Index()
        {
            return View();
        }


        public ActionResult List()
        {
            return Json(new
            {
                data = _list,
                success = true
            }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Add(UserModel user)
        {
            if (user == null) return Json(new { success = false });

            user.id = _list.Count + 1;
            _list.Add(user);

            return Json(new
            {
                data = user,
                success = true
            });
        }

        [HttpPost]
        public ActionResult Update(UserModel user)
        {
            if (user == null) return Json(new { success = false });

            var found = _list.FirstOrDefault(x => x.id == user.id);

            if (found == null) return Json(new { success = false });

            if (!string.IsNullOrEmpty(user.name)) found.name = user.name;
            if (!string.IsNullOrEmpty(user.email)) found.email = user.email;

            return Json(new
            {
                data = found,
                success = true
            });
        }

        [HttpPost]
        public ActionResult Delete(int id)
        {
            var found = _list.FirstOrDefault(x => x.id == id);

            if (found == null) return Json(new { success = false });

            _list.Remove(found);

            return Json(new
            {
                success = true
            });
        }
    }
}
