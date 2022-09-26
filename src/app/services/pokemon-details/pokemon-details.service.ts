import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap, catchError, map } from 'rxjs';
import { Details } from 'src/app/models/pokemondetails';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailsService {

  private _api: string= 'https://pokeapi.co/api/v2/pokemon/'
  private _loading: boolean = false

  get loading(): boolean {
    return this._loading
  }

  constructor(private readonly http: HttpClient) { }

  public getDetails(id: number): Observable<Details> {
    this._loading = true
    return this.http.get<Details>(this._api + id)
    .pipe(
      finalize(() => {
        this._loading = false
      }),
    )
  }
}
