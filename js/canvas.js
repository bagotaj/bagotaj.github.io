function createCanvas() {
  const result = document.getElementById('canvas');
  result.width = window.innerWidth;
  result.height = window.innerHeight;
  return result;
}

function followWindowSize(canvas, window) {
  canvas.width = result.width;
  canvas.height = result.height;
}

const canvas = createCanvas();
const ctx = canvas.getContext('2d');

const circleNumber = 100;
const circleradius = 1;
const circlecolor = '#1C3341';
const circlecolors = ['#1C3341', '#008773', '#6BB983'];

let points = [];

for (let i = 0; i < circleNumber; i++) {
  const randomNumber = Math.floor(Math.random() * 3);

  const point = {
    x: innerWidth * Math.random(),
    y: innerHeight * Math.random(),
    dx: Math.random() - 0.5,
    dy: Math.random() - 0.5,
    color: circlecolors[randomNumber],
  };

  points.push(point);
}

// Draw points

class Point {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }

  update() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

var movedPoints = [];

for (var i = 0; i < circleNumber; i++) {
  movedPoints.push(
    new Point(
      points[i].x,
      points[i].y,
      points[i].dx,
      points[i].dy,
      circleradius
    )
  );
}

// Draw circles from points

class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function animation() {
  requestAnimationFrame(animation);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleNumber; i++) {
    movedPoints[i].update();
  }

  for (var i = 0; i < circleNumber; i++) {
    let newCircle = new Circle(
      movedPoints[i].x,
      movedPoints[i].y,
      circleradius,
      points[i].color
    );
    newCircle.draw();
  }
}

animation();
