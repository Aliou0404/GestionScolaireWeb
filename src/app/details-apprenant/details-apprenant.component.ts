import {Component, OnInit} from '@angular/core';
import {Apprenant} from '../modeles';
import {ActivatedRoute} from '@angular/router';
import {NgIf} from '@angular/common';
import {ApprenantsService} from '../services/apprenants.service';
import {json} from 'node:stream/consumers';

@Component({
  selector: 'app-details-apprenant',
  imports: [
    NgIf
  ],
  templateUrl: './details-apprenant.component.html',
  styleUrl: './details-apprenant.component.scss'
})
export class DetailsApprenantComponent implements  OnInit {

  apprenant: Apprenant | undefined;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private apprenantsService:ApprenantsService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id : ",id);
    if (id){
      this.apprenantsService.getApprenantById(id).subscribe({
        next: (app: Apprenant) => {
          this.apprenant = app;
        },
        error: (error) => {
          if(error.status === 0){
            this.errorMessage = 'Probleme de connexion avec le serveur spring';
          } else {
            this.errorMessage = " error chargement apprenant code: "+error.status+" message:"+JSON.stringify(error.errors);
          }
        },
        complete: () => {

        }
      })

    }

  }

}
