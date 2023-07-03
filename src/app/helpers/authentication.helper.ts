import { Injectable } from "@angular/core";
import { AutenticarReponse } from "../models/responses/autenticar.response.models";
import { decryptData, encryptData } from "../utils/crypto.util";
import { environment } from "src/environments/environments";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationHelper{
    //método para salvar os ddos de usuário autenticado no local storage
    signIn(data: AutenticarReponse): void{
        let auth = JSON.stringify(data);
        let content = encryptData(auth, environment.chave_criptografia);

        localStorage.setItem('auth', content);
    }

    //verificar se o usuário está autenticado.
    isSignedIn(): boolean {
        let auth = this.getData();
        if(auth != null){
            const dataAtual = new Date();
            const dataExpiracaoToken = new Date(auth.expiration as Date);
            return dataAtual <= dataExpiracaoToken;
        }
        return false;
    }

    //retorna os dados gravados na local storage
    getData(): AutenticarReponse | null {
        let data = localStorage.getItem('auth') as string;
        let content = decryptData(data, environment.chave_criptografia);

        if(content != null){
            return JSON.parse(content) as AutenticarReponse;
        }else{
            return null;
        }
    }

    //apagar conteúdo da localstorage
    signOut() : void {
        localStorage.removeItem('auth');
    }
}