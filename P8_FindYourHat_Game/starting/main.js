const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field = [[]]){
    this.field = field;
    this.x = 0;
    this.y = 0;
    this.field[0][0] = pathCharacter;
  }

  runGame(){
    let playing = true;
    while(playing){
      this.print();
      this.askQuestion();

      if(!this.isInside()){
        console.log("Ouch! You went out of the field")
        playing = false;
      }else if(this.inHole()){
        console.log("Ouch! You fell into a hole")
        playing = false;
      }else if(this.gotHat()){
        console.log("Congrats! You won the game!")
        playing = false;
      } else {
        this.field[this.x][this.y] = pathCharacter; 
      }
    }
  }

  print() {
    this.field.forEach((element) => {
      console.log(element.join(""));
    });
  }

  askQuestion(){
    const direction = prompt('Which way?');
    switch(direction){
      case 'r':
        this.x += 1;
        break;
      case 'l':
        this.x -= 1;
        break;
      case 'd':
        this.y += 1;
        break;
      case 'u':
        this.y -= 1;
        break;
      default:
        console.log('Invalid input. Please retry');
        this.askQuestion();
        break;
    }
  } 
  
  isInside(){
    if(this.x >= 0 && this.y >= 0 && this.x < this.field[0].length && this.y < this.field.length){
      return true;
    } else{
      return false;
    }
  }

  gotHat(){
    return this.field[this.x][this.y] === hat;
  }

  inHole(){
    return this.field[this.x][this.y] === hole;
  }

}


const myField = new Field([
  ['*', '░', '░', 'O'],
  ['░', 'O', '░', '░'],
  ['░', '^', '░', '░'],
]);


myField.runGame();
