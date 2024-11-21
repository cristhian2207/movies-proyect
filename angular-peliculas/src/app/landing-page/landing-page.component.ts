import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from "../peliculas/listado-peliculas/listado-peliculas.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ListadoPeliculasComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(() =>{
      this.peliculasEnCines = [{
        titulo: 'Transformers 1',
        fechaLanzamiento: new Date("2024-08-28"),
        precio: 500.50,
        poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Transformers_One_Official_Poster.jpg/220px-Transformers_One_Official_Poster.jpg'
      },
      {
        titulo: 'Cuando las luces se apagan',
        fechaLanzamiento: new Date("2020-07-22"),
        precio: 669.99,
        poster: 'https://cdn.cinencuentro.com/wp-content/uploads/2016/08/lights-out-poster-lg.jpg'
      },
      {
        titulo: 'Iron Man 3',
        fechaLanzamiento: new Date("2012-05-03"),
        precio: 1400.99,
        poster: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9259486_p_v13_aa.jpg'
      }];

      this.peliculasProximosEstrenos = [{
        titulo: 'It ends with us',
        fechaLanzamiento: new Date("2024-08-09"),
        precio: 275.00,
        poster: 'https://m.media-amazon.com/images/M/MV5BYzM2NGMzNGQtZjNhMi00MTVkLTg2ZGQtN2M4OTllYzU1Y2Y0XkEyXkFqcGc@._V1_.jpg'
      },
      {
        titulo: 'Deadpool & Wolverine',
        fechaLanzamiento: new Date("2024-08-12"),
        precio: 999.99,
        poster: 'https://lumiere-a.akamaihd.net/v1/images/tidalwave_payoff_poster_las_0a47c6a2.jpeg'
      },
      {
        titulo: 'Mi villano favorito 4',
        fechaLanzamiento: new Date("2024-07-03"),
        precio: 814.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BNzY0ZTlhYzgtOTgzZC00ZTg2LTk4NTEtZDllM2E2NGE5Njg2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
      }];
    }, 100)
  }
  peliculasEnCines!: any[];
  peliculasProximosEstrenos!: any[]
}
