import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListArrangerComponent } from './list-arranger/list-arranger.component';


const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    component: ListArrangerComponent
  },
  { path: '**', component: ListArrangerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
