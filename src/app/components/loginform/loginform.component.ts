import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  constructor() { }
  currentText: string = "please login"
  handleLogin(): void
  {
    this.currentText = "you have logged in"
  }

  ngOnInit(): void {
  }

}
