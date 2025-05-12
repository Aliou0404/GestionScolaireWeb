import { Component } from '@angular/core';
import {Apprenant} from '../modeles';
import {Apprenants} from '../mockup';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-liste-apprenants',
  imports: [
    JsonPipe
  ],
  templateUrl: './liste-apprenants.component.html',
  styleUrl: './liste-apprenants.component.scss'
})
export class ListeApprenantsComponent {
  apprenants: Apprenant[] = Apprenants;

  protected readonly Apprenants = Apprenants;
}
