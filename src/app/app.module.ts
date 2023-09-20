import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RingsComponent } from './rings/rings.component';
import { HomeComponent } from './home/home.component';
import { StarComponent } from './star/star.component';
import { RoseComponent } from './rose/rose.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RingsComponent,
    HomeComponent,
    StarComponent,
    RoseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
