import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
import { Step1Component } from '../step1/step1.component';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
  public form: FormGroup;

  routes: Routes = [
    { path: '', redirectTo: 'step1', pathMatch: 'full' },
    { path: 'step1', component: Step1Component },
    { path: 'step2', component: Step2Component },
    // outras rotas
  ];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      razao_social: [null, Validators.required],
      nome_fantasia: [null, Validators.required],
      cep: [null, Validators.required],
      logradouro: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required],
      numero: [null, Validators.required],
      complemento: [null, Validators.required],
      codigo: [null, Validators.required],
    });
  }

  onSubmit() {}

  // verifyValidTouched(field: string) {
  //   return !this.form.get(field)?.valid && this.form.get(field)?.touched;
  // }

  // applyCSSError(field: string) {
  //   return {
  //     'invalid-feedback': this.verifyValidTouched(field),
  //     'invalid-feedback': this.verifyValidTouched(field),
  //   };
  // }
}
