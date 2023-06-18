import { AutenticarService } from '../../../services/autenticar.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import { AutenticarRequest } from 'src/app/models/requests/autenticar.request.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    mensagemErro: string = '';

    // construtor
    constructor(
      private autenticarService: AutenticarService,
      private spinnerService: NgxSpinnerService,
      private authenticationHelper: AuthenticationHelper
    ){}

    formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    //acessar os estados dos campos formulários
    get form(): any{
      return this.formLogin.controls;
    }

    //capturar o Submit do formulário
    onSubmit(): void{
      this.spinnerService.show();

      let autenticarContaRequest: AutenticarRequest = {
        email: this.formLogin.value.email as string,
        senha: this.formLogin.value.senha as string
      }
      this.autenticarService.post(autenticarContaRequest)
        .subscribe({
          next: (response) => {
            //salvar os dados do usuário autenticado na local storage
            this.authenticationHelper.signIn(response);
            //redirecionar para pagina do dashboard
            window.location.href = '/dashboard';
          },
          error: (e) => {
            switch(e.status){
              case 401: 
                this.mensagemErro = e.error.message;
                break;
              default:
                this.mensagemErro = "Falha ao realizar a autenticação!";
                
            }
          }
        }).add(() => {
          this.spinnerService.hide();
        });
    }
}
