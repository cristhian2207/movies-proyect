using PeliculasAPI.Entidades;

namespace PeliculasAPI
{
    public class RepositorioEnMemoria : IRepositorio
    {
        private List<Genero> generos;

        public RepositorioEnMemoria()
        {
            generos = new List<Genero>()
            {
                new Genero{Id = 1, Nombre = "Comedia"},
                new Genero{Id = 2, Nombre = "Accion"},
            };
        }

        public List<Genero> getGeneros() 
        { 
            return generos; 
        }

        public void Crear(Genero genero) 
        { 
            generos.Add(genero);
        }

        public async Task<Genero?> getGeneroById(int id) 
        {
            await Task.Delay(TimeSpan.FromSeconds(3));
            return generos.FirstOrDefault(g=>g.Id == id);
        }

        public bool Existe(string nombre)
        {
            return generos.Any(g=>g.Nombre == nombre);
        }
    }
}
