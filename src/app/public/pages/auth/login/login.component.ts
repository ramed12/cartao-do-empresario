import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '@core-auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
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

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      cpf: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  onSubmit() {
    const cpf = this.loginForm.get('cpf')?.value;
    const senha = this.loginForm.get('senha')?.value;

    this.authService.login(cpf, senha).subscribe({
      // next: v => console.log(v),
      error: e => {
        this.loginForm.reset();
        this.cpfInput.nativeElement.focus();

        console.log(e);
        alert('CPF ou senha inválido(s).');
      },
      complete: () => this.router.navigateByUrl('usuario'),
    });
  }
}
