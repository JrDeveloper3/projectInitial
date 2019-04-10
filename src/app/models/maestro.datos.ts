import { Sector } from './Sector.model';
import { Grupo } from './Grupo.model';
import { Aficion } from './aficiones.model';
// Va a tener una serie de contactos

export const GRUPOS: Array<Grupo>=[
    {
        id:1,
        nombre:'Familia',
        descripcion:''
    },
    {
        id:2,
        nombre:'Amigos',
        descripcion:''
    },
    {
        id:3,
        nombre:'Negocios',
        descripcion:''
    },
    {
        id:4,
        nombre:'Trabajo',
        descripcion:''
    },
    {
        id:5,
        nombre:'Otros',
        descripcion:''
    }
];

export const SECTORES: Array<Sector>=[
    {
        id:1,
        nombre:'Técnico',
        descripcion:''
    },
    {
        id:2,
        nombre:'Creativo',
        descripcion:''
    },
    {
        id:3,
        nombre:'Comercial',
        descripcion:''
    },
    {
        id:4,
        nombre:'Otros',
        descripcion:''
    }
];
export const AFICIONES: Array<Aficion> = [
  {id: 1, nombre: 'Lectura',  descripción: ''},
  {id: 2, nombre: 'Musica',  descripción: ''},
  {id: 3, nombre: 'Deporte',  descripción: ''},
  {id: 4, nombre: 'Viajar',  descripción: ''},
];
