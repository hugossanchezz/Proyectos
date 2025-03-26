import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BotonEnlace } from './interfaces/boton-enlace.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularApp';

  public botonesToolbar: BotonEnlace[]=[
    {
      label: 'Lista',
      ruta: ['/', 'lista'],
    },
    {
      label:'Formulario',
      ruta: ['/','formulario']
    },
    {
      label:'Ahorcado',
      ruta: ['/','ahorcado']
    }
  ]
}
