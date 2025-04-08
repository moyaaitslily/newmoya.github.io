var x = 0;
var y = 0;

function setup(){
    createCanvas(720,480);
}

function draw(){
    background('#AA44FF'); // automatic semicolon insertion
    rect(x,y,80,80,);
    x = x + 2;
    x = x % 700
    y = y + 3
    y = y % 100
}