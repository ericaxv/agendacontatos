import { RecuperarSenhaResponse } from './../models/responses/recuperar-senha.response.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RecuperarSenhaRequest } from '../models/requests/recuperar-senha.request.models';
import { environment } from 'src/environments/environments';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RecuperarSenhaService{
    constructor(
        private HttpClient: HttpClient
    ){}

    post(recuperarSenhaRequest: RecuperarSenhaRequest) : Observable<RecuperarSenhaResponse>{
        return this.HttpClient.post<RecuperarSenhaResponse>
                (environment.apiContatos + "/recuperar-senha", recuperarSenhaRequest);
    }
}