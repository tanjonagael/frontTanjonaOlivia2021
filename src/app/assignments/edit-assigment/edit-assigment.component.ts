import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Matieres } from 'src/app/shared/matieres.model';
import { MatiereService } from 'src/app/shared/matieres.service';
import { Assignment } from '../../shared/assignment.model';
import { FormGroup,AbstractControl, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-assigment',
  templateUrl: './edit-assigment.component.html',
  styleUrls: ['./edit-assigment.component.css']
})
export class EditAssigmentComponent implements OnInit {
  assignment:Assignment;

  assignmentForm: FormGroup;
  nom : AbstractControl;
  auteur : AbstractControl;
  dateDeRendu : AbstractControl;
  note : AbstractControl;
  idMatiere : AbstractControl;
  remarque : AbstractControl;
  rendu = true;
  listMatiere: MatiereService[];
  nomVal:String;
  dateDeRenduVal:Date;
  idMatiereVal:number;

  constructor(private assignmentsService:AssignmentsService,private router:Router,private matiereService:MatiereService,private formBuilder: FormBuilder, private route:ActivatedRoute) {
   
    this.assignmentForm = this.formBuilder.group({
      nom :['',Validators.required],
      auteur :['',Validators.required],
      dateDeRendu: ['',[Validators.required]],
      note :['',[Validators.required,Validators.min(0),Validators.max(20)]],
      idMatiere: ['',[Validators.required]],
      remarque: ['']
    });

    this.nom = this.assignmentForm.controls['nom'];
    this.auteur = this.assignmentForm.controls['auteur'];
    this.dateDeRendu = this.assignmentForm.controls['dateDeRendu'];
    this.note = this.assignmentForm.controls['note'];
    this.idMatiere = this.assignmentForm.controls['idMatiere'];
    this.remarque = this.assignmentForm.controls['remarque'];
  }

  ngOnInit(): void {
    // ici on montre comment on peut récupérer les parametres http
    // par ex de :
    // http://localhost:4200/assignment/1/edit?nom=Michel%20Buffa&metier=Professeur&responsable=MIAGE#edition

   
    this.getListMatieres();
    this.getAssignmentById();
    
  }

  getAssignmentById() {
    // les params sont des string, on va forcer la conversion
    // en number en mettant un "+" devant
    const id: number = +this.route.snapshot.params.id;
    console.log('Dans ngOnInit de details, id = ' + id);
    this.assignmentsService.getAssignment(id).subscribe((assignment) => {
      this.assignment = assignment;
      this.assignmentForm.controls['nom'].setValue(assignment.nom);
      this.assignmentForm.controls['auteur'].setValue(assignment.auteur);
     
      this.assignmentForm.controls['idMatiere'].setValue(assignment.idMatiere);
      if(this.assignment.rendu){
        this.assignmentForm.controls['note'].setValue(assignment.note);
        this.assignmentForm.controls['remarque'].setValue(assignment.remarque);
      }
     /* this.dateDeRendu = new Date(assignment.dateDeRendu);
      this.idMatiere = assignment.idMatiere;*/
    });
  }


  onSubmit(assignmentEdit: Assignment) {
    assignmentEdit._id = this.assignment._id;
    assignmentEdit.id = this.assignment.id;
    assignmentEdit.rendu = true;

   
    this.assignmentsService.updateAssignment(assignmentEdit)
      .subscribe(updated => {
        if(updated) this.router.navigate(["/home/rendu"]);
        else return;
      })
  }

  getListMatieres(){
    this.matiereService.listMatieres().subscribe(reponse =>{
      this.listMatiere = reponse;
    });
  }
}
