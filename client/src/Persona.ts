export enum Dominio {
    Studente = "studente",
    Docente = "docente",
}

export abstract class Persona {
    abstract dominio: Dominio

    constructor(public id: string, public nome: string, public cognome: string, public dataNascita: Date) { }

    get email() {
        return (`${this.nome.charAt(0).toLowerCase()}${this.cognome.toLowerCase()}@${this.dominio}.com`);
    }
    CalcolaEta(): number {
        let oggi = new Date();
        let eta = oggi.getDate() - this.dataNascita.getDate();

        if (oggi.getMonth() < this.dataNascita.getMonth() ||
            (oggi.getMonth() === this.dataNascita.getMonth() && oggi.getDate() < this.dataNascita.getDate())) {
            eta--;
        }
        return eta;
    }

    getDati(): string {
        return (`${this.nome}${this.cognome}\n Identificativo: ${this.id}\n Età: ${this.CalcolaEta}\n Email: ${this.email}\n Specializzazione: ${Dominio}`)
    }

}