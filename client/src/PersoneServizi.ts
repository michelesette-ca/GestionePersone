import { Persona } from "./Persona";

export class PersoneServizi {

    async CreaPersona(persona: Persona ){
        const collegamento = await fetch("http://localhost:7271/api/persone", {
            method: 'POST',
            body: JSON.stringify(persona)
        });

        if (!collegamento.ok) {
            throw new Error(`Errore nella risposta: ${collegamento.statusText}`);
          }
    }
}