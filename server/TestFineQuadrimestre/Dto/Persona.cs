namespace TestFineQuadrimestre.Dto
{

    public class Persona
    {
        int contatoreId = 1;
        public Guid Id { get; set; }
        public string? Nome { get; set; }
        public string? Cognome { get; set; }
        public DateTime DataNascita { get; set; }
        public Dominio Dominio { get; set; }
        public string? Email { get; set; }


        //public Persona(Guid id,string nome, string cognome, DateTime dataNascita, string email)
        //{
        //    Id = id;
        //    Nome = nome;
        //    Cognome = cognome;
        //    DataNascita = dataNascita;
        //    Email = email;
        //}
    }


}
