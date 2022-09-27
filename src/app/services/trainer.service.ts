import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trainer } from '../models/trainer';
import { StorageUtil } from '../utils/Storage';
import { StorageKeys } from '../utils/StorageKeys';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private trainerAPI =  environment.trainerAPI;
  private _error: string = ""
  private _loading: boolean = false
  
  private _trainer?:Trainer;

  constructor(private readonly http: HttpClient) { 
    this._trainer =  StorageUtil.localStorageRead<Trainer>(StorageKeys.Trainer);
  }


  get trainer() : Trainer | undefined {
    return this._trainer;
  }

  set trainer(trainer: Trainer | undefined) {
    StorageUtil.localStorageWrite<Trainer>(StorageKeys.Trainer, trainer!);
    this._trainer = trainer;
  }

  getTrainerById(id: number) : void
  {
    this.http.get<Trainer>(`${this.trainerAPI}${id}`)
    this._loading = true
    this.http.get<Trainer>(this.trainerAPI)
    .pipe(
      finalize(() => {
        this._loading = false
      })
    )
    .subscribe({
      next: (trainer: Trainer) => {
        this._trainer = trainer
      },
      error: (error: HttpErrorResponse) => {
        this._error = error.message
      }
    })
  }
}
