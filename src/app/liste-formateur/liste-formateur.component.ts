import {Component, OnInit} from '@angular/core';
import { Formateurs} from '../modeles';
import {FORMATEURS} from '../mockup';
import {FormateurService} from '../services/formateur.service';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-liste-formateur',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './liste-formateur.component.html',
  styleUrl: './liste-formateur.component.scss'
})
export class ListeFormateurComponent implements OnInit {

  formateur: Formateurs[] = FORMATEURS;
  finChargement = false;
  errorMessage = "";
  selectedFormateur: number | undefined;
  overFormateur: number | undefined;

  constructor(private formateurService: FormateurService) {
  }

  ngOnInit(): void {
    this.loadFormateur();
  }

  loadFormateur(): void {
    this.finChargement = false;
    this.errorMessage = "";
    this.formateur = [];
    this.formateurService.getAllFormateur().subscribe({
      next: (formateurData: Formateurs[]) => {
        this.formateur = formateurData;
      },
      error: (error: any) => {
        console.log("erreur de recup liste formateur", error);
        this.finChargement = true;
        this.errorMessage = "erreur:" + error.status + " msg = " + error.error.message;
      },
      complete: () => {
        this.finChargement = true;
        this.errorMessage = "";
      }
    })
  }

  setSelectedFormateur(idFormateur: number | undefined): void {
    this.selectedFormateur = idFormateur;
  }

  setOverFormateur(idFormateur: number | undefined): void {
    this.overFormateur = idFormateur;
  }
}
