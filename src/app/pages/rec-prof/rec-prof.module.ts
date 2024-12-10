import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecProfPageRoutingModule } from './rec-prof-routing.module';

import { RecProfPage } from './rec-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecProfPageRoutingModule
  ],
  declarations: [RecProfPage]
})
export class RecProfPageModule {}
