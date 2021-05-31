import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import{AccueilComponent} from './accueil/accueil.component';

const routes: Routes = [
  { path : 'connexion', component : ConnexionComponent},
  { path : 'inscription', component : InscriptionComponent},
  {path : 'accueil', component : AccueilComponent},
  { path : '', redirectTo: 'connexion', pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
