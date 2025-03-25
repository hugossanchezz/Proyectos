import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { TarjetaComponent } from '../../components/tarjeta/tarjeta.component';
import { BotonEnlaceComponent } from '../../components/boton-enlace/boton-enlace.component';
import { Usuario } from '../../interfaces/usuario.interface';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Observable, tap } from 'rxjs';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { FiltrarNombrePipe } from '../../pipes/filtrar-nombre.pipe';

@Component({
  selector: 'app-lista',
  imports: [
    TarjetaComponent,
    BotonEnlaceComponent,
    FormsModule,
    ReactiveFormsModule,
    UpperCasePipe,
    FiltrarNombrePipe,
    AsyncPipe,
  ],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
})
export class ListaComponent {
  public servicioUsuario = inject(UsuariosService);

  public usuarios$: Observable<Usuario[] | undefined> =
    this.servicioUsuario.getUsuarios$();

  public filtroBusqueda: FormControl = new FormControl('');
  public cadenaBusqueda: string = '';

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
}
