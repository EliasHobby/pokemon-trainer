import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { PokeListObject, Pokemon } from 'src/app/models/pokemon';
import { StorageUtil } from 'src/app/utils/Storage';

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

  public getPokemon(): void {
    if(StorageUtil.sessionStorageRead('pokemon') != null)
      this._pokemons = StorageUtil.sessionStorageRead('pokemon') as Pokemon[]
    else
      this.getAllPokemon()
  }

  public getAllPokemon(): void {
    this._loading = true
    this.http.get<PokeListObject>(this._api)
    .pipe(
      finalize(() => {
        this._loading = false
      }),
      tap((pokeListObject: PokeListObject) => {
        StorageUtil.sessionStorageWrite('pokemon',pokeListObject.results)
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
}
