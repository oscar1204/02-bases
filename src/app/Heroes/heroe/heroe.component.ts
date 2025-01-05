import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: ``
})
export class HeroeComponent {
   public name:string='ironman';
   public age:number=45;

   get capitalizeName():string{
    return this.name.toUpperCase();
   }
   getheroedescription():string{
    return `${this.name}-${this.age}`;
   }
   changeheroeheroe():void{
      this.name='spiderman'
   }
   changeage():void{
     this.age= 25
   }
}
