import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SaludoComponent } from './saludo/saludo.component';
import { FormsModule } from '@angular/forms/';
import { LocalComponent } from './local/local.component';

@NgModule({
  declarations: [HomeComponent, SaludoComponent, LocalComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
