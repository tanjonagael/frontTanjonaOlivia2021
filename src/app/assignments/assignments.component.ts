import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from '../shared/assignments.service';
import { AuthService } from '../shared/auth.service';
import { TabItem } from '../shared/tabItems';
import { Assignment } from '../shared/assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  
  tabs:TabItem[];
  userConnecte: String;
  activeLink  = "rendu";
  routeLinks: any[];
    activeLinkIndex = -1;
  // on injecte le service de gestion des assignments
  constructor(private assignmentsService:AssignmentsService,
              private route:ActivatedRoute,
              private router:Router, private auth : AuthService) {}

  ngOnInit() {
    
   // console.log(this.auth.isExpiredToken);
    /*if(this.auth.isExpiredToken || this.auth.loggedIn == null) {
      this.auth.logOut();
    }*/
      
   this.tabs = [
    {
      label: 'Rendu',
      icon: 'done_outline',
      route: 'rendu',
    },
    {
      label: 'Non rendu',
      icon: 'close',
      route: 'non_rendu',
    }
  ];
  this.routeLinks = [
    {
        label: 'Product 1',
        link: './rendu',
        index: 0
    }, {
        label: 'Product 2',
        link: './non_rendu',
        index: 1
    }
  ];
     // console.log("getAssignments() du service appelé");
      //this.userConnecte = this.auth.userConnecte;
      this.userConnecte = localStorage.getItem("fullname");
      this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
  
}

