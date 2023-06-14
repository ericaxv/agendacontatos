import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class Adminguard implements CanActivate{
    constructor(
        private authenticationHelper: AuthenticationHelper,
        private router: Router
    ){}

    //método para verificar se a rota pode ser acessada.
    canActivate() {
        if(this.authenticationHelper.isSignedIn()){
            return true;
        }else{
            this.router.navigate(['/acessar-conta']);
            return false;
        }
    }
}