import { CriarContaRequest } from './../../../models/requests/criar-conta.request.models';
import { CriarContaService } from './../../../services/criar-conta.services';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPasswordValidator } from 'src/app/Validators/matchpassword.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    //atributo para injeçao de dependencia
    private criarContaService: CriarContaService
  ){

  }

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

  }, {
    validators: [
       MatchPasswordValidator.matchPassword
    ]});

  // exibindo erros de validaçao no formulário

  get form(): any{
    return this.formRegister.controls;
  }

  // capturando dados do formulário

  onSubmit() : void {
    //objeto com os dados que serã enviados ao serviço de criaçao de conta.

    let criarcontarequest: CriarContaRequest = {
      nome: this.formRegister.value.nome as string,
      email: this.formRegister.value.email as string,
      senha: this.formRegister.value.senha as string
    };
    //executando chamado para o serviço

    this.criarContaService.post(criarcontarequest)
      .subscribe({
        next: (response) => {
            console.log(response);
        },
        error: (e) => {
          console.log(e);
        }
      });
 }
}
