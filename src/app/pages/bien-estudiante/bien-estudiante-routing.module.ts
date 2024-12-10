import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienEstudiantePage } from './bien-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: BienEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienEstudiantePageRoutingModule {}
