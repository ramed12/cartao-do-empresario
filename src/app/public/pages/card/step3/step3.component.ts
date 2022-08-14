import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
})
export class Step3Component implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      data_nascimento: [null, Validators.required],
      estado_civil: [null, Validators.required],
      genero: [null, Validators.required],
      cep: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required],
      logradouro: [null, Validators.required],
      numero: [null, Validators.required],
      complemento: [null, Validators.required],
      file: [null, Validators.required],
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
