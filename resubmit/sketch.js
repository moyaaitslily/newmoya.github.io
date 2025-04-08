function setup() {
    let canvas = createCanvas(300, 100);
    canvas.parent("sketch-container");
    background("#FFF0E5");
  }
  
  function draw() {
    fill("#D6A77A");
    noStroke();
    ellipse(frameCount % width, 50, 30);
  }
  