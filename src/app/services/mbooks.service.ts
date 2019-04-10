import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MbooksService {

  aLibros: Array<string>;

  constructor() {
    this.aLibros = [
      'Introduccion a Angular',
      'Angular a fondo',
      'Angular avanzado'
    ];
  }

  getLibros(clave:string){
      return this.aLibros;
  }

  // Cuando una funcion devuelve una promesa se le asigna un $ para reconocerlo
  getLibros$(clave:string){
    return new Observable(
      (observer) => {
        setTimeout( () => {
          observer.next(this.aLibros);
        }, 200)
      }
    );
}


}
