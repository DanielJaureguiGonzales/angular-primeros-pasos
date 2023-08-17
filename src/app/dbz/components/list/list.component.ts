import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  /* Ahora bien, Para recibir un dato del elemento Padre utilizaremos un atributo
   llamado @Input()
    osea -> Afuera de ListComponent está el MainPageComponent, esto quiere decir
      que el MainPageComponent es el padre.
    
    Esto lo insertamos como propiedad del componente y con el valor de character 
    que tiene el Padre lo pasamos como valor.

    En el appComponenteFather.html: 
    
    <app-children ['Nombre del atributo que se decora con Input@ en el componente hijo']="'variable que queremos pasar desde el componente padre'">
    </app-children>
   
  */

  @Input()
  public characterList: Character[] = [];

  // TAREA 1: DEBES DE EMITIR EL INDEX,  DESDE ESTE COMPONENTE AL PADRE

  /* @Output()
  public onDelete: EventEmitter<number> = new EventEmitter; */

  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter;

  /* onDeleteCharacter(index:number):void{
    //TODO: EMITIR EL ID DEL PERSONAJE

    this.onDelete.emit(index);
  }
 */
  onDeleteCharacterById(id:string):void{
   
    if (!id) return;

    this.onDeleteById.emit(id);
  }  
}
