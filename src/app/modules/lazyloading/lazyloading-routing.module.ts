import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLazyComponent } from './home-lazy/home-lazy.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLazyComponent,
    children: [
      {
        path: 'sobre', component: SobreComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
