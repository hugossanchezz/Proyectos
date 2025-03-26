import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';

@Pipe({
  name: 'filtrarNombre'
})
export class FiltrarNombrePipe implements PipeTransform {

  transform(value: Usuario[], cadena: string): Usuario[] {
    if (!cadena?.length) {
      return value;
    }
    const buscar=cadena.toLowerCase();

    return value.filter((usuario: Usuario) => {
      const nombreCompleto = `${usuario.nombre} ${usuario.apellido}`.toLowerCase();
      return nombreCompleto.includes(buscar);
    });
  }

}
