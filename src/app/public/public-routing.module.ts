import { PartnerComponent } from './pages/partner/partner.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@core-auth/auth.guard';

import { PublicComponent } from './public.component';

import { HomeBannerComponent } from './pages/home/home.component';
import { CardComponent } from './pages/card/card.component';
import { DiscountsComponent } from './pages/discounts/discounts.component';

import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        component: HomeBannerComponent,
      },
      {
        path: 'cartao',
        component: CardComponent,
      },
      {
        path: 'descontos',
        component: DiscountsComponent,
      },
      {
        path: 'entrar',
        component: LoginComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'cadastrar',
        component: RegisterComponent,
      },
      {
        path: 'seja-parceiro',
        component: PartnerComponent,
      },
      {
        path: 'modal',
        component: RecoverPasswordComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
