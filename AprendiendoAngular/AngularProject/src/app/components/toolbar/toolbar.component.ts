import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonEnlaceComponent } from "../boton-enlace/boton-enlace.component";
import { BotonEnlace } from '../../interfaces/boton-enlace.interface';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  imports: [
    BotonEnlaceComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  @Input()
  public botones?: BotonEnlace[];

  @Input() public color?: string;
}
