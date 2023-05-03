import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formRegister = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-ZÀ-Üà-ü\s]{8,100}$/)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    senha: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*_+\-=])[a-zA-Z\d!@#$%&*_+\-=]{8,}$/)
    ]),
    senhaConfirmacao: new FormControl('', [
      Validators.required
    ])

  });

  // exibindo erros de validaçao no formulário

  get form(): any{
    return this.formRegister.controls;
  }

  // capturando dados do formulário

  onSubmit() : void {
    console.log(this.formRegister.value);
 }

}
