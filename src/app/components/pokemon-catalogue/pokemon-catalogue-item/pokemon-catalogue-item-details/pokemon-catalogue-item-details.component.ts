import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Details } from 'src/app/models/pokemondetails';
import { PokemonDetailsService } from 'src/app/services/pokemon-details/pokemon-details.service';

@Component({
  selector: 'app-pokemon-catalogue-item-details',
  templateUrl: './pokemon-catalogue-item-details.component.html',
  styleUrls: ['./pokemon-catalogue-item-details.component.scss']
})
export class PokemonCatalogueItemDetailsComponent implements OnInit {

  @Input() id: number = 0
  private _details : Details = {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: '',
    moves: [],
    name: '',
    order: 0,
    past_types: [],
    stats: [],
    types: [],
    weight: 0
  }

  get details(): Details {
    return this._details
  }

  constructor(private readonly pokemonDetailsService: PokemonDetailsService) {
   }
  ngOnInit(): void {
    this.pokemonDetailsService.getDetails(this.id).subscribe({
      next: (details: Details) => {
        this._details = details
      },
      error: (error: HttpErrorResponse) => {
        console.log(error)
      }
    })
  }
}
