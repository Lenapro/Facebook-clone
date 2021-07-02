import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import{AccueilComponent} from './accueil/accueil.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path : 'connexion', component : ConnexionComponent},
  { path : 'inscription', component : InscriptionComponent},
  {path : 'accueil', component : AccueilComponent},
  { path : '', redirectTo: 'connexion', pathMatch:'full'},
  {path : 'profile', component : ProfileComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
