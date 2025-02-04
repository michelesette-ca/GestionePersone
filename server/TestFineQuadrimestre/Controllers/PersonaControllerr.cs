using Microsoft.AspNetCore.Mvc;
using TestFineQuadrimestre.Dto;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using TestFineQuadrimestre.Dto;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TestFineQuadrimestre.Controllers
{

    [Route("api/persone")]
    [ApiController]
    public class PersonaController : ControllerBase
    {

        private readonly string filePath = "persone.json";
        private List<Persona> ListaPersone = new List<Persona>();

        public PersonaController()
        {
            if (System.IO.File.Exists(filePath))
            {
                var json = System.IO.File.ReadAllText(filePath);
                ListaPersone = JsonSerializer.Deserialize<List<Persona>>(json) ?? new List<Persona>();
            }
        }

        private void SalvaPersoneSuFile()
        {
            var json = JsonSerializer.Serialize(ListaPersone, new JsonSerializerOptions { WriteIndented = true });
            System.IO.File.WriteAllText(filePath, json);
        }


        // GET: api/<PersonaController>
        [HttpGet]
        public IEnumerable<Persona> GetPersone()
        {
            return ListaPersone;
        }

        // GET api/<PersonaController>/5
        [HttpGet("{id}")]
        public IActionResult GetPersonaFromId(Guid id, [FromBody] Persona personaCercare)
        {
            var persona = ListaPersone.FirstOrDefault(x => x.Id == id);

            if (persona == null)
            {
                return NotFound("Persona non trovata");
            }
            return Ok(persona); 
        }

        // POST api/<PersonaController>
        [HttpPost]
        public IActionResult CreaPersona([FromBody] Persona persona)
        {
            ListaPersone.Add(persona);
            SalvaPersoneSuFile();
            return Ok("Persona creata con successo.");
        }

        // PUT api/<PersonaController>/5
        [HttpPut("{id}")]
        public IActionResult AggiornaPersona(Guid id, [FromBody] Persona personaAggiornata)
        {
            var persona = ListaPersone.FirstOrDefault(p => p.Id == id);
            if (persona == null) return NotFound("Persona non trovata.");

            persona.Nome = personaAggiornata.Nome;
            persona.Cognome = personaAggiornata.Cognome;
            persona.DataNascita = personaAggiornata.DataNascita;
            persona.Email = personaAggiornata.Email;

            SalvaPersoneSuFile();
            return Ok("Persona aggiornata.");
        }


        // DELETE api/<PersonaController>/5
        [HttpDelete("{id}")]
        public IActionResult EliminaPersona(Guid id)
        {
            var persona = ListaPersone.FirstOrDefault(p => p.Id == id);
            if (persona == null) return NotFound("Persona non trovata.");

            ListaPersone.Remove(persona);
            SalvaPersoneSuFile();
            return Ok("Persona rimossa con successo.");
        }
    }
}
