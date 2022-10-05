import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'contatos',
    pathMatch: 'full'
  },
  {
    path: 'contatos',
    loadChildren: () => import('./contatos/contatos/contatos.module').then( m => m.ContatosPageModule)
  },
  {
    path: 'detalhes-contatos/:id',
    loadChildren: () => import('./detalhes/detalhes-contatos/detalhes-contatos.module').then( m => m.DetalhesContatosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
