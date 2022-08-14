import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './login-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecoverPasswordModule } from '../recover-password/recover-password.module';

@NgModule({
  declarations: [LoginModalComponent],
  exports: [LoginModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecoverPasswordModule,
  ],
})
export class LoginModalModule {}
