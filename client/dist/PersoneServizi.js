"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersoneServizi = void 0;
class PersoneServizi {
    CreaPersona(persona) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("http://localhost:5070/api/persone", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(persona)
            });
            if (!response.ok) {
                throw new Error(`Errore nella risposta: ${response.statusText}`);
            }
            return yield response.json();
        });
    }
    VisualizzaPersone() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("http://localhost:5070/api/persone");
            if (!response.ok) {
                throw new Error(`Errore nel recupero dei dati: ${response.statusText}`);
            }
            return yield response.json();
        });
    }
    VisualizzaPersonaId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://localhost:7271/api/persone/${id}`);
            if (!response.ok) {
                throw new Error(`Errore nel recupero della persona: ${response.statusText}`);
            }
            return yield response.json();
        });
    }
    AggiornaPersona(persona) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://localhost:7271/api/persone/${persona.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(persona)
            });
            if (!response.ok) {
                throw new Error(`Errore nell'aggiornamento: ${response.statusText}`);
            }
            return yield response.json();
        });
    }
    EliminaPersona(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://localhost:7271/api/persone/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`Errore nell'eliminazione: ${response.statusText}`);
            }
            return { message: "Persona eliminata con successo" };
        });
    }
}
exports.PersoneServizi = PersoneServizi;
