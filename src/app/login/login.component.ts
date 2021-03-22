import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from '../users/user.model';
import { Roles } from './roles.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "Authentification";
  username = "";
  password = "";
  listRoles: Roles[];
  invalid_login = false;
  constructor(private router:Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.getlistRole();
  }

  getlistRole(){
    this.authService.listRoles().subscribe(reponse =>{
      console.log(reponse)
      this.listRoles = reponse
    });
  }
  login(){
    let user = new User();
    user.username = this.username;
    user.password = this.password;

    this.authService.logIn(user)
      .subscribe(reponse => {
        if(reponse != null) {
          this.authService.userConnecte = reponse.fullname;
          this.router.navigate(["/home"]);
        } 
        else {
          this.invalid_login = true;
          this.router.navigate(["/login"]);
        }
      });
    /*if(this.username == "error"){
      this.invalid_login = true
      this.router.navigate(["/login"]);
    }
    else
    console.log(this.username+" sy "+this.password)*/
  }

}
