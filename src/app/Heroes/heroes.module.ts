import { NgModule } from '@angular/core';


import { ListComponent } from './list/list.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';

@NgModule({

  exports: [
    ListComponent,
    HeroeComponent
  ],
  declarations: [
    ListComponent,
    HeroeComponent

  ],
  imports:[
    CommonModule
  ]

})
export class HeroesModule { }
