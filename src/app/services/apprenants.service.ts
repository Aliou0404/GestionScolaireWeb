import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Apprenant, Enseignant} from '../modeles';

@Injectable({
  providedIn: 'root'
})
export class ApprenantsService {
  urlListeApprenants = "http://localhost:8081/apprenants";

  constructor(
    private _http: HttpClient
  ) {}

  getAllApprenant(): Observable<Apprenant[]> {
    return this._http.get<Apprenant[]>(this.urlListeApprenants);
  }

  getApprenantById(id: string): Observable<Apprenant> {
    const url =  `http://localhost:8081/apprenants/${id}`;
   // const url =  'http://localhost:8081/apprenants/'+id;

    return this._http.get<Apprenant>(url);

  }
}
