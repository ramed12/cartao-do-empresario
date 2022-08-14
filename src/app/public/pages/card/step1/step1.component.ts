import { Step2Component } from './../step2/step2.component';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  emailControl = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome_completo: [null, [Validators.required, Validators.minLength(3)]],
      cpf: [null, Validators.required],
      cnpj: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      cel: [null, Validators.required],
      senha: [null, Validators.required],
      senha_confirmar: [null, Validators.required],
    });
  }

  onSubmit() {
    // console.log(this.form.value);

    this.http
      .post('https://httpbin.org/post', JSON.stringify(this.form.value))
      .pipe(map(res => res))
      .subscribe({
        next: result => {
          console.log(result);

          // this.form.reset();
          this.router.navigate(['/step2']);
        },
        error: error => {
          console.log(error);

          alert('Error');
        },
      });
  }

  verifyValidTouched(field: string) {
    return !this.form.get(field)?.valid && this.form.get(field)?.touched;
  }

  applyCSSError(field: string) {
    return {
      'invalid-feedback': this.verifyValidTouched(field),
    };
  }
}
