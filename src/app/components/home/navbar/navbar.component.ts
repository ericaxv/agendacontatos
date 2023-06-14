import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AutenticarReponse } from 'src/app/models/responses/autenticar.response.models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    auth: AutenticarReponse | null = null;

    //construtor - inicia classes por injeção de dependência
    constructor(
      private authenticationHelper: AuthenticationHelper,
      private spinnerService: NgxSpinnerService
    ){}

    //método executado sempre antes do componente for carregado
    ngOnInit(): void {
      this.auth = this.authenticationHelper.getData();
    }

    //realiza o logout do usuário
    logOut(): void {
      if(window.confirm('Deseja realmente sair do sistema?')){
        this.spinnerService.show();
        this.authenticationHelper.signOut();
        window.location.href = '/';
      }
    }
}
