import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SaludoComponent } from './home/saludo/saludo.component';
import { LocalComponent } from './home/local/local.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent, 
    SaludoComponent,
    LocalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
