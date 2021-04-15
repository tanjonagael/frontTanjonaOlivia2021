import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  message: string = "Are you sure?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  idAssignement:number;
  detail = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DeleteDialogComponent>, private assignmentsService:AssignmentsService,private router: Router) {
      if(data){
        this.message = data.message || this.message;
        this.detail = data.detail || this.detail;
        this.idAssignement = data.id;
        if (data.buttonText) {
          this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
          this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
        }
      }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onConfirmClick(): void {
    this.assignmentsService.getAssignment(this.idAssignement).subscribe((assignment) => {
      this.assignmentsService
      .deleteAssignment(assignment)
      .subscribe((deleted) => {
        // et on navigue vers la page d'accueil qui affiche la liste
        if(deleted){
          if(this.detail) this.router.navigate(["/home/rendu"]);
          else  window.location.reload();
          this.dialogRef.close();
        }
      });
    });
  }
}
