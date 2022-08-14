import { RecoverPasswordModule } from './pages/recover-password/recover-password.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';

import { SharedModule } from '../shared/shared.module';

import { HomeModule } from './pages/home/home.module';
import { CardModule } from './pages/card/card.module';
import { DiscountsModule } from './pages/discounts/discounts.module';

import { AuthModule } from './pages/auth/auth.module';

import { PublicComponent } from './public.component';
import { AccordionModule } from './pages/accordion/accordion.module';
import { LoginModalModule } from './pages/login-modal/login-modal.module';
import { NewPasswordComponent } from './pages/new-password/new-password.component';

@NgModule({
  declarations: [PublicComponent, NewPasswordComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    HomeModule,
    AccordionModule,
    CardModule,
    DiscountsModule,
    AuthModule,
    LoginModalModule,
    RecoverPasswordModule,
  ],
})
export class PublicModule {}
