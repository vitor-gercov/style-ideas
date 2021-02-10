import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransitionsComponent } from './views/transitions/transitions.component';

const routes: Routes = [

  {
    path: 'transitions',
    component: TransitionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
