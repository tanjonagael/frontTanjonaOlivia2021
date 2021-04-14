import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  fullname : String;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.fullname = localStorage.getItem('fullname')
    
  }

  public listAssignment(){
    this.router.navigate(["home"]);
  }

  public addAssignment(){
    this.router.navigate(["add"]);
  }
  logout(){
    localStorage.removeItem('access_token');
    localStorage.clear();
    this.router.navigate(["/"]);
  }
}
