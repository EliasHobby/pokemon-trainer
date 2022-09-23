import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent {

  constructor(private readonly trainerService: TrainerService) { }

  handleLogin(trainerForm: NgForm): void
  {
    const {username} = trainerForm.value; 
    console.log(this.trainerService.getTrainerById(1))
  }

  ngOnInit(): void {
  }

}
