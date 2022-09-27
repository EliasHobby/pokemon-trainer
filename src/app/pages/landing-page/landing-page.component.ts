import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  constructor(
    private readonly router: Router,
    private readonly trainerService: TrainerService
    ) {
      if (this.trainerService.trainer) {
        this.handleLogin();
      }
     }

  handleLogin(): void {
    this.router.navigateByUrl("/catalogue");
  }

}
