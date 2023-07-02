import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { RecuperarSenhaRequest } from 'src/app/models/requests/recuperar-senha.request.models';
import { RecuperarSenhaService } from 'src/app/services/recuparar-senha.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})


export class PasswordComponent {

  mensagemSucesso: string = '';
  mensagemErro: string = '';
  
  constructor(
    private recuperarSenhaService: RecuperarSenhaService,
    private spinnerService: NgxSpinnerService
  ){}

  formRecuperarSenha = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })

  get form(): any {
    return this.formRecuperarSenha.controls;
  }

  onSubmit(): void {
    this.spinnerService.show();
    let recuperarSenhaRequest: RecuperarSenhaRequest = {
      email: this.formRecuperarSenha.value.email as string
    };

    this.recuperarSenhaService.post(recuperarSenhaRequest)
                              .subscribe({
                                next: (data) => {
                                  this.mensagemSucesso = `Recuperação de senha realizada com 
                                                          sucesso para o usuário: ${data.nome}`;
                                  this.formRecuperarSenha.reset();
                                },
                                error: (e) => {
                                  this.mensagemErro = e.error.message;
                                }
                              }).add(() => {
                                this.spinnerService.hide();
                              })
  }

}
