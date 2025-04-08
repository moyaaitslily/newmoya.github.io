let bubbles = []; // Array to store bubble objects
let particles = []; // Array for explosion particles
let score = 0;
let scoreElement;
let restartButton;

function setup() {
    createCanvas(900, 600);

    // Create Score Display
    scoreElement = createDiv(`Score: ${score}`);
    scoreElement.style('font-size', '20px');
    scoreElement.position(400, 600);

    // Create Restart Button
    restartButton = createButton('Restart');
    restartButton.position(10,10);
    restartButton.mousePressed(resetGame);

    // Spawn initial bubbles
    for (let i = 0; i < 5; i++) {
        bubbles.push(new Bubble(random(width), random(height, height + 100)));
    }
}

function draw() {
    background(255, 209, 220); // Light blue background

    // Update and display bubbles
    for (let i = bubbles.length - 1; i >= 0; i--) {
        bubbles[i].update();
        bubbles[i].display();

        // Remove bubbles that move off-screen
        if (bubbles[i].isOffScreen()) {
            bubbles.splice(i, 1);
        }
    }

    // Update and display particles
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].display();

        // Remove finished particles
        if (particles[i].isFinished()) {
            particles.splice(i, 1);
        }
    }

    // Randomly spawn new bubbles
    if (random(1) < 0.02) {
        bubbles.push(new Bubble(random(width), height));
    }
}

// Handle mouse clicks
function mousePressed() {
    for (let i = bubbles.length - 1; i >= 0; i--) {
        if (bubbles[i].contains(mouseX, mouseY)) {
            let bubbleColor = bubbles[i].color;
            
            // Create explosion effect with particles
            for (let j = 0; j < 10; j++) {
                particles.push(new Particle(bubbles[i].x, bubbles[i].y, bubbleColor));
            }

            // Remove bubble from array
            bubbles.splice(i, 1);
            score += 10;
            scoreElement.html(`Score: ${score}`);
            break;
        }
    }
}

// Restart the game
function resetGame() {
    score = 0;
    bubbles = [];
    particles = [];
    scoreElement.html(`Score: ${score}`);

    // Respawn bubbles
    for (let i = 0; i < 5; i++) {
        bubbles.push(new Bubble(random(width), random(height, height + 100)));
    }
}

// Bubble class
class Bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(20, 50);
        this.vy = random(-1, -0.5);
        this.color = color(random(100, 255), random(100, 255), random(100, 255), 150);
    }

    update() {
        this.y += this.vy;
    }

    display() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }

    contains(px, py) {
        return dist(px, py, this.x, this.y) < this.size / 2;
    }

    isOffScreen() {
        return this.y < -this.size;
    }
}

// Particle class for explosion effect
class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.vx = random(-1, 1);
        this.vy = random(-1, 1);
        this.size = random(3, 7);
        this.color = color;
        this.life = 255; // Fades out over time
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= 5;
    }

    display() {
        noStroke();
        fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.life);
        ellipse(this.x, this.y, this.size);
    }

    isFinished() {
        return this.life <= 0;
    }
}
