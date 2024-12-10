import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecEstuPage } from './rec-estu.page';

const routes: Routes = [
  {
    path: '',
    component: RecEstuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecEstuPageRoutingModule {}
