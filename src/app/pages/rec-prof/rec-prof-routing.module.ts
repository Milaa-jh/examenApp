import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecProfPage } from './rec-prof.page';

const routes: Routes = [
  {
    path: '',
    component: RecProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecProfPageRoutingModule {}
