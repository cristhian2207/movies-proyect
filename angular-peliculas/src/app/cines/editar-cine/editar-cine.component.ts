import { Component, Input, numberAttribute } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
  selector: 'app-editar-cine',
  standalone: true,
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {
  
  cine: CineDTO = {
    id: 1,
    nombre: 'Megaplex',
    latitud: 18.50654668568196,
    longitud: -69.8573734425665
  }

  

  guardarCambios(cine: CineCreacionDTO){
    console.log('Editando el cine: ', cine);
  }
}
