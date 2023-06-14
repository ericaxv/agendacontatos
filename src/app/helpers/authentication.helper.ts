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

    //verificar se o usuário está autenticado.
    isSignedIn(): boolean {
        return localStorage.getItem('auth') != null;
    }

    //retorna os dados gravados na local storage
    getData(): AutenticarReponse | null {
        let data = localStorage.getItem('auth');
        if(data != null){
            return JSON.parse(data) as AutenticarReponse;
        }else{
            return null;
        }
    }

    //apagar conteúdo da localstorage
    signOut() : void {
        localStorage.removeItem('auth');
    }
}