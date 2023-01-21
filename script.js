var enterButton = document.getElementById('enterButton');
var output = document.getElementById('outputText');


var randomNumber = Math.ceil(Math.random()*100);


function checkNumber(){
  var input = document.getElementById('userInput').value;

  if(input == randomNumber){
    output.innerHTML="You guessed right "+ ", "+ " it was "+ randomNumber;
    output.style.color="green";
  }
  else if(input>randomNumber && input<100){
    output.innerHTML="You guessed too high";
  }
  else if(input<randomNumber && input>1){
    output.innerHTML="You guessed too low";
  }
}


enterButton.addEventListener('click', checkNumber);
