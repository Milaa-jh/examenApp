import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio', 
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'login-estudiante',
    loadChildren: () => import('./pages/login-estudiante/login-estudiante.module').then( m => m.LoginEstudiantePageModule)
  },
  {
    path: 'bien-estudiante',
    loadChildren: () => import('./pages/bien-estudiante/bien-estudiante.module').then( m => m.BienEstudiantePageModule)
  },
  {
    path: 'escaner-qr-estu',
    loadChildren: () => import('./pages/escaner-qr-estu/escaner-qr-estu.module').then( m => m.EscanerQrEstuPageModule)
  },
  {
    path: 'login-profesor',
    loadChildren: () => import('./pages/login-profesor/login-profesor.module').then( m => m.LoginProfesorPageModule)
  },
  {
    path: 'bien-profesor',
    loadChildren: () => import('./pages/bien-profesor/bien-profesor.module').then( m => m.BienProfesorPageModule)
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./pages/generar-qr/generar-qr.module').then( m => m.GenerarQrPageModule)
  },
  {
    path: 'rec-estu',
    loadChildren: () => import('./pages/rec-estu/rec-estu.module').then( m => m.RecEstuPageModule)
  },
  {
    path: 'rec-prof',
    loadChildren: () => import('./pages/rec-prof/rec-prof.module').then( m => m.RecProfPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

