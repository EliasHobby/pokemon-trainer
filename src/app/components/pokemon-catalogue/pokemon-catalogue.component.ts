import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.scss']
})
export class PokemonCatalogueComponent implements OnInit {

  @Input() pokemons: Pokemon[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
