import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListArrangerComponent } from './list-arranger/list-arranger.component';


const routes: Routes = [
  {
    path: 'ListArranger',
    component: ListArrangerComponent
  },
  { path: '',
    redirectTo: '/ListArranger',
    pathMatch: 'full'
  },
  { path: '**', component: ListArrangerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
