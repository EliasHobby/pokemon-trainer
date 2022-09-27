import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { Trainer } from 'src/app/models/trainer';
import { environment } from 'src/environments/environment';
const { trainerAPI } = environment;
const { API_KEY } = environment;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Dependency Injection
  constructor(private http: HttpClient) { }

  public login(username: string): Observable<Trainer> {
    return this.checkTrainer(username)
      .pipe(
        switchMap((trainer: Trainer | undefined) => {
          if (trainer === undefined) { // trainer does not exist
            return this.createTrainer(username);
          }
          return of(trainer);
        })
      )
  }

  // Check if trainer exists
  private checkTrainer(username: string): Observable<Trainer | undefined> {
    return this.http.get<Trainer[]>(`${trainerAPI}?username=${username}`)
      .pipe(
        map((response: Trainer[]) => response.pop())
      )
  }

  // Create trainer
  private createTrainer(username: string): Observable<Trainer> {
    const trainer = {
      username,
      pokemon: []
    };

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "x-api-key": API_KEY
    })

    return this.http.post<Trainer>(trainerAPI, trainer, {
      headers
    })
  }
}
