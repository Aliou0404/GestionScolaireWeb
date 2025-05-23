import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Enseignant} from '../modeles';

@Injectable({
  providedIn: 'root'
})
export class EnseignantsService {
  urlListeEnseignant = "http://localhost:8081/enseignant";

  constructor(
    private _http: HttpClient
  ) {}

  getAllEnseignant(): Observable<Enseignant[]> {
    return this._http.get<Enseignant[]>(this.urlListeEnseignant);
  }

  getEnseignantById(id: string): Observable<Enseignant> {
    const url =  `http://localhost:8081/enseignant${id}`;
    // const url =  'http://localhost:8081/enseignants/'+id;

    return this._http.get<Enseignant>(url);

  }

}
