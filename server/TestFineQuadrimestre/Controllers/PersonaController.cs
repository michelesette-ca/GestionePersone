using Microsoft.AspNetCore.Mvc;
using TestFineQuadrimestre.Dto;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TestFineQuadrimestre.Controllers
{

    [Route("api/persone")]
    [ApiController]
    public class PersonaController : ControllerBase
    {
        List<Persona> ListaPersone = new List<Persona>();

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
        public bool CreaPersona(Persona persona)
        {
            ListaPersone.Add(persona);
            return true;
        }

        // PUT api/<PersonaController>/5
        [HttpPut("{id}")]
        public IActionResult AggiornaPersona(Guid id, [FromBody] Persona personaAggiornata)
        {
            var persona = ListaPersone.FirstOrDefault(p => p.Id == id);

            if (persona == null)
            {
                return NotFound("Persona non trovata.");
            }

            // Aggiornamento dei dati
            persona.Nome = personaAggiornata.Nome;
            persona.Cognome = personaAggiornata.Cognome;
            persona.DataNascita = personaAggiornata.DataNascita;
            persona.Email = personaAggiornata.Email;

            return Ok("Persona aggiornata.");
        }


        // DELETE api/<PersonaController>/5
        [HttpDelete("{id}")]
        public IActionResult EliminaPersona(Guid id, [FromBody] Persona personaEliminare)
        {
            var persona = ListaPersone.FirstOrDefault(p =>p.Id == id);

            if (persona == null)
            {
                return NotFound("Persona non trovata");
            }

            ListaPersone.Remove(persona);
            return Ok("Persona rimossa con successo");
        }
    }
}
