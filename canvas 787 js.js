var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(45,100,150,100);
grd.addColorStop(0,"black");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,1240,980);

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(45,50,150,100);
grd.addColorStop(0,"black");
grd.addColorStop(0.1,"red");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(50,50,,);

xample, the code for drawing a triangle would look something like this:

function draw() {
  var canvas = document.getElementById('myCanvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(100,75);
    ctx.lineTo(100,25);
    ctx.fill();
  }
}

fillRect(x, y, width, height)
----->Draws a filled rectangle.
strokeRect(x, y, width, height)
----->Draws a rectangular outline.
clearRect(x, y, width, height)
----->Clears the specified rectangular area, making it fully transparent.


 function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(25,25);
    ctx.lineTo(105,25);
    ctx.lineTo(25,105);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(125,125);
    ctx.lineTo(125,45);
    ctx.lineTo(45,125);
    ctx.closePath();
    ctx.stroke();
  }
}

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="#000000";
ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(100,200);
    ctx.lineTo(30,500);
    ctx.closePath();
    ctx.stroke();


     function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(25,25);
    ctx.lineTo(105,25);
    ctx.lineTo(25,105);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(125,125);
    ctx.lineTo(125,45);
    ctx.lineTo(45,125);
    ctx.closePath();
    ctx.stroke();
  }
}

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="#000000";
ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(100,200);
    ctx.lineTo(30,500);
    ctx.closePath();
    ctx.stroke();