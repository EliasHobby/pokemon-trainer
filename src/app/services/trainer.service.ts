import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Trainer } from '../models/trainer';
import { StorageUtil } from '../utils/Storage';
import { StorageKeys } from '../utils/StorageKeys';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  
  private _trainer?:Trainer;

  get trainer() : Trainer | undefined {
    return this._trainer;
  }
  
  set trainer(trainer: Trainer | undefined) {
    StorageUtil.localStorageWrite<Trainer>(StorageKeys.Trainer, trainer!);
    this._trainer = trainer;
  }
  
  constructor(private readonly http: HttpClient) { 
    this._trainer =  StorageUtil.localStorageRead<Trainer>(StorageKeys.Trainer);
  }

  public inCollection(pokemonUrl: string): boolean {
    if (this._trainer) {
      return Boolean(this.trainer?.pokemon.find((pokemon: Pokemon) => pokemon.url === pokemonUrl));
    } else {
      return false;
    }
  }
}
