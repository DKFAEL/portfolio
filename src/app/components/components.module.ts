import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { HabilidadeCardsComponent } from './habilidade-cards/habilidade-cards.component';
import { MaterialModule } from '../shared/material/material.module';




@NgModule({
  declarations: [
    HeaderComponent,
    ProjetosComponent,
    HabilidadeCardsComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule
    
  ],
  exports: [
    HeaderComponent,
   HabilidadeCardsComponent
  ]
})
export class ComponentsModule { }