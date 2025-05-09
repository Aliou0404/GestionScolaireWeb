import { Component } from '@angular/core';
import {Apprenant, Enseignant} from '../modeles';

@Component({
  selector: 'app-detail-enseignant',
  imports: [],
  templateUrl: './detail-enseignant.component.html',
  styleUrl: './detail-enseignant.component.scss'
})
export class DetailEnseignantComponent {
  enseignant: Enseignant = {

    id:1,
    nom: "Ndiaye",
    prenom: "Cheikh",
    Images: "andiaye.png",
    matieres: "Java"

  }

}
