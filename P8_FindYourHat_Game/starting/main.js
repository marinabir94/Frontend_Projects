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
    this.playerPosition = [0][0];
  }

  runGame(){
    let playig = true;
    while(playing){
      this.print();
      this.askQuestion();
      if(out of field){
        console.log("Ouch! You went out of the field")
        playing = false;
      }elseif(in hole){
        console.log("Ouch! You fell into a hole")
        playing = false;
      }else{
        console.log("Congrats! You won the game!")
        playing = false;
      }
    }
  }
  print() {
    this.field.forEach((element) => {
      console.log(element.join(""));
    });
  }

  askQuestion(){
    let direction = prompt('Which way now?');
  }

  move(direction){

  }
  
}
const myField = new Field([
  ['*', '░', '░', 'O'],
  ['░', 'O', '░', '░'],
  ['░', '^', '░', '░'],
]);


myField.print();




