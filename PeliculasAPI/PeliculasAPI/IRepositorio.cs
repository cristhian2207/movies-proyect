using PeliculasAPI.Entidades;

namespace PeliculasAPI
{
    public interface IRepositorio
    {
        List<Genero> getGeneros();
        Task<Genero?> getGeneroById(int id);
        bool Existe(string nombre);
        void Crear(Genero genero);
    }
}
