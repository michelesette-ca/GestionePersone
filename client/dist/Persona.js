"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = exports.Dominio = void 0;
var Dominio;
(function (Dominio) {
    Dominio["Studente"] = "studente";
    Dominio["Docente"] = "docente";
})(Dominio || (exports.Dominio = Dominio = {}));
class Persona {
    constructor(id, nome, cognome, dataNascita) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.dataNascita = dataNascita;
    }
    get email() {
        return (`${this.nome.charAt(0).toLowerCase()}${this.cognome.toLowerCase()}@${this.dominio}.com`);
    }
    CalcolaEta() {
        let oggi = new Date();
        let eta = oggi.getDate() - this.dataNascita.getDate();
        if (oggi.getMonth() < this.dataNascita.getMonth() ||
            (oggi.getMonth() === this.dataNascita.getMonth() && oggi.getDate() < this.dataNascita.getDate())) {
            eta--;
        }
        return eta;
    }
    getDati() {
        return (`${this.nome}${this.cognome}\n Identificativo: ${this.id}\n Età: ${this.CalcolaEta}\n Email: ${this.email}\n Specializzazione: ${Dominio}`);
    }
}
exports.Persona = Persona;
