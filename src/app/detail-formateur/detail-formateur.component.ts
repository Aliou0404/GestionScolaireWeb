import {Component, OnInit} from '@angular/core';
import {Formateurs} from '../modeles';
import {Modal} from 'bootstrap';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {FormateurService} from '../services/formateur.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-detail-formateur',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './detail-formateur.component.html',
  styleUrl: './detail-formateur.component.scss'
})
export class DetailFormateurComponent implements  OnInit {

  formateur: Formateurs | undefined;
  errorMessage = '';
  suppModal:Modal | null =  null;

  constructor(private route: ActivatedRoute,
              private formateurService:FormateurService,
              private router:Router,  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id : ",id);
    if (id){
      this.formateurService.getFormateurById(id).subscribe({
        next: (form: Formateurs) => {
          this.formateur = form;
        },
        error: (error) => {
          if(error.status === 0){
            this.errorMessage = 'Probleme de connexion avec le serveur spring';
          } else {
            this.errorMessage = " error chargement formateur code: "+error.status+" message:"+JSON.stringify(error.errors);
          }
        },
        complete: () => {
        }
      })
    }
  }

  deleteFormateur(id:number | undefined){
    if (id){
      this.formateurService.deleteFormateurById(id).subscribe({
        error: (error) => {
          if(error.status === 0){
            this.errorMessage = 'Probleme de connexion avec le serveur spring';
          }else {
            this.errorMessage = `Erreur de suppression du formateur dont l'id est ${id}, code : ${error.status}; message:${error.errors}`;
          }
        },
        complete: () => {
          this.suppModal?.hide();
          this.router.navigate(['/liste-formateur']);

        }
      })

    }else {
      alert("Pas d'id donné en paramétre")
    }
  }


}
