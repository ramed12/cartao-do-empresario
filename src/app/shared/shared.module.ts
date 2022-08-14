import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginModalModule } from '../public/pages/login-modal/login-modal.module';
import { RecoverPasswordModule } from '../public/pages/recover-password/recover-password.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    NgbModule,
    NgbCollapseModule,
    LoginModalModule,
    RecoverPasswordModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
