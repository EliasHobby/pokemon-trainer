import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { PokeListObject, Pokemon } from 'src/app/models/pokemon';
import { StorageUtil } from 'src/app/utils/Storage';
import { StorageKeys } from 'src/app/utils/StorageKeys';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _api: string= 'https://pokeapi.co/api/v2/pokemon?limit=151'
  private _pokemons: Pokemon[] = []
  private _error: string = ""
  private _loading: boolean = false

  get error(): string {
    return this._error
  }

  get loading(): boolean {
    return this._loading
  }

  get pokemon(): Pokemon[] {
    return this._pokemons
  }
  
  constructor(private readonly http: HttpClient) { }

  public getAllPokemon(): void {

    if(StorageUtil.sessionStorageRead(StorageKeys.Pokemon) !== undefined)
    {
      this._pokemons = StorageUtil.sessionStorageRead(StorageKeys.Pokemon) as Pokemon[]
      return;
    }
    
    this._loading = true
    this.http.get<PokeListObject>(this._api)
    .pipe(
      finalize(() => {
        this._loading = false
      }),
      tap((pokeListObject: PokeListObject) => {
        StorageUtil.sessionStorageWrite(StorageKeys.Pokemon,pokeListObject.results)
      })
    )
    .subscribe({
      next: (pokeListObject: PokeListObject) => {
        this._pokemons = pokeListObject.results
      },
      error: (error: HttpErrorResponse) => {
        this._error = error.message
      }
    })
  }

  public pokemonById(url: string): Pokemon | undefined {
    return this._pokemons.find((pokemon: Pokemon) => pokemon.url === url);
  }
}
