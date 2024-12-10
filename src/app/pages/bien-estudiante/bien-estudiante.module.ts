import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienEstudiantePageRoutingModule } from './bien-estudiante-routing.module';

import { BienEstudiantePage } from './bien-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienEstudiantePageRoutingModule
  ],
  declarations: [BienEstudiantePage]
})
export class BienEstudiantePageModule {}
