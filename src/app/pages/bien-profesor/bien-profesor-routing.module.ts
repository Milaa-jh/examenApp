import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienProfesorPage } from './bien-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: BienProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienProfesorPageRoutingModule {}
