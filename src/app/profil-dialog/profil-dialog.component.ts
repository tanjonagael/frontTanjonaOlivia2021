import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../shared/auth.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-profil-dialog',
  templateUrl: './profil-dialog.component.html',
  styleUrls: ['./profil-dialog.component.css']
})
export class ProfilDialogComponent implements OnInit {

  fullname:String;
  user:User

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private auth: AuthService) { }
  
  ngOnInit(): void {
    this.fullname = localStorage.getItem("fullname");
    this.setUser();
  }

  setUser() {
    let username = localStorage.getItem("username");
    this.auth.getUser(username).subscribe((user) => {
      this.user = user;
    });
  }


}
