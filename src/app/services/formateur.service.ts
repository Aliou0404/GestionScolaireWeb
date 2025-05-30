import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Formateurs} from '../modeles';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  urlListeFormateur = "http://localhost:8082/formateur";

  constructor(
    private _http: HttpClient
  ) {}

  getAllFormateur(): Observable<Formateurs[]> {
    return this._http.get<Formateurs[]>(this.urlListeFormateur);
  }

  getFormateurById(id: string): Observable<Formateurs> {
    const url =  `http://localhost:8082/formateur/${id}`;
    // const url =  'http://localhost:8081/formateur/'+id;

    return this._http.get<Formateurs>(url);

  }

  deleteFormateurById(id: number): Observable<void> {
    const url =  `http://localhost:8082/formateur/${id}`;
    return this._http.delete<void>(url);
  }

}
