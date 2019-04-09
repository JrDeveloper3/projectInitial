import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'kc-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

   item:string;

   @Output() //Variable de salida
   eventoAñadir: EventEmitter<string>;

  constructor() {
    this.eventoAñadir = new EventEmitter();
  }

  ngOnInit() {
  }


  btnGuardar(){
    console.log(this.item);
      this.eventoAñadir.emit(this.item); //Enviamos el item con EventEmitter.
      this.item=''; //Dejamos el input en blanco
  }
}
