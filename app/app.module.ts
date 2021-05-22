import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Html5Component } from './html5/html5.component';
import { SandyComponent } from './sandy/sandy.component';

@NgModule({
  declarations: [
    AppComponent,
    Html5Component,
    SandyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
