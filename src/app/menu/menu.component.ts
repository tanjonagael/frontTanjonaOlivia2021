import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfilDialogComponent } from '../profil-dialog/profil-dialog.component';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  fullname : String;
  isLoggin = false;
  constructor(private router: Router,private auth: AuthService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fullname = localStorage.getItem('fullname');
   
    /*if(localStorage.getItem('access_token') != null) this.isLoggin = true;
    else this.isLoggin = false;*/
    
  }

  public listAssignment(){
    this.router.navigate(["/home"])
    .then(() => {
      window.location.reload();
    });
  }

  public addAssignment(){
    this.router.navigate(["/add"]).then(() => {
      window.location.reload();
    });
  }
  logout(){
    this.auth.logOut();
  }

  openProfil() {
    this.dialog.open(ProfilDialogComponent, {
      data: {
        
      }
    });
  }
}
