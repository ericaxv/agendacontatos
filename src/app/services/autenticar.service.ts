import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { AutenticarRequest } from '../models/requests/autenticar.request.models';
import { Observable } from 'rxjs';
import { AutenticarReponse } from '../models/responses/autenticar.response.models';
import { environment } from 'src/environments/environments';

@Injectable({
    providedIn: 'root'
})
export class AutenticarService{
    constructor(
        private httpClient: HttpClient
    ){ }

    post(autenticarRequest: AutenticarRequest): Observable<AutenticarReponse>{
        return this.httpClient.post<AutenticarReponse>
            (environment.apiContatos + "/autenticar", autenticarRequest);
    }
}