let arrayOfStr=[];
let errorsLeft= 6;
let errorLetters="";
class Hangman {
  constructor(word){
    this.word=word;
    if (arrayOfStr.length===0){
     for (let pos=0;pos<this.word.length;pos++){
       arrayOfStr[pos]="_";
     }
    }
  }
  guess(letter){
   if(this.word.includes(letter)){
     if (letter===""){
     return (arrayOfStr.join(""));
     }
     for(let pos=0;pos<this.word.length;pos++){
       if (letter===this.word[pos]){
         arrayOfStr[pos]=letter;
         continue;
       }
     }
     if (arrayOfStr.join("") === this.word){
       return (`${arrayOfStr.join("")} | You won!`)
     }
   }else{
     if (errorsLeft===0){
       return (`${this.word} | You lose!`);
     }
       errorsLeft--;
       if (errorLetters === ""){
       errorLetters = letter;
       }
       else{
       errorLetters += "," + letter;
       }
       return (`wrong letter, errors left ${errorsLeft} | ${errorLetters}`);
   }
   return (arrayOfStr.join(""));
  }
  getGuessedString(){
    return (arrayOfStr.join(""));
  }
  getErrorsLeft(){
    return (errorsLeft);
  }
  getWrongSymbols(){
    if(errorsLeft === 6){
      return [];
    }
    return (errorLetters.split(","));
  }
  getStatus(){
    return(`${arrayOfStr.join("")} | errors left ${errorsLeft}`);
  }
  startAgain(word){
    this.word=word;
    arrayOfStr=[];
    for (let pos=0;pos<this.word.length;pos++){
       arrayOfStr[pos]="_";
    }
    errorsLeft= 6;
    errorLetters="";
  }
}
let hangman = new Hangman("webpurple");
module.exports=hangman;



