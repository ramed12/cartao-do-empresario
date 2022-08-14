import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core-auth/auth.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss'],
})
export class RecoverPasswordComponent implements OnInit {
  recoverPasswordForms: FormGroup;
  @ViewChild('modalForgetPassword') modalForgetPassword: ElementRef;
  @ViewChild('cpfRecoverInput') cpfRecoverInput: ElementRef<HTMLInputElement>;
  @ViewChild('modalForgetPasswordResponse')
  modalForgetPasswordResponse: ElementRef;

  recoverPassword = {
    email: '',
    cpf: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  openRecoverModal() {
    this.modalForgetPassword.nativeElement.classList.add('show');
    this.modalForgetPassword.nativeElement.style.display = 'block';
  }

  closeRecoverModal() {
    this.modalForgetPassword.nativeElement.classList.remove('show');
    this.modalForgetPassword.nativeElement.style.display = 'none';
  }
  openRecoverResponseModal() {
    this.modalForgetPasswordResponse.nativeElement.classList.add('show');
    this.modalForgetPasswordResponse.nativeElement.style.display = 'block';
  }

  closeRecoverResponseModal() {
    this.modalForgetPasswordResponse.nativeElement.classList.remove('show');
    this.modalForgetPasswordResponse.nativeElement.style.display = 'none';
  }

  ngOnInit(): void {
    this.recoverPasswordForms = this.formBuilder.group({
      email: ['', Validators.required],
      cpf: ['', Validators.required],
    });
  }

  onSubmit() {
    const email = this.recoverPasswordForms.get('email')?.value;
    const cpf = this.recoverPasswordForms.get('cpf')?.value;

    this.authService.requestPasswordReset(email, cpf).subscribe({
      // next: v => console.log(v + '---recoveteste'),
      error: e => {
        this.recoverPasswordForms.reset();
        this.cpfRecoverInput.nativeElement.focus();

        console.log(e);
        alert('CPF ou email inválido(s).');
      },
      complete: () => {
        this.closeRecoverModal(), this.openRecoverResponseModal();
      },
    });
  }
}
