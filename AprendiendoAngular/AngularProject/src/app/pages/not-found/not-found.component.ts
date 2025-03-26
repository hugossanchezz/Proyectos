import { Component } from '@angular/core';
import { BotonEnlaceComponent } from '../../components/boton-enlace/boton-enlace.component';
import { BotonEnlace } from '../../interfaces/boton-enlace.interface';

@Component({
  selector: 'app-not-found',
  imports: [
    BotonEnlaceComponent,
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  public botonInicio: BotonEnlace = {
   label: 'Volver a la lista',
    ruta: ['/', 'lista']
  };
}
