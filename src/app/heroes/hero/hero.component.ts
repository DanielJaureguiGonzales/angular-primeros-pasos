import { Component, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styles: [
    `
      h1{
        font-size: 50px;
      }

      dd{
        font-size: 2rem;
        font-weight: bold;
      }
    `
  ]
})
export class HeroComponent {

  public nameArray: string[]= ['ironman','spiderman','hulk'];
  public ageArray: number[]= [45,32,40];

  public name:string = 'ironman';

  public age: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  changeHero(): void{
    let random = Math.floor(Math.random()*3);
    this.name = this.nameArray[random];
    console.log(random);
    
  }
  changeAge(): void{
    let random = Math.floor(Math.random()*3);
    this.age = this.ageArray[random];
  }

  resetForm(): void{
    this.name='ironman',
    this.age=45;
  }

}
