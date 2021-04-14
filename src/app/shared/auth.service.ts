import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { JwtHelperService } from  '@auth0/angular-jwt';
var helper = new JwtHelperService();

import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  admin = false;
  
  constructor(private http : HttpClient, private router: Router) {}
  uriSignIn = "http://localhost:8010/api/user/signIn";
  uriSignUp = "http://localhost:8010/api/user/signUp";
  uriRoles = "http://localhost:8010/api/roles";
  // uriSignIn = "https://backtanjonaolivia2021.herokuapp.com/api/user/signIn";
  // uriSignUp = "https://backtanjonaolivia2021.herokuapp.com/api/user/signUp";
  // uriRoles = "https://backtanjonaolivia2021.herokuapp.com/api/roles";

  //appel api
  logIn(user: User): Observable<any> {
      return this.http.post(this.uriSignIn, user);
  }

  //decode token pour avoir les info réel
  setInfoUserByToken(){
    var token = localStorage.getItem('access_token');
    var decodedToken = helper.decodeToken(token);
    localStorage.setItem('id', decodedToken.id);
    localStorage.setItem('roles', decodedToken.roles);
    localStorage.setItem('fullname', decodedToken.fullname);
  }

  //test expiration token
  public get isExpiredToken(): boolean{
    var token = localStorage.getItem('access_token');
    var isExpired = helper.isTokenExpired(token);
    return isExpired;
  }

  //resultat appel api login si ok
  redirectHome(reponse){
      localStorage.setItem('access_token', reponse.token);
      this.setInfoUserByToken()
      this.router.navigate(["/home"]);
  }


  logOut() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('fullname');
    this.router.navigate(["/login"]);
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
  
  //test si connecté
  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }
  
  //signUp user
  signUp(user: User): Observable<any> {
      return this.http.post(this.uriSignUp, user);
  }
 
  passwordMatchValidator(passwordControl: string, repasswordControl: string) {
      return (formGroup: FormGroup) => {
        const control = formGroup.controls[passwordControl];
        const matchingControl = formGroup.controls[repasswordControl];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ notSame: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }
}
