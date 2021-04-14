import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from '../shared/user.model';
import { Roles } from 'src/app/shared/roles.model';
import { FormGroup,AbstractControl, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  signUpForm: any;
  title = "Authentification";
  invalid_login = false;
  invalid_register = false;
  valid_register = false;
  listRoles: Roles[];
  username : AbstractControl;
  password : AbstractControl;
  usernameUp : AbstractControl;
  passwordUp : AbstractControl;
  fullname : AbstractControl;
  repassword : AbstractControl;
  role : AbstractControl;
  minLength = 6;
  maxLength = 20;
  valid_register_msg = '';
  invalid_register_msg = '';
  
  constructor(private router:Router, private authService: AuthService, private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      username :['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(this.minLength)]]
    });
    this.signUpForm = this.formBuilder.group({
      usernameUp :['', Validators.required],
      passwordUp: ['', [Validators.required, Validators.minLength(this.minLength)]],
      repassword: ['', [Validators.required]],
      fullname: ['', [Validators.required, Validators.maxLength(this.maxLength)]],
      role: ['', [Validators.required]]
    },
    {
      validator : this.authService.passwordMatchValidator('passwordUp','repassword')
    });
    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];
    this.usernameUp = this.signUpForm.controls['usernameUp'];
    this.passwordUp = this.signUpForm.controls['passwordUp'];
    this.fullname = this.signUpForm.controls['fullname'];
    this.role = this.signUpForm.controls['role'];
  }

  ngOnInit(): void {
    this.getListRole();
  }


  getListRole(){
    this.authService.listRoles().subscribe(reponse =>{
      this.listRoles = reponse
    });
  }
  
  authentification(){  
    let user = new User();
    user.username = this.loginForm.value.username;
    user.password = this.loginForm.value.password;
      this.authService.logIn(user)
        .subscribe(reponse => {
          if(reponse != null && reponse.auth == true){
            this.invalid_login = false;
            this.authService.redirectHome(reponse);
          } 
          else {
            this.invalid_login = true;
            this.router.navigate(["/login"]);
          }
        });
  }

  register(){ 
    let newUser = new User();
    newUser.username = this.usernameUp.value;
    newUser.password = this.passwordUp.value;
    newUser.fullname = this.fullname.value;
    newUser.roles = this.role.value;

    this.authService.signUp(newUser)
      .subscribe(reponse => {
        if(reponse.signUp) { 
          this.signUpForm.reset();
          this.valid_register = true;
          this.invalid_register = false;
          this.valid_register_msg = reponse.message;
          return
        }
        else {
          this.invalid_register = true;
          this.invalid_register_msg = reponse.message;
          return 
        }
      });
  }
}
