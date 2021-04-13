import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from 'src/app/shared/assignment.model';
import { Matieres } from 'src/app/shared/matieres.model';
import { FormGroup,AbstractControl, Validators,FormBuilder } from '@angular/forms';
import {MatiereService} from 'src/app/shared/matieres.service'

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css'],
})
export class AddAssignmentComponent implements OnInit {
  // Pour les champs du formulaire
  assignmentForm: FormGroup;
  nom : AbstractControl;
  dateDeRendu : AbstractControl;
  note : AbstractControl;
  idMatiere : AbstractControl;
  remarque : AbstractControl;
  rendu = true;
  listMatiere: MatiereService[];

  constructor(private assignmentsService:AssignmentsService,private router:Router,private matiereService:MatiereService,private formBuilder: FormBuilder) {
    this.assignmentForm = this.formBuilder.group({
      nom :['', Validators.required],
      dateDeRendu: ['', [Validators.required]],
      note :[''],
      idMatiere: ['', [Validators.required]],
      remarque: ['']
    });
    this.nom = this.assignmentForm.controls['nom'];
    this.dateDeRendu = this.assignmentForm.controls['dateDeRendu'];
    this.note = this.assignmentForm.controls['note'];
    this.idMatiere = this.assignmentForm.controls['idMatiere'];
    this.remarque = this.assignmentForm.controls['remarque'];
  }

  ngOnInit(): void {
    this.getListMatieres()
  }

  onSubmit(event) {
    if((!this.nom) || (!this.dateDeRendu) || (!this.idMatiere)) return;

    let nouvelAssignment = new Assignment();
    nouvelAssignment.nom = this.assignmentForm.value.nom;
    nouvelAssignment.dateDeRendu = this.assignmentForm.value.dateDeRendu;
    nouvelAssignment.idMatiere = this.assignmentForm.value.idMatiere;
    
    if( this.note.value === ""){
      nouvelAssignment.note = null;
      nouvelAssignment.rendu = false;
      nouvelAssignment.remarque = ' ';
    }
    else{
      nouvelAssignment.note = this.assignmentForm.value.note;
      nouvelAssignment.rendu = true;
      nouvelAssignment.remarque = this.assignmentForm.value.remarque;
    }
    this.assignmentsService.addAssignment(nouvelAssignment)
      .subscribe(reponse => {
        console.log(reponse.message);

         // et on navigue vers la page d'accueil qui affiche la liste
         this.router.navigate(["/home"]);
      });
  }
  
  getListMatieres(){
    this.matiereService.listMatieres().subscribe(reponse =>{
      this.listMatiere = reponse
      console.log(this.listMatiere)
    });
  }
  
}
