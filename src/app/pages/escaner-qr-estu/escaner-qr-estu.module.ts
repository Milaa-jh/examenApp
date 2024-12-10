import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscanerQrEstuPageRoutingModule } from './escaner-qr-estu-routing.module';

import { EscanerQrEstuPage } from './escaner-qr-estu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscanerQrEstuPageRoutingModule
  ],
  declarations: [EscanerQrEstuPage]
})
export class EscanerQrEstuPageModule {}
