var redBrick = {
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    xSpeed: 2,
    ySpeed: 1,
    colour: 'red',
    draw: function(){
        fill( this.colour);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        
        if(this.x < 0 || this.x > width - this.w){ 
           this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed += -1;
        }
    }
};

var blueBrick = {
    x: 40,
    y: 50, 
    w: 30,
    h: 30,
    xSpeed: 4,
    ySpeed: 1,
    colour: 'blue',
    draw: function(){
        fill( this.colour);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        
        if(this.x < 0| this.x > width){
           this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){ 
            this.ySpeed += -1;
        }
    }
}

var whitebrick = {
    x: 20,
    y: 15, 
    w: 30,
    h: 30,
    xSpeed:0.5,
    ySpeed: 3,
    colour: 'white',
    draw: function(){
        fill( this.colour);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        
        if(this.x < 0| this.x > width){
           this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){ 
            this.ySpeed += -1;
        }
    }
}

// redBrick.x++ returns current value then increments
// ++redBrick.x increments value and then returns

function setup(){
    createCanvas(720,280);
}

function draw(){
    background('black');
    redBrick.draw();
    redBrick.move();
    blueBrick.draw();
    blueBrick.move();
    whitebrick.draw();
    whitebrick.move();
}