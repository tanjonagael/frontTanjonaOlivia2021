import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "Authentification"
  username = ""
  password = ""
  invalid_login = false
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.username == "error"){
      this.invalid_login = true
      this.router.navigate(["/login"]);
    }
    else this.router.navigate(["/home"]);
    console.log(this.username+" sy "+this.password)
  }

}
