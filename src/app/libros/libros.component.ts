import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-libros',
  template: `
    <div class="row">
      <kc-mook-books></kc-mook-books>
    </div>
  `,
  styles: []
})
export class LibrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
