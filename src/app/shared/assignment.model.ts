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
  auteur:string;
  matiere: Matieres
}
