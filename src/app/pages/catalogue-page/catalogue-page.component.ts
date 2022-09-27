import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon-service/pokemon.service';

@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrls: ['./catalogue-page.component.scss']
})
export class CataloguePageComponent implements OnInit {

  get pokemons(): Pokemon[] {
    return this.pokemonService.pokemon
  }

  get loading(): boolean {
    return this.pokemonService.loading;
  }
  constructor(private readonly pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemon()
  }


}
