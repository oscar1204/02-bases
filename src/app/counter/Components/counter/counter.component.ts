import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  template:`
  Counter:{{counter}}

<button (click)="increaseBy(+1)" >+1</button>
  <button (click)="increaseBy(-1)">-1</button>


  `
})



export class CounterComponent{
public counter: number=10;
increaseBy(value:number):void{
  this.counter +=value
}

}
