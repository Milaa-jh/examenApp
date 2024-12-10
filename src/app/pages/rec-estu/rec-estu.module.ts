import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecEstuPageRoutingModule } from './rec-estu-routing.module';

import { RecEstuPage } from './rec-estu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecEstuPageRoutingModule
  ],
  declarations: [RecEstuPage]
})
export class RecEstuPageModule {}
