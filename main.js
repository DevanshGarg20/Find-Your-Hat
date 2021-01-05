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
      console.log(this.field[i].join(" "))
    }
  }

  static generateField(height, width , percentage = 0.1){

    const field = new Array(height).fill(0).map(el => new Array(width));
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const prob = Math.random();
        field[y][x] = prob > percentage ? fieldCharacter : hole;
      }
    }
    // random hat location
    const hatLocation = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height)
    };

    field[hatLocation.y][hatLocation.x] = hat;
    return field;

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

const myField = new Field(Field.generateField(10, 10, 0.2));

myField.run()

