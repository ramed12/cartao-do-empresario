import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LoginModalModule } from '../../../public/pages/login-modal/login-modal.module';
import { RecoverPasswordModule } from 'src/app/public/pages/recover-password/recover-password.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, LoginModalModule, RecoverPasswordModule],
})
export class HeaderModule {}
