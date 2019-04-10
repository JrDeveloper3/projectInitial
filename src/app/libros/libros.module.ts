import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { MookBooksComponent } from './mook-books/mook-books.component';
import { FormsModule } from '@angular/forms/';
import { MbooksService } from '../services/mbooks.service';

@NgModule({
  declarations: [LibrosComponent, MookBooksComponent],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    FormsModule
  ],
  providers:[MbooksService]
})
export class LibrosModule { }
