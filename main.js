const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░ ';
const pathCharacter = '*';

class Field {
  constructor(field){
    this.field = field;
  }
  print(){
    for(let i = 0; i < this.field.length; i++){
      console.log(this.field[i].join())
    }
  }
  // helper methods
  run(){
    this.print();
    let currMove = this.ask();
  }

  win(){

  }

  ask(){
    console.log('press:- u for up, d for down, r for right, l for left');
    const direction = prompt('where would you like to move:- ')
    return direction;
  }

}


const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.run()

