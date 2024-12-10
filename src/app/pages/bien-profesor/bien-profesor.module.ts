import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienProfesorPageRoutingModule } from './bien-profesor-routing.module';

import { BienProfesorPage } from './bien-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienProfesorPageRoutingModule
  ],
  declarations: [BienProfesorPage]
})
export class BienProfesorPageModule {}
