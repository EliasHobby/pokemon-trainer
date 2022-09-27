import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonCollectionService } from 'src/app/services/pokemon-collection/pokemon-collection.service';

@Component({
  selector: 'app-collect-pokemon-button',
  templateUrl: './collect-pokemon-button.component.html',
  styleUrls: ['./collect-pokemon-button.component.scss']
})
export class CollectPokemonButtonComponent implements OnInit {

  @Input() pokemonUrl: string = "";

  get loading(): boolean {
    return this.pokemonCollection.loading;
  }

  constructor(private readonly pokemonCollection: PokemonCollectionService
  ) { }

  ngOnInit(): void {
  }

  onCollectClick(): void {
    this.pokemonCollection.addToCollection(this.pokemonUrl)
      .subscribe({
        next: (response: any) => {
          console.log("NEXT: ", response);
        },
        error: (error: HttpErrorResponse) => {
          console.log("ERROR: ", error.message);
        }
      })
  }
}
