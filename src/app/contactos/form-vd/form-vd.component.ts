import { Grupo } from './../../models/Grupo.model';
import { GRUPOS, SECTORES } from './../../models/maestro.datos';
import { Sector } from './../../models/Sector.model';
import { Contacto } from './../../models/Contacto.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'kc-form-vd',
  templateUrl: './form-vd.component.html',
  styleUrls: ['./form-vd.component.css']
})
export class FormVdComponent implements OnInit {

  agrupos:Array<Grupo>;
  asectores:Array <Sector>;

  contacto:Contacto;
  sector:Sector;

  constructor() { }

  ngOnInit() {
    this.contacto= new Contacto();
    this.agrupos = GRUPOS;
    this.asectores = SECTORES;
  }

}
