import { Routes } from '@angular/router';
import {DetailsApprenantComponent} from './details-apprenant/details-apprenant.component';
import {DetailEnseignantComponent} from './detail-enseignant/detail-enseignant.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ListeApprenantsComponent} from './liste-apprenants/liste-apprenants.component';

export const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  //{path: '', component: DetailsApprenantComponent},
  {path: 'details-apprenant',component: DetailsApprenantComponent},
  {path: 'details-enseignant', component: DetailEnseignantComponent},
  {path: 'liste-apprenants', component: ListeApprenantsComponent},
  {path: 'accueil', component: AccueilComponent},

];
