import {Matieres } from './matieres.model';

export class Assignment {
  _id?:string;
  id:number;
  nom:string;
  dateDeRendu:Date;
  rendu:boolean;
  idMatiere:number;
  note:number;
  remarque:string;
  matiere: Matieres
}
