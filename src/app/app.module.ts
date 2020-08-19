import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { P404Component } from './p404/p404.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { AccueilComponent } from './agriculture/accueil/accueil.component';
import { EventsComponent } from './agriculture/events/events.component';
import { FavorisComponent } from './agriculture/favoris/favoris.component';
import { ProduitsComponent } from './agriculture/produits/produits.component';
import { AccueilDetailsComponent } from './agriculture/accueil-details/accueil-details.component';
import { EventDetailsComponent } from './agriculture/event-details/event-details.component';
import { ProduitDetailsComponent } from './agriculture/produit-details/produit-details.component';
import { ProfilComponent } from './agriculture/profil/profil.component';
import { QuestionsComponent } from './agriculture/questions/questions.component';
import { QuestionsDetailsComponent } from './agriculture/questions-details/questions-details.component';
import { QuestionsAddComponent } from './agriculture/questions-add/questions-add.component';
import { ProduitAddComponent } from './agriculture/produit-add/produit-add.component';
import { HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    P404Component,
    AgricultureComponent,
    AccueilComponent,
    EventsComponent,
    FavorisComponent,
    ProduitsComponent,
    AccueilDetailsComponent,
    EventDetailsComponent,
    ProduitDetailsComponent,
    ProfilComponent,
    QuestionsComponent,
    QuestionsDetailsComponent,
    QuestionsAddComponent,
    ProduitAddComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
