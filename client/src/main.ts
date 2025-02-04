import { Studente } from "./Studente";
import { PersoneServizi } from "./PersoneServizi";

const persona1 = new Studente("3fa85f64-5717-4562-b3fc-2c963f66afa6", "Michele", "Sette", new Date("2001/01/27T11:08:31.431Z"));
const provaservizi = new PersoneServizi()

provaservizi.CreaPersona(persona1);

// provaservizi.VisualizzaPersone();