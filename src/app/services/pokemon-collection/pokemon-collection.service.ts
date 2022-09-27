import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { Trainer } from 'src/app/models/trainer';
import { environment } from 'src/environments/environment';
import { PokemonService } from '../pokemon-service/pokemon.service';
import { TrainerService } from '../trainer.service';

const { API_KEY, trainerAPI } = environment;

@Injectable({
  providedIn: 'root'
})
export class PokemonCollectionService {

  get loading(): boolean {
    return this._loading;
  }

  private _loading: boolean = false;

  constructor(
    private http: HttpClient,
    private readonly pokemonService: PokemonService,
    private readonly trainerService: TrainerService
  ) { }
  // Get the pokemon based on the Id

  public addToCollection(url: string): Observable<any> {
    if (!this.trainerService.trainer) {
      throw new Error("addToCollection: There is no trainer");
    }
    const trainer: Trainer = this.trainerService.trainer;
    const pokemon: Pokemon | undefined = this.pokemonService.pokemonById(url);

    if (!pokemon) {
      throw new Error("addToCollection: No pokemon with id: " + url);
    }

    if(this.trainerService.inCollection(url)) {
      throw new Error("addToCollection: Pokemon already in collection: " + url);
    }

    const headers = new HttpHeaders ({
      'content-type': 'application/json',
      'x-api-key': API_KEY
    })

    this._loading = true;

    return this.http.patch(`${trainerAPI}/${trainer.id}`, {
      pokemon: [...trainer.pokemon, pokemon]
    }, {
      headers
    }).pipe (
      finalize(() => {
        this._loading = false;
      })
    )
  }
}
