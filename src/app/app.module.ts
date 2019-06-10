import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { AdminComponent } from './admin/admin.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MentionComponent } from './mention/mention.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { ProjetEmpireComponent } from './projets/projet-empire/projet-empire.component';
import { ProjetSiteDeLaMuerteComponent } from './projets/projet-site-de-la-muerte/projet-site-de-la-muerte.component';
import { ProjetTitanoComponent } from './projets/projet-titano/projet-titano.component';
import { ProjetOsmoseComponent } from './projets/projet-osmose/projet-osmose.component';
import { ProjetSimplonCalaisComponent } from './projets/projet-simplon-calais/projet-simplon-calais.component';
import { ProjetSimplonHdfComponent } from './projets/projet-simplon-hdf/projet-simplon-hdf.component';
import { ProjetArcturusComponent } from './projets/projet-arcturus/projet-arcturus.component';
import { ProjetTodoComponent } from './projets/projet-todo/projet-todo.component';
import { ProjetEmpirev2Component } from './projets/projet-empirev2/projet-empirev2.component';
import { ProjetBlogbosterComponent } from './projets/projet-blogboster/projet-blogboster.component';
import { ProjetStygeonComponent } from './projets/projet-stygeon/projet-stygeon.component';
import { ProjetTurtleComponent } from './projets/projet-turtle/projet-turtle.component';
import { ProjetHarbingerComponent } from './projets/projet-harbinger/projet-harbinger.component';
import { WikipodiaComponent } from './projets/projet-wikipodia/wikipodia.component';
import { ProjetNozamaComponent } from './projets/projet-nozama/projet-nozama.component';
import { ProjetBotteComponent } from './projets/projet-botte/projet-botte.component';
import { ProjetBeethovenComponent } from './projets/projet-beethoven/projet-beethoven.component';
import { ProjetTheForgottenComponent } from './projets/projet-the-forgotten/projet-the-forgotten.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    Page404Component,
    AdminComponent,
    PortfolioComponent,
    ContactComponent,
    AProposComponent,
    MentionComponent,
    ProjetEmpireComponent,
    ProjetSiteDeLaMuerteComponent,
    ProjetTitanoComponent,
    ProjetOsmoseComponent,
    ProjetSimplonCalaisComponent,
    ProjetSimplonHdfComponent,
    ProjetArcturusComponent,
    ProjetTodoComponent,
    ProjetEmpirev2Component,
    ProjetBlogbosterComponent,
    ProjetStygeonComponent,
    ProjetTurtleComponent,
    ProjetHarbingerComponent,
    WikipodiaComponent,
    ProjetNozamaComponent,
    ProjetBotteComponent,
    ProjetBeethovenComponent,
    ProjetTheForgottenComponent,
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }