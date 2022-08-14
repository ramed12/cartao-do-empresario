import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecoverPasswordComponent } from './recover-password.component';

@NgModule({
  declarations: [RecoverPasswordComponent],
  exports: [RecoverPasswordComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class RecoverPasswordModule {}
