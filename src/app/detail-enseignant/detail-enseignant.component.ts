import {Component, OnInit} from '@angular/core';
import {Enseignant} from '../modeles';
import {NgIf} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {EnseignantsService} from '../services/enseignants.service';

@Component({
  selector: 'app-detail-enseignant',
  imports: [
    NgIf
  ],
  templateUrl: './detail-enseignant.component.html',
  styleUrl: './detail-enseignant.component.scss'
})
export class DetailEnseignantComponent implements  OnInit{
  enseignant: Enseignant | undefined;

  errorMessage = '';

  constructor(private route: ActivatedRoute, private enseignantService:EnseignantsService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id : ",id);
    if (id){
      this.enseignantService.getEnseignantById(id).subscribe({
        next: (ens: Enseignant) => {
          this.enseignant = ens;
        },
        error: (error: { status: string | number; errors: any; }) => {
          if(error.status === 0){
            this.errorMessage = 'Probleme de connexion avec le serveur spring';
          } else {
            this.errorMessage = " error chargement enseignant code: "+error.status+" message:"+JSON.stringify(error.errors);
          }
        },
        complete: () => {

        }
      })

    }

  }

}
