import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'lista',
    loadComponent: () => import('./pages/lista/lista.component').then(m => m.ListaComponent)
  },
  {
    path: 'formulario',
    loadComponent: () => import('./pages/formulario/formulario.component').then(m => m.FormularioComponent)
  },
  {
    path: '404',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404'
  }
];
