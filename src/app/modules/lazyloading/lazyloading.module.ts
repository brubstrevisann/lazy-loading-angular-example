import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadingRoutingModule } from './lazyloading-routing.module';
import { SobreComponent } from './sobre/sobre.component';
import { HomeLazyComponent } from './home-lazy/home-lazy.component';


@NgModule({
  declarations: [SobreComponent, HomeLazyComponent],
  imports: [
    CommonModule,
    LazyloadingRoutingModule
  ]
})
export class LazyloadingModule { }
