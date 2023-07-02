import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationHelper } from "../helpers/authentication.helper";
import { environment } from "src/environments/environments";

//mapear endpoints que precisam de autorização

const endpoints = [
    environment.apiContatos + "/contatos",
    environment.apiContatos + "/Dashboard"
]

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor{
    constructor(
        private authenticationHelper: AuthenticationHelper
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(endpoints.some(item => req.url.includes(item))){
            var accessToken = this.authenticationHelper.getData()?.accessToken;
            //adicionando o token na chamada da requisição
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
        }

        //continua com a requisição a ser executada
        return next.handle(req);
    }
}