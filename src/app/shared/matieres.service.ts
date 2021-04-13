import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from  '@auth0/angular-jwt';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MatiereService {
  
  constructor(private http : HttpClient, private router: Router) {}
  uriMatiere = "http://localhost:8010/api/matieres";

  //list roles
  listMatieres(): Observable<any> {
    return this.http.get(this.uriMatiere);
  }
}
