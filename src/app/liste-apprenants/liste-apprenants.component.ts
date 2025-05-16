import {Component, OnInit} from '@angular/core';
import {Apprenant} from '../modeles';
import {APPRENANTS} from '../mockup';
import {JsonPipe, NgForOf} from '@angular/common';
import {ApprenantsService} from '../services/apprenants.service';

@Component({
  selector: 'app-liste-apprenants',
  imports: [
    NgForOf
  ],
  templateUrl: './liste-apprenants.component.html',
  styleUrl: './liste-apprenants.component.scss'
})
export class ListeApprenantsComponent  implements OnInit {
  apprenants: Apprenant[] = [];

  constructor(private apprenantsService:ApprenantsService) {
  }

  ngOnInit(): void{
    this.apprenantsService.getAllApprenant().subscribe({
      next: (apprenantsData: Apprenant[]) => {
        this.apprenants = apprenantsData;
      },
      error:(error:any) => {
        console.log("erreur de recup liste apprenants", error);
      }
    })

  }
}
