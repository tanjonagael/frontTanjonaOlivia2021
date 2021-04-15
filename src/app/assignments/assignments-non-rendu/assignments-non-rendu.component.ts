import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteDialogComponent } from 'src/app/delete-dialog/delete-dialog.component';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Assignment } from '../../shared/assignment.model';

@Component({
  selector: 'app-assignments-non-rendu',
  templateUrl: './assignments-non-rendu.component.html',
  styleUrls: ['./assignments-non-rendu.component.css']
})
export class AssignmentsNonRenduComponent implements OnInit {

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
  admin=1;
  role_user:number;
  constructor(private assignmentsService:AssignmentsService,
    private route:ActivatedRoute,
    private router:Router, private auth : AuthService,private dialog: MatDialog) {}

    ngOnInit() {
   
      // on regarde s'il y a page= et limit = dans l'URL
    this.route.queryParams.subscribe(queryParams => {
    // console.log("Dans le subscribe des queryParams")
        this.page = +queryParams.page || 1;
        this.limit = +queryParams.limit || 20;
    });
    this.getAssignmentsNonRenduPagine();
    this.role_user = parseInt(localStorage.getItem("roles"));
    }

    getAssignmentsNonRenduPagine() {
      this.assignmentsService.getAssignmentsNonRenduPagine(this.page, this.limit)
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

  tabSize(event){
    
    this.page = event;
    console.log(this.page);
    this.getAssignmentsNonRenduPagine();
  }  

  tableData(event): void {
    this.limit = event.target.value;
    this.page = 1;
    this.getAssignmentsNonRenduPagine();
  }
  
  onClickEdit(id) {
    console.log("edit");
    this.router.navigate(['/assignment', id, 'edit'], {
      queryParams: {
      },
      fragment:"edition"
    });
  }

  openDialogDelete(id) {
    const dialogRef = this.dialog.open(DeleteDialogComponent,{
      data:{
        id : id,
        message: 'Voulez vous vraiment supprimer?',
        buttonText: {
          ok: 'Oui',
          cancel: 'Non'
        }
      }
    });
  }
}
