import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public usuarios: Usuario[] = [];
  constructor() { }
}
