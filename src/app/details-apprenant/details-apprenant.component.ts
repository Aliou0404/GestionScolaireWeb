import { Component } from '@angular/core';
import {Apprenant} from '../modeles';

@Component({
  selector: 'app-details-apprenant',
  imports: [],
  templateUrl: './details-apprenant.component.html',
  styleUrl: './details-apprenant.component.scss'
})
export class DetailsApprenantComponent {
  apprenant: Apprenant = {

    id:1,
    nom: "Diop",
    prenom: "Aliou",
    image: "adiop.jpg",
    promo: 6

  }

}
