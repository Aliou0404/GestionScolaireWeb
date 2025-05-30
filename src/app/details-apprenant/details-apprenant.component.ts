import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {Apprenant} from '../modeles';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';
import {ApprenantsService} from '../services/apprenants.service';
import {Modal} from 'bootstrap';
import {json} from 'node:stream/consumers';

@Component({
  selector: 'app-details-apprenant',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './details-apprenant.component.html',
  styleUrl: './details-apprenant.component.scss'
})
export class DetailsApprenantComponent implements  OnInit {

  apprenant: Apprenant | undefined;
  errorMessage = '';
  suppModal:Modal | null =  null;

  constructor(private route: ActivatedRoute,
              private apprenantsService:ApprenantsService,
              private router:Router,  ) {
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

  deleteApprenant(id:number | undefined){
    if (id){
      this.apprenantsService.deleteApprenantById(id).subscribe({
        error: (error) => {
          if(error.status === 0){
            this.errorMessage = 'Probleme de connexion avec le serveur spring';
          }else {
            this.errorMessage = `Erreur de suppression de l'apprenant dont l'id est ${id}, code : ${error.status}; message:${error.errors}`;
          }
        },
        complete: () => {
          this.suppModal?.hide();
          this.router.navigate(['/liste-apprenants']);

        }
      })

    }else {
      alert("Pas d'id donné en paramétre")
    }
   }
}
