let circles = [];

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('sketch-holder');
  loadData(); // Load from localStorage
}

function draw() {
  background(240);

  for (let circle of circles) {
    circle.x += circle.speedX;
    circle.y += circle.speedY;

    // Bounce off walls
    if (circle.x + circle.radius > width || circle.x - circle.radius < 0) {
      circle.speedX *= -1;
    }
    if (circle.y + circle.radius > height || circle.y - circle.radius < 0) {
      circle.speedY *= -1;
    }

    fill(circle.color[0], circle.color[1], circle.color[2]);
    noStroke();
    ellipse(circle.x, circle.y, circle.radius * 2);
  }
}

// Load data from localStorage or generate new
function loadData() {
  let saved = localStorage.getItem("circleData");
  if (saved) {
    circles = JSON.parse(saved);
  } else {
    generateRandomData();
  }
}

// Generate and save new data
function saveData() {
  generateRandomData();
  localStorage.setItem("circleData", JSON.stringify(circles));
}

// Create random circle data
function generateRandomData() {
  circles = [];
  for (let i = 0; i < 3; i++) {
    circles.push({
      x: random(50, width - 50),
      y: random(50, height - 50),
      speedX: random(-2, 2),
      speedY: random(-2, 2),
      radius: random(15, 35),
      color: [random(255), random(255), random(255)]
    });
  }
}