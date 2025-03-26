import { BehaviorSubject } from 'rxjs';
import { Usuario } from './../interfaces/usuario.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private _usuarios$ = new BehaviorSubject<Usuario[] | undefined>(undefined);
  private readonly BDD_USUARIOS = 'bdd_usuarios';
  private readonly BDD_ULTIMO_ID = 'bdd_ultimo_id';

  constructor() {}

  public addUsuario(usuario: Partial<Usuario>): string {
    let guardado = 'No se ha guardado el usuario';

    try {
      const id = this._getUltimoId() + 1;
      usuario.id = id;

      this.cargarUsuarios();

      const usuarios = this._usuarios$.value as Usuario[];

      if (usuarios.some((u) => u.email === usuario.email))
        throw new Error('El usuario ya existe');

      usuarios.push(usuario as Usuario);

      localStorage.setItem(this.BDD_USUARIOS, JSON.stringify(usuarios));
      localStorage.setItem(this.BDD_ULTIMO_ID, id.toString());

      this._usuarios$.next(usuarios);

      guardado = 'Se ha guardado el usuario';
    } catch (error) {
      guardado = 'El correo ya existe';
    }

    return guardado;
  }

  // public eliminarUsuario(id: number): string {
  //   try {
  //     const usuarios: Usuario[] = this._usuarios$.value as Usuario[];
  //     const usuarioIndexEliminar = usuarios.findIndex((u) => u.id === id);
  //     if (usuarioIndexEliminar >= 0) {
  //       usuarios.splice(usuarioIndexEliminar, 1);
  //       localStorage.setItem(this.BDD_USUARIOS, JSON.stringify(usuarios));
  //       localStorage.setItem(this.BDD_ULTIMO_ID, id.toString());
  //       this._usuarios$.next(usuarios);
  //       return 'Usuario eliminado';
  //     }
  //   } catch (error) {
  //     return 'Error al eliminar el usuario';
  //   }
  // }

  public getUsuario(id: number) {
    const usuarios = this._usuarios$.value as Usuario[];
    return usuarios.find((usuario) => usuario.id === id);
  }

  public cargarUsuarios() {
    if (!this._usuarios$.value) {
      const usuariosBdd = localStorage.getItem(this.BDD_USUARIOS);

      let usuarios = [];

      if (usuariosBdd) {
        usuarios = JSON.parse(usuariosBdd);
      }
      this._usuarios$.next(usuarios);
    }
  }

  public getUsuarios$() {
    if (!this._usuarios$.value) {
      this.cargarUsuarios();
    }
    return this._usuarios$.asObservable();
  }

  private _getUltimoId(): number {
    const ultimoId = localStorage.getItem(this.BDD_ULTIMO_ID);
    return ultimoId ? +ultimoId : 0;
  }
}
