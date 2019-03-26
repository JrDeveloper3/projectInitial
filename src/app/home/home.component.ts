import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-home',
  template: `
    <div class="row">
      <kc-saludo class="col"></kc-saludo>
      <kc-local class="col "></kc-local>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
