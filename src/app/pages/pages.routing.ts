import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { PagesComponent } from './pages.component';
import { CharactersComponent } from './characters/characters.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { LocatiosComponent } from './home/locatios/locatios.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: '', component: PagesComponent, children: [
    {path: 'home', component: HomeComponent, data: { titulo: 'home'}},
    {path: 'characters', component: CharactersComponent, data: { titulo: 'characters'}},
    {path: 'episodes', component: EpisodesComponent, data: { titulo: 'episodes'}},
    {path: 'locations', component: LocatiosComponent, data: { titulo: 'locations'}},
  ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class pagesRoutingModule { }
