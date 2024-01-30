import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { HabilidadeCardsComponent } from './habilidade-cards/habilidade-cards.component';
import { MaterialModule } from '../shared/material/material.module';
import { MainSkillComponent } from './main-skill/main-skill.component';
import { ProjectComponent } from './projects/project.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    HeaderComponent,
    HabilidadeCardsComponent,
    MainSkillComponent,
    ProjectComponent,
    FooterComponent
    
    
  ],
  imports: [
    CommonModule,
    MaterialModule
    
  ],
  exports: [
    HeaderComponent,
   HabilidadeCardsComponent,
   MainSkillComponent,
   ProjectComponent,
   FooterComponent
  ]
})
export class ComponentsModule { }