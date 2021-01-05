const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░ ';
const pathCharacter = '*';

class Field {
  constructor(field){
    this.field = field;
    this.locationX = 0;
    this.locationY = 0;
    this.field[0][0] = pathCharacter;
  }

  print(){
    for(let i = 0; i < this.field.length; i++){
      console.log(this.field[i].join(''))
    }
  }

  static generateField(height, width , percentage){

  }
  // helper methods
  run(){
    let playing = true;
    while(playing){
    this.print();
    this.ask();
    if(this.isOutOfBOund()){
      console.log('Game Over, you went out of bound');
      playing = false;
      break;
    }else if(this.isHole()){
      console.log('Game Over, you fell in the hole');
      playing = false;
      break;
    }else if(this.isWinner()){
      console.log('Hurrah! you won the game.');
      playing = false;
      break;
    }

    this.field[this.locationY][this.locationX] = pathCharacter;
    }
  }

  ask(){
    console.log('press:- U for up, D for down, R for right, L for left');
    const direction = prompt('where would you like to move:- ').toUpperCase();
    switch (direction) {
      case 'U':
        this.locationY -= 1;
        break;
      case 'D':
        this.locationY += 1;
        break;
      case 'L':
        this.locationX -= 1;
        break;
      case 'R':
        this.locationX += 1;
        break;
      default:
        console.log('Enter U, D, L or R.');
        this.ask();
        break;
    }

  }

  isHole(){
    return this.field[this.locationY][this.locationX] === hole;
  }
  
  isWinner(){
    return this.field[this.locationY][this.locationX] === hat;
  }

  isOutOfBOund(){
    return (this.locationX < 0 || this.locationY < 0 || this.locationX >= this.field[0].length || this.locationY >= this.field.length);
 }

}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.run()

