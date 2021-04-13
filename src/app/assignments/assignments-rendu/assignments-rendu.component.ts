import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Assignment } from '../../shared/assignment.model';

@Component({
  selector: 'app-assignments-rendu',
  templateUrl: './assignments-rendu.component.html',
  styleUrls: ['./assignments-rendu.component.css']
})
export class AssignmentsRenduComponent implements OnInit {

  assignmentsRendu:Assignment[];

  page: number=1;
  limit: number = 20;
  totalDocs: number;
  totalPages: number;
  hasPrevPage: boolean;
  prevPage: number;
  hasNextPage: boolean;
  nextPage: number;
  count:number = 0;
  tableSizes = [20, 25, 30, 40];
  
  
  constructor(private assignmentsService:AssignmentsService,
    private route:ActivatedRoute,
    private router:Router, private auth : AuthService) {}

    ngOnInit() {
   
      // on regarde s'il y a page= et limit = dans l'URL
    this.route.queryParams.subscribe(queryParams => {
    // console.log("Dans le subscribe des queryParams")
        this.page = +queryParams.page || 1;
        this.limit = +queryParams.limit || 20;
    });
    this.getAssignmentsRendu();
    }

    getAssignmentsRendu() {
      this.assignmentsService.getAssignmentsRenduPagine(this.page, this.limit)
        .subscribe(data => {
        this.assignmentsRendu = data.docs;
        this.page = data.page;
        this.limit = data.limit;
        this.totalDocs = data.totalDocs;
        this.count = data.totalDocs;
        this.totalPages = data.totalPages;
        this.hasPrevPage = data.hasPrevPage;
        this.prevPage = data.prevPage;
        this.hasNextPage = data.hasNextPage;
        this.nextPage = data.nextPage;
      });
    }

    /*onTableDataChange(event){
      this.page = event;
      this.getAssignmentsRendu();
    } 
    /*onDeleteAssignment(event) {
    // event = l'assignment à supprimer

    //this.assignments.splice(index, 1);
    this.assignmentsService.deleteAssignment(event)
    .subscribe(message => {
    console.log(message);
    })
    }

  premierePage() {
    this.router.navigate(['/home'], {
      queryParams: {
        page:1,
        limit:this.limit,
      }
    });
  }

  pageSuivante() {
      /*
      this.page = this.nextPage;
      this.getAssignments();
    this.router.navigate(['/home'], {
      queryParams: {
        page:this.nextPage,
        limit:this.limit,
      }
    });
  }


  pagePrecedente() {
      this.router.navigate(['/home'], {
      queryParams: {
        page:this.prevPage,
        limit:this.limit,
      }
    });
  }

  dernierePage() {
    this.router.navigate(['/home'], {
    queryParams: {
    page:this.totalPages,
    limit:this.limit,
    }
    });
  }*/
   

  tabSize(event){
    
    this.page = event;
    console.log(this.page);
    this.getAssignmentsRendu();
  }  

  tableData(event): void {
    this.limit = event.target.value;
    this.page = 1;
    this.getAssignmentsRendu();
  }  

        
}
