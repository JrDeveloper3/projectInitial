import { Sector } from './Sector.model';
import { Grupo } from './Grupo.model';

export class Contacto{
  name: string;
  lastname: string;
  email:string;
  phoneNumber: string;
  grupo:Grupo;
  sector:Sector;
  aficiones:Array<any>;

  constructor(){  }
}
