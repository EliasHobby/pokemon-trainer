import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { PokemonCatalogueComponent } from './components/pokemon-catalogue/pokemon-catalogue.component';
import { PokemonCollectionComponent } from './components/pokemon-collection/pokemon-collection.component';
import { PokemonCollectionItemComponent } from './components/pokemon-collection/pokemon-collection-item/pokemon-collection-item.component';
import { PokemonCatalogueItemComponent } from './components/pokemon-catalogue/pokemon-catalogue-item/pokemon-catalogue-item.component';
import { PokemonCatalogueItemDetailsComponent } from './components/pokemon-catalogue/pokemon-catalogue-item/pokemon-catalogue-item-details/pokemon-catalogue-item-details.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TrainerPageComponent } from './pages/trainer-page/trainer-page.component';
import { CataloguePageComponent } from './pages/catalogue-page/catalogue-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { CollectPokemonButtonComponent } from './components/collect-pokemon-button/collect-pokemon-button/collect-pokemon-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    PokemonCatalogueComponent,
    PokemonCollectionComponent,
    PokemonCollectionItemComponent,
    PokemonCatalogueItemComponent,
    PokemonCatalogueItemDetailsComponent,
    LandingPageComponent,
    TrainerPageComponent,
    CataloguePageComponent,
    CollectPokemonButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
