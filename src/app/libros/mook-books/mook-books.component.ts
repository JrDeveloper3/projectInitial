import { Component, OnInit } from '@angular/core';
import { MbooksService } from '../../services/mbooks.service';


@Component({
  selector: 'kc-mook-books',
  templateUrl: './mook-books.component.html',
  styleUrls: ['./mook-books.component.css']
})
export class MookBooksComponent implements OnInit {
  clave: string;
  aLibros: Array<string>;
  constructor( public mbService: MbooksService) { }

  ngOnInit() {
    this.clave = '';
    this.aLibros = [];
  }

  btnBuscar(){
    this.aLibros = this.mbService.getLibros(this.clave);
  }

  btnBuscarRx(){
    this.mbService.getLibros$(this.clave)
      .subscribe((data: any) => {
        this.aLibros = data;
      });
  }

}
