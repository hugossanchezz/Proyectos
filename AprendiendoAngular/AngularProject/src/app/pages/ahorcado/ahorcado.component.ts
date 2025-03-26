import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ahorcado',
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.scss',
})
export class AhorcadoComponent implements OnInit {
  public palabraSeleccionada: string = '';
  public letrasPalabra: string[] = [];
  public letrasAdivinadas: string[] = [];
  public letrasIncorrectas: string[] = [];
  public intentosMaximos: number = 6;
  public intentosRestantes: number = this.intentosMaximos;
  public juegoTerminado: boolean = false;
  public mensaje: string = '';
  public letraIngresada: string = '';

  private palabras: string[] = [
    'angular',
    'desarrollo',
    'programacion',
    'javascript',
    'tecnologia',
  ];

  ngOnInit(): void {
    this.iniciarJuego();
  }

  iniciarJuego(): void {
    this.palabraSeleccionada = this.seleccionarPalabraAleatoria();
    this.letrasPalabra = this.palabraSeleccionada.split('');
    this.letrasAdivinadas = this.letrasPalabra.map(() => '_'); //inicializar el array con guiones
    this.letrasIncorrectas = [];
    this.intentosRestantes = this.intentosMaximos;
    this.juegoTerminado = false;
    this.mensaje = '';
  }

  seleccionarPalabraAleatoria(): string {
    const indiceAleatorio = Math.floor(Math.random() * this.palabras.length);
    return this.palabras[indiceAleatorio];
  }

  verificarLetra(): void {
    if (this.juegoTerminado || !this.letraIngresada) return;

    const letra = this.letraIngresada.toLowerCase();
    this.letraIngresada = '';

    if (
      this.letrasIncorrectas.includes(letra) ||
      this.letrasAdivinadas.includes(letra)
    )
      return;

    if (this.letrasPalabra.includes(letra)) {
      this.letrasPalabra.forEach((l, i) => {
        if (l === letra) {
          this.letrasAdivinadas[i] = letra;
        }
      });
      if (!this.letrasAdivinadas.includes('_')) {
        this.juegoTerminado = true;
        this.mensaje = '¡Ganaste!';
      }
    } else {
      this.letrasIncorrectas.push(letra);
      this.intentosRestantes--;
      if (this.intentosRestantes === 0) {
        this.juegoTerminado = true;
        this.mensaje = '¡Perdiste! La palabra era: ' + this.palabraSeleccionada;
      }
    }
  }

  reiniciarJuego(): void {
    this.iniciarJuego();
  }
}
