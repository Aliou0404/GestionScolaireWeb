import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Enseignant} from '../modeles';
import {ENSEIGNANTS} from '../mockup';
import {RouterLink} from '@angular/router';
import {EnseignantsService} from '../services/enseignants.service';

@Component({
  selector: 'app-liste-enseignants',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './liste-enseignants.component.html',
  styleUrl: './liste-enseignants.component.scss'
})
export class ListeEnseignantsComponent implements OnInit{

  enseignants: Enseignant[] = ENSEIGNANTS;
  finChargement = false;
  errorMessage = "";
  selectedEnseignant:number | undefined;
  overEnseignant: number | undefined;

  constructor(private enseignantService:EnseignantsService) {
  }

  ngOnInit(): void{
    this.loadEnseignants();
  }

  loadEnseignants(): void {
    this.finChargement = false;
    this.errorMessage = "";
    this.enseignants = [];
    this.enseignantService.getAllEnseignant().subscribe({
      next: (enseignantData: Enseignant[]) => {
        this.enseignants = enseignantData;
      },
      error:(error:any) => {
        console.log("erreur de recup liste enseignants", error);
        this.finChargement = true;
        this.errorMessage = "erreur:" +error.status+" msg = "+error.error.message;
      },
      complete: () => {
        this.finChargement = true;
        this.errorMessage = "";
      }
    })
  }
  setSelectedEnseignant(idEnseignant: number| undefined): void {
    this.selectedEnseignant = idEnseignant;
  }

  setOverEnseignant(idEnseignant: number| undefined): void {
    this.overEnseignant = idEnseignant;
  }
}
