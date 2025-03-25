import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotonEnlace } from '../../interfaces/boton-enlace.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-boton-enlace',
  imports: [RouterLink,NgClass],
  templateUrl: './boton-enlace.component.html',
  styleUrl: './boton-enlace.component.scss',
})
export class BotonEnlaceComponent {
  @Input() public boton?: BotonEnlace;

  @Input() public color?: string;
}
