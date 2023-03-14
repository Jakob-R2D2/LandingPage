import { Component } from '@angular/core';
import { ITopics } from '../interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent {
  public iAmTrueMan: boolean = false;
  public topics: ITopics[] = [
    {
      title: "Felder",
      routerLink: "/home"
    },
    {
      title: "Bäume",
      routerLink: "/home"
    },
    {
      title: "etc",
      routerLink: "/home"
    }
  ];

  ngOnInit(){
    // ein for loop in js
    for(let x in this.topics){
      console.log(x);
    }
  }

  public myPressMeFunction(myTestString: string){
    console.log(myTestString);

    // Ausgabe button
    alert(myTestString);

    alert(`isTrue?: ${this.iAmTrueMan}`);

    // Hidden button
    this.iAmTrueMan = !this.iAmTrueMan;

  }
}
