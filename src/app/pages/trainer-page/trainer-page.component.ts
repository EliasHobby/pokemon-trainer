import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { Trainer } from 'src/app/models/trainer';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.scss']
})
export class TrainerPageComponent implements OnInit {

  get trainer(): Trainer | undefined {
    return this.trainerService.trainer
  }

  get pokemons(): Pokemon[] {
    if(this.trainerService.trainer)
      return this.trainerService.trainer.pokemon
    return []
  }

  constructor(
    private trainerService: TrainerService
  ) { }

  ngOnInit(): void {
    
  }

}
