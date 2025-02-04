using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Persona
{
    internal abstract class Persona
    {
        public int id = 1;
        public string? nome {  get; set; }
        public string? cognome { get; set; }
        public DateTime dataNascita { get; set; }
        public string? email { get; set; }
    }
}
