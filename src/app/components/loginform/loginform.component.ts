import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trainer } from 'src/app/models/trainer';
import { LoginService } from 'src/app/services/login-service/login.service';
import { environment } from 'src/environments/environment';
const { API_KEY } = environment;
const { trainerAPI } = environment;
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent {
  constructor(private readonly loginService: LoginService) { }

  loginSubmit(loginForm: NgForm): void {
    const { username } = loginForm.value;

    this.loginService.login(username)
    .subscribe({
      next: (trainer: Trainer) => {

      },
      error: () => {

      }
    })
  }


}
