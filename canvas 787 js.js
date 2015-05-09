var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, 800, 600);

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var gradienti = ctx.createLinearGradient(160, 360, 200, 140);
gradienti.addColorStop(0, "#000000");
gradienti.addColorStop(0.1,"#191919");
gradienti.addColorStop(0.2,"#333333");
gradienti.addColorStop(0.3,"#4D4D4D");
gradienti.addColorStop(0.4,"#666666");
gradienti.addColorStop(0.5,"#808080");
gradienti.addColorStop(0.6,"#999999");
gradienti.addColorStop(0.7,"#B2B2B2");
gradienti.addColorStop(0.8,"#CCCCCC");
gradienti.addColorStop(0.9,"#E6E6E6");
gradienti.addColorStop(1, "#FFFFFF");
ctx.fillStyle = gradienti;



var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.moveTo(200, 485);
ctx.lineTo(400, 100);
ctx.lineTo(600, 485);
ctx.closePath();
ctx.fill();


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = gradienti;
ctx.beginPath();
ctx.moveTo(250, 445);
ctx.lineTo(400, 150);
ctx.lineTo(550, 445);
ctx.closePath();
ctx.fill();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FFFFFF";
ctx.beginPath();
ctx.moveTo(150, 0);
ctx.lineTo(400, 150);
ctx.lineTo(0, 0);
ctx.closePath();
ctx.fill();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var gradientix = ctx.createLinearGradient(400, 150, 800, 550);
gradientix.addColorStop(0, "white");
gradientix.addColorStop(0.1, "red");
gradientix.addColorStop(0.2,"orange");
gradientix.addColorStop(0.4,"yellow");
gradientix.addColorStop(0.6,"green");
gradientix.addColorStop(0.8,"blue");
gradientix.addColorStop(0.9,"purple");
ctx.fillStyle = gradientix;



var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = gradientix;
ctx.beginPath();
ctx.moveTo(400, 150);
ctx.lineTo(800, 300);
ctx.lineTo(800, 550);
ctx.closePath();
ctx.fill();



var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = gradientix;
ctx.beginPath();
ctx.moveTo(400, 150);
ctx.lineTo(800, 300);
ctx.lineTo(800, 550);
ctx.closePath();
ctx.fill();





/*var gradienx=ctx.createRadialGradient(75,100,20,90,60,100);
gradienx.addColorStop(0,"#000000");
gradienx.addColorStop(1,"#FFFFFF");
ctx.fillStyle=gradienx;
ctx.fillRect(10, 10, 100, 100);
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillRect(10,10,0,100);*/