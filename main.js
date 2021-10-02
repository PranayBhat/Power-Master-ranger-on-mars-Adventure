function Start(){document.getElementById("start_button").style.display="none";
document.getElementById("stop_button").style.display="inline-block";
document.getElementById("PowerRangers").style.display="inline-block";}

canvas = document.getElementById('PowerRangers');
ctx = canvas.getContext("2d"); 
PowerRangers_width = 100; 
PowerRangers_height = 90;
PowerRangers_x = 10; 
PowerRangers_y = 10;
background_image = "Mars.jpg";
PowerRangers_image = "PowerRangers.png";
function add() { background_imgTag = new Image(); //defining a variable with a new image 
background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
background_imgTag.src = background_image; // load image 

PowerRangers_imgTag = new Image(); //defining a variable with a new image
PowerRangers_imgTag.onload = uploadPowerRangers; // setting a function, onloading this variable 
PowerRangers_imgTag.src = PowerRangers_image; // load image
}
window.addEventListener("keydown", my_keydown); 
function my_keydown(e) 
{
keyPressed = e.keyCode;
console.log(keyPressed); 
if(keyPressed == '38') 
{ up();
console.log("up");
} 
if(keyPressed == '40')
{ down();
console.log("down");
} if(keyPressed == '37')
{ left();
console.log("left"); }
if(keyPressed == '39')
{ right();
console.log("right");
}}
function up() { if(PowerRangers_y >=0) { PowerRangers_y = PowerRangers_y - 10; console.log("When up arrow is pressed, x = " + PowerRangers_x + " | y = " +PowerRangers_y);
uploadBackground(); 
uploadPowerRangers();
}}
function down()
{
if(PowerRangers_y <=420)
{
PowerRangers_y =PowerRangers_y+ 10;
console.log("When down arrow is pressed, x = " + PowerRangers_x + " | y = " +PowerRangers_y);
uploadBackground();
uploadPowerRangers();}}  
function uploadBackground() 
{ ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

 } function uploadPowerRangers()
  { ctx.drawImage(PowerRangers_imgTag, PowerRangers_x, PowerRangers_y, PowerRangers_width, PowerRangers_height);
 }
 function left() { if(PowerRangers_x >= 0 ) 
    { PowerRangers_x =PowerRangers_x - 10; console.log("When left arrow is pressed, x = " + PowerRangers_x + " | y = " +PowerRangers_y);
     uploadBackground(); uploadPowerRangers(); }}
    function right()
     { if(PowerRangers_x <= 410)
         { PowerRangers_x =PowerRangers_x + 10; console.log("When right arrow is pressed, x = " + PowerRangers_x + " | y = " +PowerRangers_y); 
         uploadBackground(); 
         uploadPowerRangers(); } }

         function Stop(){document.getElementById("stop_button").style.display="none";
         document.getElementById("start_button").style.display="inline-block";
         document.getElementById("firstPowerRangers").style.display="none";}