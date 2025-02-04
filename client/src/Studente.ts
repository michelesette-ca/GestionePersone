import { Dominio, Persona } from "./Persona";
import { PersoneServizi } from "./PersoneServizi";

export class Studente extends Persona {
    dominio = Dominio.Studente;

    override getDati(): string {
        return this.dominio + super.getDati()
    }
}