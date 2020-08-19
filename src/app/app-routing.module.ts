import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { AccueilComponent } from './agriculture/accueil/accueil.component';
import { AccueilDetailsComponent } from './agriculture/accueil-details/accueil-details.component';
import { EventDetailsComponent } from './agriculture/event-details/event-details.component';
import { EventsComponent } from './agriculture/events/events.component';
import { FavorisComponent } from './agriculture/favoris/favoris.component';
import { ProduitAddComponent } from './agriculture/produit-add/produit-add.component';
import { ProduitDetailsComponent } from './agriculture/produit-details/produit-details.component';
import { ProduitsComponent } from './agriculture/produits/produits.component';
import { ProfilComponent } from './agriculture/profil/profil.component';
import { QuestionsComponent } from './agriculture/questions/questions.component';
import { QuestionsAddComponent } from './agriculture/questions-add/questions-add.component';
import { QuestionsDetailsComponent } from './agriculture/questions-details/questions-details.component';


const routes: Routes = [
  {
    path:'',
    component : LoginComponent
  },
  {
    path:'register',
    component : RegisterComponent
  },
  {
    path:'agri',
    component : AgricultureComponent,
    
    children:[
      {path :'',
      redirectTo:'Acceuil',
      pathMatch:'full'},
      {
        path:'Acceuil',
        component : AccueilComponent
      }, 
      {
        path:'acceuil-details',
        component : AccueilDetailsComponent
      }, 
      {
        path:'event-details',
        component : EventDetailsComponent
      }, 
      {
        path:'event',
        component : EventsComponent
      }, 
      {
        path:'favoris',
        component : FavorisComponent
      }, 
      {
        path:'produit-add',
        component : ProduitAddComponent
      }, 
      {
        path:'produit-details',
        component : ProduitDetailsComponent
      }, 
      {
        path:'produit',
        component : ProduitsComponent
      }, 
      {
        path:'profil',
        component : ProfilComponent
      }, 
      {
        path:'questions',
        component : QuestionsComponent
      }, 
      {
        path:'question-add',
        component : QuestionsAddComponent
      }, 
      {
        path:'question-details',
        component : QuestionsDetailsComponent
      }, 
    ]
  }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
