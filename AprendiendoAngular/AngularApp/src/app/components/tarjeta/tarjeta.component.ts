import { NgClass } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  imports: [NgClass],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.scss'
})
export class TarjetaComponent {
 @Input() public color?: string;
}
