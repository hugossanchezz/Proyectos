import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotonEnlace } from '../../interfaces/boton-enlace.interface';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-boton-enlace',
  imports: [RouterLink,MatButtonModule],
  templateUrl: './boton-enlace.component.html',
  styleUrl: './boton-enlace.component.scss',
})
export class BotonEnlaceComponent {
  @Input() public boton?: BotonEnlace;
}
