import {
  Component,
  inject,
  OnInit,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-detalles-usuario',
  imports: [],
  templateUrl: './detalles-usuario.component.html',
  styleUrl: './detalles-usuario.component.scss',
})
export class DetallesUsuarioComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  public activatedRoutedata = inject(ActivatedRoute);
  public servicioUsuarios = inject(UsuariosService);

  public usuario?: Usuario;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');

    const id = this.activatedRoutedata.snapshot.params['id'];

    this.usuario = this.servicioUsuarios.getUsuario(+id);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
