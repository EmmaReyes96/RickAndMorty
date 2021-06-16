import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';
import { EpisodesComponent } from './episodes/episodes.component';
import { CharactersComponent } from './characters/characters.component';
import { LocatiosComponent } from './locatios/locatios.component';



@NgModule({
  declarations: [
    EpisodesComponent,
    CharactersComponent,
    LocatiosComponent
  ],
  exports: [
    EpisodesComponent,
    CharactersComponent,
    LocatiosComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})

export class HomeModule { }
