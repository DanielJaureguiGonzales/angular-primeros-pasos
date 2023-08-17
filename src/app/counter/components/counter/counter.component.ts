import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-counter',
  template: `
  <h3>
    Counter: {{ counter }}
  </h3>


  <button (click)="decreaseBy()" >-1</button>
  <button (click)="resetDefault(5)" >reset</button>
  <button (click)="increaseBy()" >+1</button>

  `,
  styles: [
    `
      button{
      
        margin-right: 25px;
      }
    `
    
  ]
})

export class CounterComponent {

  public counter: number = 5;


  public increaseBy = () : void =>{
     this.counter +=1;
  }

  public decreaseBy = () : void =>{
   if (this.counter === 0) {
     return;
   }
     this.counter -=1;
  }

  public resetDefault = (def: number) : void =>{

     this.counter = def;
  }



}