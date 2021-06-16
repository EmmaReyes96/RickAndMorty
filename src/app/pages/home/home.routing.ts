import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from '../pages.component';
import { HomeComponent } from './home.component';
import { CharactersComponent } from './characters/characters.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { LocatiosComponent } from './locatios/locatios.component';

const routes: Routes = [
  { path: 'home', component: PagesComponent, 
  children: [
    {path: '', component: HomeComponent, data: { titulo: 'home'}},
    {path: 'characters', component: CharactersComponent, data: { titulo: 'characters'}},
    {path: 'episodes', component: EpisodesComponent, data: { titulo: 'episodes'}},
    {path: 'locations', component: LocatiosComponent, data: { titulo: 'locations'}},
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
