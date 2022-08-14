import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from '@core-auth';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
  loginForms: FormGroup;
  @ViewChild('myModal') myModal: ElementRef;
  @ViewChild('cpfInput') cpfInput: ElementRef<HTMLInputElement>;

  login = {
    cpf: '',
    senha: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  openModal() {
    this.myModal.nativeElement.classList.add('show');
    this.myModal.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.myModal.nativeElement.classList.remove('show');
    this.myModal.nativeElement.style.display = 'none';
  }

  ngOnInit(): void {
    this.loginForms = this.formBuilder.group({
      cpf: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  onSubmit() {
    const cpf = this.loginForms.get('cpf')?.value;
    const senha = this.loginForms.get('senha')?.value;

    this.authService.login(cpf, senha).subscribe({
      // next: v => console.log(v + '---testeslogin'),
      error: e => {
        this.loginForms.reset();
        this.cpfInput.nativeElement.focus();

        console.log(e);
        alert('CPF ou senha inválido(s).');
      },
      complete: () => this.router.navigateByUrl('usuario'),
    });
  }
}
