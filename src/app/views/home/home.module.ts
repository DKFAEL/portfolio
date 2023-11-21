import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
;



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    ComponentsModule
    
  ]
})
export class HomeModule { }