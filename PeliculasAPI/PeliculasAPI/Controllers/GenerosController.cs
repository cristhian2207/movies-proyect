using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using PeliculasAPI.Entidades;

namespace PeliculasAPI.Controllers
{
    [Route("api/generos")]
    [ApiController]
    public class GenerosController : ControllerBase
    {
        private readonly IRepositorio repositorio;
        private readonly ServicioTransient transient1;
        private readonly ServicioTransient transient2;
        private readonly ServicioScoped scoped1;
        private readonly ServicioScoped scoped2;
        private readonly ServicioSingleton singleton;
        private readonly IOutputCacheStore outputCacheStore;
        private readonly IConfiguration configuration;
        private const string cacheTag = "generos";

        public GenerosController(IRepositorio repo,
            ServicioTransient transient1,
            ServicioTransient transient2,
            ServicioScoped scoped1,
            ServicioScoped scoped2,
            ServicioSingleton singleton,
            IOutputCacheStore outputCacheStore,
            IConfiguration configuration
            )
        {
            repositorio = repo;
            this.transient1 = transient1;
            this.transient2 = transient2;
            this.scoped1 = scoped1;
            this.scoped2 = scoped2;
            this.singleton = singleton;
            this.outputCacheStore = outputCacheStore;
            this.configuration = configuration;
        }

        [HttpGet("ejemplo-proveedor-configuracion")]
        public string GetEjemploProveedorConfiguracion()
        {
            return configuration.GetValue<string>("CadenaDeConexion")!;
        }

        [HttpGet("servicios-tiempos-de-vida")]
        public IActionResult GetServicioTiemposDeVida() 
        {
            return Ok(new
            {
                Transients = new { transient1 = transient1.ObtenerId, transient2 = transient2.ObtenerId },
                Scopeds = new { scoped1 = scoped1.ObtenerId, scoped2 = scoped2.ObtenerId },
                Singleton = singleton.ObtenerId
            });
        }


        [Route("obtenerTodos")]
        [OutputCache(Tags = [cacheTag])]
        [HttpGet]
        public List<Genero> Get()
        {
            var generos = repositorio.getGeneros();
            return generos;
        }

        [HttpGet("{id:int}")]
        [OutputCache(Tags = [cacheTag])]
        public async Task<ActionResult<Genero>> GetById(int id) 
        { 
            var generoEncontrado = await repositorio.getGeneroById(id);

            if (generoEncontrado is null)
            {
                return NotFound();
            }

            return generoEncontrado;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Genero genero)
        {
            var existeGenero = repositorio.Existe(genero.Nombre);
            if (existeGenero)
            {
                return BadRequest($"Ya existe un genero con el nombre: {genero.Nombre}");
            }

            repositorio.Crear(genero);
            await outputCacheStore.EvictByTagAsync(cacheTag, default);

            return Ok();
        }

        [HttpPut]
        public void Put()
        {

        }

        [HttpDelete]
        public void Delete()
        {

        }
    }
}
