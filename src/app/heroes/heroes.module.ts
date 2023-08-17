


import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({

  /* Los componentes que pertenecen a este módulo */
  declarations: [
    
    HeroComponent,
    ListComponent
  ],

  /* los exports son los componentes que quiero hacer públicas o visibles fuera de este modulo */
  exports: [
    HeroComponent,
    ListComponent
  ],

  /* los imports son, usualmente, los módulos que quiero que se ejecuten en mi módulo personalizado
    principalmente para poder usar los ngIfs, ngTemplates, Pipes propia,etc.

    necesito importar el módulo de CommonModule del '@angular/common';
  */
  imports:[
    CommonModule,
  ]

})
export class HeroesModule { }


