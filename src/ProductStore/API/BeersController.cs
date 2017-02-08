using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProductStore.Data;
using ProductStore.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ProductStore.API
{
    [Route("api/[controller]")]
    public class BeersController : Controller
    {
        private ApplicationDbContext _db;

        public BeersController(ApplicationDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        public List<Beer> Get()
        {
            List<Beer> beers = (from b in _db.Beers select b).ToList();
            return beers;
        }

        [HttpGet("{id}")]
        public Beer Get(int id)
        {
            Beer beer = (from b in _db.Beers where b.Id == id select b).FirstOrDefault();
            return beer;
        }
    }
}
