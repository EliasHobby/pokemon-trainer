import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/models/trainer';
import { LoginService } from 'src/app/services/login-service/login.service';
import { TrainerService } from 'src/app/services/trainer.service';
import { environment } from 'src/environments/environment';
const { API_KEY } = environment;
const { trainerAPI } = environment;
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent {

  @Output() login: EventEmitter<void> = new EventEmitter();
  constructor(
    private readonly trainerService: TrainerService,
    private readonly loginService: LoginService
  ) { }

  loginSubmit(loginForm: NgForm): void {
    const { username } = loginForm.value;

    this.loginService.login(username)
      .subscribe({
        next: (trainer: Trainer) => {
          this.trainerService.trainer = trainer;
          this.login.emit();
        },
        error: () => {
          // Handle locally
        }
      })
  }
}
