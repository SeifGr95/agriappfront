import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { AccueilComponent } from './agriculture/accueil/accueil.component';
import { EventsComponent } from './agriculture/events/events.component';
import { ProfilComponent } from './agriculture/profil/profil.component';
import { QuestionsComponent } from './agriculture/questions/questions.component';
import { QuestionsAddComponent } from './agriculture/questions-add/questions-add.component';
import { QuestionsDetailsComponent } from './agriculture/questions-details/questions-details.component';
 import { AuthguardService } from "src/app/apis/authguard.service";
import { ForgotPassEmailComponent } from './forgot-pass-email/forgot-pass-email.component';
import { ContactComponent } from './agri/contact/contact.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { ArticleComponent } from './admin/article/article.component';
import { QuotationComponent } from './admin/quotation/quotation.component';
import { CommisariatComponent } from './commisariat/commisariat.component';
import { ProductComponent } from './admin/product/product.component';
import { ExpertComponent } from './admin/expert/expert.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { ForgotPassNewpassComponent } from './forgot-pass-newpass/forgot-pass-newpass.component';

const routes: Routes = [
  
  {
    path:'forgot-password/:token',
    component : ForgotPassNewpassComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component : LoginComponent
  },
  
  {
    path:'register',
    component : RegisterComponent
  },{
    path:'forgot-password',
    component : ForgotPassEmailComponent
  },
  {
    path:'agri',
    component : AgricultureComponent,
    
    canActivate : [AuthguardService],
    
    children:[
      {path :'',
      redirectTo:'Acceuil',
      
      pathMatch:'full'},
      {
        path:'Acceuil',
        component : AccueilComponent
      }, 
      {
        path:'event',
        component : EventsComponent
      }, 
      {
        path:'produit',
        component : ProductComponent
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
        path:'question-details/:id',
        component : QuestionsDetailsComponent
      }, 

      {
        path:'contact',
        component : ContactComponent,
       
      }, 
      {
        path:'article',
        component : ArticleComponent, 
       
      }, 
      {
        path:'quotation',
        component : QuotationComponent , 
       
      }, {
        path:'commisariat',
        component : CommisariatComponent , 
       
      },{
        path:'rdv',
        component : RendezvousComponent, 
       
      },{
        path:'expert',
        component : ExpertComponent , 
       
      }
    ]
  }, 
  {
    path:'admin',
    component : AdminHomeComponent, 
    canActivate:[AuthguardService,AdminGuardGuard]
  }, 

  {
    path:"**",
    component:LoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
