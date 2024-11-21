using PeliculasAPI.Entidades;

namespace PeliculasAPI
{
    public class RepositorioSqlServer : IRepositorio
    {
        private List<Genero> generos;

        public RepositorioSqlServer()
        {
            generos = new List<Genero>()
            {
                new Genero{Id = 1, Nombre = "Comedia SQL"},
                new Genero{Id = 2, Nombre = "Accion SQL"},
            };
        }

        public List<Genero> getGeneros()
        {
            return generos;
        }

        public async Task<Genero?> getGeneroById(int id)
        {
            await Task.Delay(TimeSpan.FromSeconds(3));
            return generos.FirstOrDefault(g => g.Id == id);
        }

        public bool Existe(string nombre)
        {
            return generos.Any(g => g.Nombre == nombre);
        }

        public void Crear(Genero genero)
        {
            throw new NotImplementedException();
        }
    }
}
