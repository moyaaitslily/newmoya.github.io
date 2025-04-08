//Base on p5.js Snake Game tutorial: https://p5js.org/examples/games-snake/
//Added features from W3Schools: UI elements, event listeners, and colour picker

let snake;
let food;
let gridSize= 20;
let direction;
let score= 0;
let gameOver = false;

function setup(){
    createCanvas(400, 400);
    frameRate(7);
    snake = new Snake();
    food = createFood();
    direction = createVector(1,0);

    // Adding a button (from W3Schools) to restart the game
    let restartButton = createButton("Restart Game");
    restartButton.position(10, 10);
    restartButton.mousePressed(() => resetGame());
}

function draw(){
    if (!gameOver){
        background(0);
        snake.move();
        snake.checkCollision();
        snake.display();
        
        fill("#8A00C4")
        rect(food.x, food.y, gridSize, gridSize);

        fill(254);
        textSize(16);
        text("Score: " + score, 320, 30);
    }   else{
        fill(254);
        textSize(32);
        text("Game Over:(", 120, 200);
    }
}

function keyPressed(){
    if (keyCode === UP_ARROW && direction.y === 0){
        direction.set(0, -1);
    } else if (keyCode === DOWN_ARROW && direction.y === 0){
        direction.set(0, 1);
    } else if (keyCode === LEFT_ARROW && direction.x === 0){
        direction.set(-1, 0);
    } else if (keyCode === RIGHT_ARROW && direction.x === 0){
        direction.set(1, 0);
    } else if (key === 'r' || key === 'R') {
        console.log("Restart triggered via 'r' or 'R' key");
      resetGame();
    }
}

function createFood(){
    let cols = floor(width / gridSize);
    let rows = floor(height / gridSize);
    return createVector(floor(random(cols))* gridSize, floor(random(rows)) * gridSize);
}

function resetGame() {
    score = 0;
    gameOver = false;
    snake = new Snake();
    food = createFood();
    direction.set(1, 0);
  }

  class Snake {
    constructor() {
      this.body = [createVector(0, 0)];
    }
    
    move() {
      let head = this.body[this.body.length - 1].copy();
      head.add(direction.copy().mult(gridSize));
      
      if (head.equals(food)) {
        score++;
        food = createFood();
      } else {
        this.body.shift();
      }
      
      this.body.push(head);
    }
    
    checkCollision() {
      let head = this.body[this.body.length - 1];
      if (head.x < 0 || head.y < 0 || head.x >= width || head.y >= height) {
        gameOver = true;
      }
      for (let i = 0; i < this.body.length - 1; i++) {
        if (this.body[i].equals(head)) {
          gameOver = true;
        }
      }
    }
    
    display() {
      fill(0, 255, 0);
      for (let segment of this.body) {
        rect(segment.x, segment.y, gridSize, gridSize);
      }
    }
  }