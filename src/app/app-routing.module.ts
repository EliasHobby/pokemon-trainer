import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CataloguePageComponent } from './pages/catalogue-page/catalogue-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TrainerPageComponent } from './pages/trainer-page/trainer-page.component';

const routes: Routes = [
  // FIXME: Routing 404
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/landing'
  },
  {
    path: 'landing',
    component: LandingPageComponent
  },
  {
    path: 'trainer',
    component: TrainerPageComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'catalogue',
    component: CataloguePageComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: '**',
    component: LandingPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
