import { CriarContaResponse } from './../models/responses/criar-conta.response.models';
import { CriarContaRequest } from './../models/requests/criar-conta.request.models';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
    providedIn: 'root'
})
export class CriarContaService{
    //criando construtor para injeção de dependencia.
    constructor( private httpClient: HttpClient )
    { }

    //fazendo requisição POST no serviço
    post(criarContaRequest: CriarContaRequest) : Observable<CriarContaResponse>
    {
        return this.httpClient.post<CriarContaResponse>(
            environment.apiContatos + '/criar-conta', 
            criarContaRequest);
    }
}