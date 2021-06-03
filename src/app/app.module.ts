import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LazyloadingModule} from './modules/lazyloading/lazyloading.module'
import {AppRoutingModule} from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LazyloadingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
