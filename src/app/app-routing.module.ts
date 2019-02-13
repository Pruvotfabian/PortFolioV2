import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { AdminComponent } from './admin/admin.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component'
import { AProposComponent } from './a-propos/a-propos.component';
import { MentionComponent } from './mention/mention.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home',  component: HomeComponent},
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