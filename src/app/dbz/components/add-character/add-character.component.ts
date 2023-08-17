import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  /* Ahora bien, el personaje lo debo de insertar en el arreglo 'characters'
    que está en el componente Padre, para eso utilizo el @Output y crear un 
    EventEmitter<'Tipo de Dato que enviarás'>
    para emitir al padre que tiene que recibir el nuevo personaje, lo declaremos 
    en alguna función que está recogiendo los datos del formulario
    en este caso la función emitCharacter()
  */
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public characterNew: Character = {
    name:'',
  };

  emitCharacter(): void{

  
    if( this.characterNew.name.length === 0 ) return;
    if(this.characterNew.power === undefined){
      this.characterNew.power = 0;
    }
    /* sintaxis:
      this.myEvent.emit('{Objeto que se enviará}')

      se emitirá el evento al padre de esta forma:

      en el ComponentePadre.html:

      <app-padre ('nombre del evento'):"función que me permita insertar el dato($event)" >
      </app-padre>
    */
   
    this.onNewCharacter.emit({...this.characterNew});

    this.characterNew.name='';
    this.characterNew.power=0;

  }

}
