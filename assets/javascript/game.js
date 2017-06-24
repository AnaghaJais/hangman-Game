

var words = ["apple","monkey","cat","mango","sea","water","random","computer","strawberry","cabbage","spinach","encyclopedia"];
    var input=[];
    var array3=[];
    var win=0;
    var numberGuess=15;
    var newString;
    var arrayWord=[];
    var num;
    var mainWord;



//calling startGame function
   startGame();

//Declaring startGame function
    function startGame(){
    array3 =[];   
    numberGuess = 15;    
    mainWord=words[Math.floor(Math.random() * words.length)];
    arrayWord=mainWord.split("");
    console.log(arrayWord);
    num=arrayWord.length;   
    updateDashline(num);
    updateGuess();     
    input=[]; 
    document.querySelector("#letters").innerHTML = input;     
}



//Declaring function to validate all letters
function inputAlphabet(inputtext){
var alphaExp = /^[a-zA-Z]+$/;
if(inputtext.match(alphaExp)){
return true;
}
else{
alert("input is not a letter");
return false;
}
}




    //Whenever a key is pressed, calling an event
    document.onkeyup=function(event){    
    var userGuess=String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    console.log(arrayWord);
    if(inputAlphabet(userGuess)){
      if(input.indexOf(userGuess)=== -1){
    numberGuess--;
  }
  else{
    alert("Already guess this letter,Please try another");
  }
    if (numberGuess <1){
      alert("You lost!! Game Over")
             win=0;
             updateWin();
            startGame(); 
    }
    else{
    updateGuess();

  if(newString!== mainWord){
    if(arrayWord.indexOf(userGuess)!== -1){
      //console.log(arrayWord.indexOf(userGuess));
        for (var j = 0; j < arrayWord.length; j++) {
      if (arrayWord[j] === userGuess) {
        array3[j] = userGuess;        
       updateDashline(arrayWord);
       updateLetter(userGuess);
      }      
    }      
    }

    else{
    updateLetter(userGuess);
    }
   }
 
  else{
      win++;
      updateWin();
       document.getElementById("myAudio").play();
      alert("Winner");
      startGame();      
    }
}
}
};



//function to update the win
function updateWin(){
   document.querySelector("#wins").innerHTML = win;
}



// function to update dashline
function updateDashline(x){
 for(var i=0;i<x;i++)
   {  
      array3[i]= "-  ";     
    }
   console.log(array3);
  newString=array3.join("");
  console.log(newString);
 document.getElementById("current").innerHTML= newString; 
}


//function to update the number of guess remaining

function updateGuess(){
   document.querySelector("#numbers").innerHTML = numberGuess;
}


//function to updateLetter
function updateLetter(x){
  console.log(input.indexOf(x));
  if(input.indexOf(x)=== -1){
    input.push(x);
   document.querySelector("#letters").innerHTML = input;   
  }
  else{
     document.querySelector("#letters").innerHTML = input;  
  }
}

  //function to update win
  function updateWin(){
    document.querySelector("#wins").innerHTML = win;  
  }   
