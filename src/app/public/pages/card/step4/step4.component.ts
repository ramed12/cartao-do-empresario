import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss'],
})
export class Step4Component implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      bemestar_saude_beleza: [null, Validators.required],
      educacao: [null, Validators.required],
      gastronomia: [null, Validators.required],
      infantil: [null, Validators.required],
      lazer_cultura: [null, Validators.required],
      produtos_servicos: [null, Validators.required],
      viagens_turismo: [null, Validators.required],
      presentes: [null, Validators.required],
      termos: [null, Validators.required],
      privacidade: [null, Validators.required],
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
