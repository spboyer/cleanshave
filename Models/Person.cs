using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CleanShave.Models
{
    public class Person
    {
        public int Id { get; set; }
        public string First { get; set; }
        public string Last { get; set; }
        public int Age { get; set; }
        public string FavoriteBeer { get; internal set; }
    }
}
