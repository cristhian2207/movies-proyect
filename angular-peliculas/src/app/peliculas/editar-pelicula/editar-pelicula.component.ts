import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaCreacionDTO, PeliculasDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { ActorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-editar-pelicula',
  standalone: true,
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {

  @Input({transform: numberAttribute})
  id!: number;

  pelicula: PeliculasDTO = {
    id: 1,
    titulo: 'Iron Man 3',
    trailer: '',
    fechaLanzamiento: new Date('2018-07-25'),
    poster: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9259486_p_v13_aa.jpg'
  }

  generosSeleccionados: SelectorMultipleDTO[] = [
    {llave: 2, valor: 'Accion'},
  ];
  generosNoSeleccionados: SelectorMultipleDTO[] = [
    {llave: 1, valor: 'Drama'},
    {llave: 3, valor: 'Comedia'}
  ]

  cinesSeleccionados: SelectorMultipleDTO[] = [
    {llave: 3, valor: 'Downtown'}
  ];
  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    {llave: 1, valor: 'Agora mall'},
    {llave: 2, valor: 'Megacentro'}
  ];

  actoresSeleccionados: ActorAutoCompleteDTO[] = [
    { 
      id: 2,
      nombre: 'Tom Hanks',
      personaje: 'Forrest Gump',
      foto: 'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_.jpg'
    }
  ]

  guardarCambios(peli: PeliculaCreacionDTO){
    console.log('editando la pelicula: ', peli); 
  }
}
