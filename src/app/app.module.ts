import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './commun/header/header.component';
import { IconModule } from '@ant-design/icons-angular';
import { FooterComponent } from './commun/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductComponent } from './components/product/product.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StagiairesComponent } from './components/stagiaires/stagiaires.component';
import { DiplomeComponent } from './components/diplome/diplome.component';
import { EntreprisesComponent } from './components/entreprises/entreprises.component';
import { RegisterComponent } from './components/register/register.component';
import { RstagiaireComponent } from './components/rstagiaire/rstagiaire.component';
import { RentrepriseComponent } from './components/rentreprise/rentreprise.component';
import { RdiplomeComponent } from './components/rdiplome/rdiplome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    HomeComponent,
    CarouselComponent,
    ProductComponent,

    DashboardComponent,
     StagiairesComponent,
     DiplomeComponent,
     EntreprisesComponent,
     RegisterComponent,
     RstagiaireComponent,
     RentrepriseComponent,
     RdiplomeComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    IconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
