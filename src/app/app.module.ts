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
import { ProfilComponent } from './agriculture/profil/profil.component';
import { QuestionsComponent } from './agriculture/questions/questions.component';
import { QuestionsDetailsComponent } from './agriculture/questions-details/questions-details.component';
import { QuestionsAddComponent } from './agriculture/questions-add/questions-add.component';
import { HttpClientModule} from '@angular/common/http'

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotPassEmailComponent } from './forgot-pass-email/forgot-pass-email.component';
import { ForgotPassNewpassComponent } from './forgot-pass-newpass/forgot-pass-newpass.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './agri/contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RighSideBarComponent } from './righ-side-bar/righ-side-bar.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { NewsComponent } from './admin/news/news.component';
import { ArticleComponent } from './admin/article/article.component';
import { ExpertComponent } from './admin/expert/expert.component';
import { AcceuilComponent } from './admin/acceuil/acceuil.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { ProductComponent } from './admin/product/product.component';
import { QuotationComponent } from './admin/quotation/quotation.component';
import { CommisariatComponent } from './commisariat/commisariat.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { ChatboatComponent } from './chatboat/chatboat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    P404Component,
    AgricultureComponent,
    AccueilComponent,
    EventsComponent,
    ProfilComponent,
    QuestionsComponent,
    QuestionsDetailsComponent,
    QuestionsAddComponent,
    ForgotPassEmailComponent,
    ForgotPassNewpassComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    RighSideBarComponent,
    LeftSideBarComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    NewsComponent,
    ArticleComponent,
    ExpertComponent,
    AcceuilComponent,
    UserListComponent,
    ProductComponent,
    QuotationComponent,
    CommisariatComponent,
    RendezvousComponent,
    ChatboatComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
