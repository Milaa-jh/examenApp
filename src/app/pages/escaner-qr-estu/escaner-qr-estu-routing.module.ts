import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscanerQrEstuPage } from './escaner-qr-estu.page';

const routes: Routes = [
  {
    path: '',
    component: EscanerQrEstuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscanerQrEstuPageRoutingModule {}
