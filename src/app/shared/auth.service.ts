import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../users/user.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;
  admin = false;
  userConnecte: String;

  constructor(private http : HttpClient) {}
  uri = "http://localhost:8010/api/user";
  uriRoles = "http://localhost:8010/api/roles";

  logIn(user: User): Observable<any> {
    // typiquement, acceptera en paramètres un login et un password
    // vérifier qu'ils sont ok, et si oui, positionner la propriété loggedIn à true
    // si login/password non valides, positionner à false;

  //  if (login === 'admin') this.admin = true;

    //this.loggedIn = true;
      //this.loggingService.log(assignment.nom, " a été ajouté");
  
      /*this.assignments.push(assignment);
  
  
      return of("Service: assignment ajouté !");*/
      
      return this.http.post(this.uri, user);
  }

  logOut() {
    this.loggedIn = false;
    this.admin = false;
  }

  // exemple d'utilisation :
  // isAdmin.then(admin => { console.log("administrateur : " + admin);})
  isAdmin() {
    return new Promise((resolve, reject) => {
      resolve(this.admin);
    });
  }

  //list roles
  listRoles(): Observable<any> {
      return this.http.get(this.uriRoles);
  }
}
