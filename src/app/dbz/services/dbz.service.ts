import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {
  


  public characters: Character[]= [{
    id: uuid(),
    name:'Krillin',
    power: 1000
  },
  {
    id: uuid(),
   name:'Goku',
   power: 9500 
  },
  {
    id: uuid(),
    name:'Vegeta',
   power: 7500 
  }];

  onNewCharacter(character:Character):void{

    const newCharacter: Character = {
      id: uuid(),
      ...character
    };

    this.characters.push(newCharacter);
    
   
  }

  onDelete(index:number):void{
   
    /* Para poder eliminar un elemento de un arreglo,
      puedes utilizar el método splice('desde qué indice deseas comenzar','cuantos elementos quieres que remueva')

      para la TAREA 1 eliminamos el índice recibido. COMPLETADO
    */

    this.characters.splice(index,1)
    
  }

  /* TAREA 2 : En base a la TAREA 1, en vez de pasar el Indice, ahora deberás de pasar
    
    El Id del personaje. COMPLETADO
  */
  onDeleteCharacterById(id:string): void{
    this.characters = this.characters.filter(character => character.id !== id)
  }
  
}