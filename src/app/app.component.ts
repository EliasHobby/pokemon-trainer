import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'; 
import { PokemonService } from './services/pokemon-service/pokemon.service';
import { TrainerService } from './services/trainer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon-trainer';

  constructor(
    private readonly trainerService: TrainerService,
    private readonly pokemonService: PokemonService
    ) {}

    ngOnInit(): void {
      if(this.trainerService.trainer)
        this.pokemonService.getPokemon()
    }
}
