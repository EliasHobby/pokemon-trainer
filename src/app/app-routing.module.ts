import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CataloguePageComponent } from './pages/catalogue-page/catalogue-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TrainerPageComponent } from './pages/trainer-page/trainer-page.component';

const routes: Routes = [
  // FIXME: Routing 404
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'landing'
  },
  {
    path: 'landing',
    component: LandingPageComponent
  },
  {
    path: 'trainer',
    component: TrainerPageComponent
  },
  {
    path: 'catalogue',
    component: CataloguePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
