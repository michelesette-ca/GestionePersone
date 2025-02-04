import { Persona } from "./Persona";

export class PersoneServizi {

    async CreaPersona(persona: Persona) {
        const response = await fetch("http://localhost:7271/api/persone", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(persona)
        });

        if (!response.ok) {
            throw new Error(`Errore nella risposta: ${response.statusText}`);
        }
        
        return await response.json();
    }

    async VisualizzaPersone() {
        const response = await fetch("http://localhost:7271/api/persone");
        
        if (!response.ok) {
            throw new Error(`Errore nel recupero dei dati: ${response.statusText}`);
        }
        
        return await response.json();
    }

    async VisualizzaPersonaId(id: string) {
        const response = await fetch(`http://localhost:7271/api/persone/${id}`);
        
        if (!response.ok) {
            throw new Error(`Errore nel recupero della persona: ${response.statusText}`);
        }
        
        return await response.json();
    }

    async AggiornaPersona(persona: Persona) {
        const response = await fetch(`http://localhost:7271/api/persone/${persona.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(persona)
        });

        if (!response.ok) {
            throw new Error(`Errore nell'aggiornamento: ${response.statusText}`);
        }
        
        return await response.json();
    }
    
    async EliminaPersona(id: string) {
        const response = await fetch(`http://localhost:7271/api/persone/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`Errore nell'eliminazione: ${response.statusText}`);
        }
        
        return { message: "Persona eliminata con successo" };
    }
}