import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trainer } from '../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private _trainer:Trainer = { id: 0, username: '', pokemon:[]}
  private trainerAPI = 'https://fredrik-elias-pokemon-api.herokuapp.com/trainers' //FIXME to environment
  constructor(private readonly http: HttpClient) { }


  get trainer()
  {
    return this._trainer;
  }

  getTrainerById(id: number) : Observable<Trainer>
  {
    return this.http.get<Trainer>(`${this.trainerAPI}${id}`)
  }
}
