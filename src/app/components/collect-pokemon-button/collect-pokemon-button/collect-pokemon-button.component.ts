import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer';
import { PokemonCollectionService } from 'src/app/services/pokemon-collection/pokemon-collection.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-collect-pokemon-button',
  templateUrl: './collect-pokemon-button.component.html',
  styleUrls: ['./collect-pokemon-button.component.scss']
})
export class CollectPokemonButtonComponent implements OnInit {

  public isCollected: boolean = false;

  @Input() pokemonUrl: string = "";

  get loading(): boolean {
    return this.pokemonCollection.loading;
  }



  constructor(
    private readonly trainerService: TrainerService,
    private readonly pokemonCollection: PokemonCollectionService
  ) { }

  ngOnInit(): void {
    this.isCollected = this.trainerService.inCollection(this.pokemonUrl);
  }

  onCollectClick(): void {
    this.pokemonCollection.addToCollection(this.pokemonUrl)
      .subscribe({
        next: (trainer: Trainer) => {
          this.isCollected = this.trainerService.inCollection(this.pokemonUrl);
        },
        error: (error: HttpErrorResponse) => {
          console.log("ERROR: ", error.message);
        }
      })
  }
}
