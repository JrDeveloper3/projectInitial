import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  sNombre: string;
  user:any;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Jorge';
    this.user = {
      name:'Jose',
      apellidos:'Ruiz'
    }
  }


  btnBorrar(){
    this.sNombre = '';
  }
}
