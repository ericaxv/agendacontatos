import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ContatosPostRequest } from '../models/requests/contatos-post.request.models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { ContatosGetResponse } from '../models/responses/contatos-get.response.model';
import { ContatosPutRequest } from '../models/requests/contatos-put.request.models';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
    providedIn: 'root'
})
export class ContatosService{
    constructor(
        private httpClient: HttpClient
    ){}

    post(contatosPostRequest: ContatosPostRequest): Observable<ContatosGetResponse>{
        return this.httpClient.post<ContatosGetResponse>
            (environment.apiContatos + "/contatos", contatosPostRequest);
    }

    getAll() : Observable<ContatosGetResponse[]>{
        return this.httpClient.get<ContatosGetResponse[]>(environment.apiContatos + "/contatos");
    }

    getById(idContato: string) : Observable<ContatosGetResponse>{
        return this.httpClient.get<ContatosGetResponse>(environment.apiContatos + "/contatos/" + idContato);
    }

    put(contatosPuRequest: ContatosPutRequest) : Observable<ContatosGetResponse>{
        return this.httpClient.put<ContatosGetResponse>(environment.apiContatos + "/contatos", contatosPuRequest);
    }

    delete(idContato: string) : Observable<ContatosGetResponse>{
       return this.httpClient.delete<ContatosGetResponse>(environment.apiContatos + "/contatos/" + idContato);
    }
}