import { Injectable } from "@angular/core";
import { AutenticarReponse } from "../models/responses/autenticar.response.models";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationHelper{
    //método para salvar os ddos de usuário autenticado no local storage
    signIn(data: AutenticarReponse): void{
        localStorage.setItem('auth', JSON.stringify(data));

    }
}