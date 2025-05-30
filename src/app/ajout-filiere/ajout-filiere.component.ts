import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-ajout-filiere',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './ajout-filiere.component.html',
  styleUrl: './ajout-filiere.component.scss'
})
export class AjoutFiliereComponent {
  filiereForm: FormGroup = new FormGroup({
    code: new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(6)]),
    nom: new FormControl('', [Validators.required,Validators.minLength(3)]),
    departement: new FormControl('', [Validators.required]),
    description: new FormControl(''),



  });

}
