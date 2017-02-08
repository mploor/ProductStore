using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductStore.Models
{
    public class Beer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Brewery { get; set; }
        public string Style { get; set; }
        public decimal Abv { get; set; }
        public int NumInInventory { get; set; }
        public decimal Price { get; set; }

    }
}
