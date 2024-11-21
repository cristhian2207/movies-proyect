import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ListadoPeliculasComponent } from "../listado-peliculas/listado-peliculas.component";
import { FiltroPeliculas } from './filtroPeliculas';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, ListadoPeliculasComponent],
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent implements OnInit{
  
  ngOnInit(): void {
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value as FiltroPeliculas)
    this.form.valueChanges.subscribe(valores => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores as FiltroPeliculas)
      this.escribirParametrosBusquedaEnURL(valores as FiltroPeliculas); 
    })
  }

  buscarPeliculas(valores: FiltroPeliculas){
    if(valores.titulo){
      this.peliculas = this.peliculas.filter(p=>p.titulo.indexOf(valores.titulo) !== -1);
    }

    if(valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(p=>p.generos.indexOf(valores.generoId) !== -1);
    }

    if(valores.enCines){
      this.peliculas = this.peliculas.filter(p=>p.enCines)
    }

    if(valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(p=>p.proximosEstrenos)
    }
  }

  escribirParametrosBusquedaEnURL(valores: FiltroPeliculas){
    let queryStrings = [];

    if(valores.titulo){
      queryStrings.push(`titulo=${encodeURIComponent(valores.titulo)}`)
    }

    if(valores.generoId !== 0){
      queryStrings.push(`generoId=${valores.generoId}`)
    }

    if(valores.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${valores.proximosEstrenos}`)
    }

    if(valores.enCines){
      queryStrings.push(`enCines=${valores.enCines}`)
    }

    this.location.replaceState('peliculas/filtrar', queryStrings.join('&'));
  }
  
  leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params: any) => {
      let objeto: any = {}

      if(params.titulo){
        objeto.titulo = params.titulo;
      }
      if(params.generoId){
        objeto.generoId = Number(params.generoId);
      }
      if(params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos;
      }
      if(params.enCines){
        objeto.enCines = params.enCines;
      }

      this.form.patchValue(objeto);
    })
  }

  limpiar(){
    this.form.patchValue({
      titulo: '',
      generoId: 0,
      proximosEstrenos: false,
      enCines: false
    });
  }

  private formBuilder = inject(FormBuilder);
  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute);

  form = this.formBuilder.group({
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  })

  generos = [
    {id: 1, nombre: 'Drama'},
    {id: 2, nombre: 'Acción'},
    {id: 3, nombre: 'Comedia'}
  ]
  peliculasOriginal = [{
    titulo: 'Transformers 1',
    fechaLanzamiento: new Date("2024-08-28"),
    precio: 500.50,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Transformers_One_Official_Poster.jpg/220px-Transformers_One_Official_Poster.jpg',
    generos: [1,2,3],
    enCines: false,
    proximosEstrenos: true
  },
  {
    titulo: 'Cuando las luces se apagan',
    fechaLanzamiento: new Date("2020-07-22"),
    precio: 669.99,
    poster: 'https://cdn.cinencuentro.com/wp-content/uploads/2016/08/lights-out-poster-lg.jpg',
    generos: [3],
    enCines: false,
    proximosEstrenos: false
  },
  {
    titulo: 'Iron Man 3',
    fechaLanzamiento: new Date("2012-05-03"),
    precio: 1400.99,
    poster: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9259486_p_v13_aa.jpg',
    generos: [2],
    enCines: true,
    proximosEstrenos: false
  },
  {
    titulo: 'It ends with us',
    fechaLanzamiento: new Date("2024-08-09"),
    precio: 275.00,
    poster: 'https://m.media-amazon.com/images/M/MV5BYzM2NGMzNGQtZjNhMi00MTVkLTg2ZGQtN2M4OTllYzU1Y2Y0XkEyXkFqcGc@._V1_.jpg',
    generos: [1],
    enCines: true,
    proximosEstrenos: false
  },
  {
    titulo: 'Deadpool & Wolverine',
    fechaLanzamiento: new Date("2024-08-12"),
    precio: 999.99,
    poster: 'https://lumiere-a.akamaihd.net/v1/images/tidalwave_payoff_poster_las_0a47c6a2.jpeg',
    generos: [2],
    enCines: true,
    proximosEstrenos: false
  },
  {
    titulo: 'Mi villano favorito 4',
    fechaLanzamiento: new Date("2024-07-03"),
    precio: 814.99,
    poster: 'https://m.media-amazon.com/images/M/MV5BNzY0ZTlhYzgtOTgzZC00ZTg2LTk4NTEtZDllM2E2NGE5Njg2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    generos: [2,3],
    enCines: false,
    proximosEstrenos: true
  }];

  peliculas = this.peliculasOriginal;
}
