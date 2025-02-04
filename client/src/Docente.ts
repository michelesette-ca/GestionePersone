import { Dominio, Persona } from "./Persona";

export class Docente extends Persona {
    dominio = Dominio.Docente;

    override getDati(): string {
        return this.dominio + super.getDati()
    }
}