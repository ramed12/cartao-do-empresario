import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path: 'usuario',
    title:
      'Meu Cartão | Cartão do Empresário | Milhares de benefícios para você',
    loadChildren: () =>
      import('./private/private.module').then(m => m.PrivateModule),
    // canActivate: [AuthGuard],
  },
  {
    path: '',
    title: 'Cartão do Empresário | Milhares de benefícios para você',
    loadChildren: () =>
      import('./public/public.module').then(m => m.PublicModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
