import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-catalogue-item',
  templateUrl: './pokemon-catalogue-item.component.html',
  styleUrls: ['./pokemon-catalogue-item.component.scss']
})
export class PokemonCatalogueItemComponent implements OnInit {

  @Input() pokemon?: Pokemon

  getPokemonId(url: string): number{
    let split = url.split("/")
    return +split[split.length - 2]
  } 
  getImageLink(url: string): string {
    let id = this.getPokemonId(url)
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  }
  constructor() { }

  ngOnInit(): void {
  }

}
