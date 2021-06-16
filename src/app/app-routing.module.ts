import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    pagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
