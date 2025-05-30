import { Component } from '@angular/core';
import {styleTitreComposant} from '../jsonStyle';
import {AjoutFiliereComponent} from '../ajout-filiere/ajout-filiere.component';
import {ListeFilieresComponent} from '../liste-filieres/liste-filieres.component';
import {NgIf} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-filieres',
  imports: [
    AjoutFiliereComponent,
    ListeFilieresComponent,
    NgIf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './filieres.component.html',
  styleUrl: './filieres.component.scss'
})
export class FilieresComponent {
  action = 'listeFilieres';

  filiereForm: FormGroup = new FormGroup({
    code: new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(6)]),
    nom: new FormControl('', [Validators.required,Validators.minLength(3)]),
    departement: new FormControl('', [Validators.required]),
    description: new FormControl(''),



  });



  ajoutFiliere() {
    this.action = 'ajoutFiliere';
  }

}
