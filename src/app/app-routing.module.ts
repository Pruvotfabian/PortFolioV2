import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { AdminComponent } from './admin/admin.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component'
import { AProposComponent } from './a-propos/a-propos.component';
import { MentionComponent } from './mention/mention.component';
import { ProjetEmpireComponent } from './projets/projet-empire/projet-empire.component';
import { ProjetSiteDeLaMuerteComponent } from './projets/projet-site-de-la-muerte/projet-site-de-la-muerte.component';
import { ProjetTitanoComponent } from './projets/projet-titano/projet-titano.component';
import { ProjetOsmoseComponent } from './projets/projet-osmose/projet-osmose.component';
import { ProjetSimplonCalaisComponent } from './projets/projet-simplon-calais/projet-simplon-calais.component';
import { ProjetSimplonHdfComponent } from './projets/projet-simplon-hdf/projet-simplon-hdf.component';
import { ProjetArcturusComponent } from './projets/projet-arcturus/projet-arcturus.component';
import { ProjetTodoComponent } from './projets/projet-todo/projet-todo.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home',  component: HomeComponent},
    { path: 'projet-empire',  component: ProjetEmpireComponent},
    { path: 'projet-site-de-la-muerte',  component: ProjetSiteDeLaMuerteComponent},
    { path: 'projet-titano',  component: ProjetTitanoComponent},
    { path: 'projet-osmose',  component: ProjetOsmoseComponent},
    { path: 'projet-simplon-calais',  component: ProjetSimplonCalaisComponent},
    { path: 'projet-simplon-hdf',  component: ProjetSimplonHdfComponent},
    { path: 'projet-arcturus',  component: ProjetArcturusComponent},
    { path: 'projet-2do',  component: ProjetTodoComponent},
    { path: 'mention',  component: MentionComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'aPropos', component: AProposComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'admin/admin', component: AdminComponent}, // Only me have an count
    { path: '**', component: Page404Component  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }