import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styles: ``
})
export class ListComponent {
 public heronames:string []=['spiderman', 'thor','ironman','hulk']

 public deletedHero?:string;

 remooveLastHero(){
  this.deletedHero =this.heronames.pop();
 }
}
