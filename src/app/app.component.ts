import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'LandingPage';
  public image = '/assets/Logo.png'

  onClick(){
    console.log("Thanks for subscribing.")
  }
}
