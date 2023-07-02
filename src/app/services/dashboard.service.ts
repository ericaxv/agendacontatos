import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { DashboardResponse } from '../models/responses/dashboard.response.models';
import { environment } from 'src/environments/environments';

@Injectable({
    providedIn: 'root'
})
export class DashboardService{
    constructor(
        private httpClient: HttpClient
    ){}

    get(): Observable<DashboardResponse[]>{
        return this.httpClient.get<DashboardResponse[]>(environment.apiContatos + '/Dashboard');
    }
}