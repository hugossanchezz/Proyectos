import { Component, inject, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { Subject, tap } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component'; // Importa DialogoResultadoComponent

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent implements OnInit {
  public servicioUsuario = inject(UsuariosService);
  public destroyed$ = new Subject();
  public formulario: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    telefono: new FormControl(''),
    politicas: new FormControl('', [Validators.requiredTrue]),
  });
  public dialog = inject(MatDialog); // Inyecta MatDialog

  ngOnInit(): void {
    this.servicioUsuario
      .getUsuarios$()
      .pipe(
        takeUntil(this.destroyed$),
        tap((usuarios) => {})
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public onSubmit(): void {
    const valores = this.formulario.value;

    const nuevoUsuario: Partial<Usuario> = {
      nombre: valores.nombre,
      apellido: valores.apellido,
      email: valores.email || null,
      telefono: valores.telefono || null,
    };

    const mensaje = this.servicioUsuario.addUsuario(nuevoUsuario);

    this.dialog.open(DialogComponent, { // Abre el diálogo
      data: { mensaje: mensaje },
    });

    this.limpiarFormulario();
  }

  public limpiarFormulario(): void {
    this.formulario.setValue({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      politicas: false,
    });
  }
}
