import { Component,inject } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { UsuariosService } from '../../services/usuarios.service';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {
  public servicioUsuario = inject(UsuariosService);

  public formulario: FormGroup = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    apellido: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.email]),
    telefono: new FormControl(''),
    politicas: new FormControl('',[Validators.requiredTrue])
  });

  public onSubmit(): void {
    const valores = this.formulario.value;

    const nuevoUsuario: Usuario = {
      nombre: valores.nombre,
      apellido: valores.apellido,
      email: valores.email || null,
      telefono: valores.telefono || null,
    };

    console.log(nuevoUsuario);

    this.servicioUsuario.usuarios.push(nuevoUsuario);

    this.limpiarFormulario();

  }

  public limpiarFormulario(): void {
    this.formulario.setValue({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      politicas: false
    });
  }
}
