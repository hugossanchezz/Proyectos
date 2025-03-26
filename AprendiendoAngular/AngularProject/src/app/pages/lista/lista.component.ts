import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../interfaces/usuario.interface';
import { FormControl, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Observable, tap } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista',
  imports: [
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    UpperCasePipe,
    RouterLink
  ],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent {
  public servicioUsuario = inject(UsuariosService);

  public usuarios$: Observable<Usuario[] | undefined> =
    this.servicioUsuario.getUsuarios$();

  public filtroBusqueda: FormControl = new FormControl('');
  public cadenaBusqueda: string = '';

  // Columnas que se mostrarán en la tabla
  public displayedColumns: string[] = ['nombre', 'email', 'telefono', 'acciones'];

  ngOnInit(): void {
    this.filtroBusqueda.valueChanges
      .pipe(
        debounceTime(500),
        tap((valor) => {
          this.cadenaBusqueda = valor || '';
        })
      )
      .subscribe();
  }

  /**
   * Filtra los usuarios según el texto ingresado en el campo de búsqueda.
   * @param usuarios - Lista de usuarios original.
   * @returns - Lista de usuarios filtrada.
   */
  public filtrarUsuarios(usuarios: Usuario[]): Usuario[] {
    if (!this.cadenaBusqueda) return usuarios;
    return usuarios.filter((usuario) =>
      (usuario.nombre + ' ' + usuario.apellido)
        .toLowerCase()
        .includes(this.cadenaBusqueda.toLowerCase())
    );
  }
}
