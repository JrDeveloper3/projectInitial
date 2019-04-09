import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kc-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Output()
  eventBorrar:EventEmitter<number>;

  @Input() //Propiedad accesible, de entrada la recibe
  aItems;

  constructor() {
    this.eventBorrar = new EventEmitter();
   }

  ngOnInit() {


  }

  //Esta funcion avisara de que debe borrar algo
  btnBorrar(i){
    this.eventBorrar.emit(i);
  }

}
