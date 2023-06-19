screen_width = 0;
screen_height = 0;
draw_apple = "";
speak_data = "";
to_number = "";
x= 0;
y= 0;

SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();

function preLoad() {
    draw_apple = loadImage('apple.png');
  }     

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
 content = event.results[0][0].transcript;
document.getElementById("status").innerHTML = "Started drawing apple " + content; 
var to_number = Number(content);
  if(Number.isInteger(to_number))
   {      
     draw_apple == "set"
     for(var i = 1; i <= to_number; i++)
     {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50)
     }
   }
   else {
    document.getElementById("status").innerHTML = "The speech has not recognised a number" + content; 
  }
}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function createCanvas(screen_width, screen_height) {
Canvas.position(0, 150);
}