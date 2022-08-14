import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPasswordComponent } from './new-password.component';

@NgModule({
  declarations: [NewPasswordComponent],
  exports: [NewPasswordComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class NewPasswordModule {}
