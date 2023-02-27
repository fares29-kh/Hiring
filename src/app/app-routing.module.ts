import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { HomeComponent } from './pages/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StagiairesComponent } from './components/stagiaires/stagiaires.component';
import { DiplomeComponent } from './components/diplome/diplome.component';
import { EntreprisesComponent } from './components/entreprises/entreprises.component';
import { RegisterComponent } from './components/register/register.component';
import { RstagiaireComponent } from './components/rstagiaire/rstagiaire.component';
import { RentrepriseComponent } from './components/rentreprise/rentreprise.component';
import { RdiplomeComponent } from './components/rdiplome/rdiplome.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
 
  { path: 'stagiaires', component : StagiairesComponent,},
  { path: 'diplomé', component:DiplomeComponent,},
  { path: 'Entreprises',component:EntreprisesComponent,},
  { path: 'register',component:RegisterComponent,},
  { path: 'RegisterStagiare',component:RstagiaireComponent,},
  {path: 'RegisterEntreprise',component:RentrepriseComponent,},
  {path: 'RegisterDiplome',component:RdiplomeComponent},
  { path: 'dashboard',component: DashboardComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
