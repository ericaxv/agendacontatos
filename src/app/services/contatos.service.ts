import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ContatosPostRequest } from '../models/requests/contatos-post.request.models';
import { Observable } from 'rxjs';
import { ContatosPostResponse } from '../models/responses/contatos-post.response.models';
import { environment } from 'src/environments/environments';

@Injectable({
    providedIn: 'root'
})
export class ContatosService{
    constructor(
        private httpClient: HttpClient
    ){}

    post(contatosPostRequest: ContatosPostRequest): Observable<ContatosPostResponse>{
        return this.httpClient.post<ContatosPostResponse>
            (environment.apiContatos + "/contatos", contatosPostRequest);
    }
}