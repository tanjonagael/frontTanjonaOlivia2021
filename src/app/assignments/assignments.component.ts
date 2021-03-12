import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  page: number=1;
 limit: number=10;
 totalDocs: number;
 totalPages: number;
 hasPrevPage: boolean;
 prevPage: number;
 hasNextPage: boolean;
 nextPage: number;

  assignments:Assignment[];

  // on injecte le service de gestion des assignments
  constructor(private assignmentsService:AssignmentsService) {}

  ngOnInit() {
    console.log('AVANT AFFICHAGE');

    // on utilise le service pour récupérer les
    // assignments à afficher
    this.assignmentsService.getAssignmentsPagine(this.page, this.limit)
     .subscribe(data => {
       this.assignments = data.docs;
       this.page = data.page;
       this.limit = data.limit;
       this.totalDocs = data.totalDocs;
       this.totalPages = data.totalPages;
       this.hasPrevPage = data.hasPrevPage;
       this.prevPage = data.prevPage;
       this.hasNextPage = data.hasNextPage;
       this.nextPage = data.nextPage;
       console.log("données reçues");
     });

   /* this.assignmentsService.getAssignments()
      .subscribe(assignments => {
        this.assignments = assignments;
        console.log("données reçues");
      });*/

      /*
      this.assignmentsService.getAssignmentsAsPromise().then(assignments => {
        this.assignments = assignments;
        console.log("données reçues avec Promise");

      });
    */
      console.log("getAssignments() du service appelé");
  }

  onDeleteAssignment(event) {
    // event = l'assignment à supprimer

    //this.assignments.splice(index, 1);
    this.assignmentsService.deleteAssignment(event)
      .subscribe(message => {
        console.log(message);
      })
  }
}
