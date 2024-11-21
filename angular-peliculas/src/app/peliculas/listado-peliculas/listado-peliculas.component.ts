import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ListadGenericoComponent } from "../../compartidos/componentes/listad-generico/listad-generico.component";
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, ListadGenericoComponent, MatButtonModule, MatIconModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit {
  ngOnInit(): void {
      
  }

  @Input({required: true})
  peliculas!: any[];

}
