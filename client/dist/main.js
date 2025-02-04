"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Studente_1 = require("./Studente");
const PersoneServizi_1 = require("./PersoneServizi");
const persona1 = new Studente_1.Studente("3fa85f64-5717-4562-b3fc-2c963f66afa6", "Michele", "Sette", new Date("2001/01/27T11:08:31.431Z"));
const provaservizi = new PersoneServizi_1.PersoneServizi();
provaservizi.CreaPersona(persona1);
// provaservizi.VisualizzaPersone();
