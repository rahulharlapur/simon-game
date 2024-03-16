
var colorArray= ["red","blue","green","yellow"];
var newPattern = [];
var patternCheck = [];
var level = 0;
var started =false;

$(document).keydown(function(e){

  nextSquence();
  started = true;
});



$(".btn").click(function(e){
  if(started===true){
patternCheck.push(e.target.id);
$("#"+e.target.id).fadeOut(250).fadeIn(250);
playSound(e.target.id);
checkPattern(patternCheck.length-1);
}

});


function level1(){
  level++;
  $("h1").text("Level "+level);
}


function checkPattern(levelNo){

if(patternCheck[levelNo]===newPattern[levelNo]){
    if(patternCheck.length===newPattern.length){
      setTimeout(function () {
          nextSquence();
        }, 1000);

    }
}else{
gameOver();
var gameOversound = new Audio("./sounds/wrong.mp3");
gameOversound.play();
  }

}

function nextSquence(){
level1();
patternCheck = [];
var randomNumber = Math.floor(Math.random()*4);
var newSquenceColor = colorArray[randomNumber];
newPattern.push(newSquenceColor);
$("#"+newSquenceColor).fadeOut(250).fadeIn(250);
var sound = new Audio("./sounds/"+newSquenceColor+".mp3");
sound.play();
}

function playSound (color){
  var audio = new Audio("./sounds/"+color+".mp3");
  audio.play();
}

function gameOver(){
$("body").addClass("game-over");
setTimeout(function(){
  $("body").removeClass("game-over");
},200);
$("h1").text("Game over press any key to restart");
level = 0;
newPattern=[];
started=false;
}
