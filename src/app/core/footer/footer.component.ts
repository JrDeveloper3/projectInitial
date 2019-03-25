import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public formador : string;
  public empresa : string;
  public fecha : string;

  constructor() { }

  ngOnInit() {
    this.formador = 'Jorge Ruiz';
    this.empresa='KeepCoding';
    this.fecha = '2019';
  }

}
