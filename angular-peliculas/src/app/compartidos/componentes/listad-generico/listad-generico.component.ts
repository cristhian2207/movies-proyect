import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listad-generico',
  standalone: true,
  imports: [],
  templateUrl: './listad-generico.component.html',
  styleUrl: './listad-generico.component.css'
})
export class ListadGenericoComponent {
  @Input({required: true}) listado: any;
}
