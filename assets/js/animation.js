/* Certifique-se de que a biblioteca p5.js está sendo carregada corretamente */
let particles = [];
let time = 0;
const opt = {
  particles: 500,
  noiseScale: 0.009,
  angle: Math.PI / 180 * -90,
  h1: Math.random() * 360,
  h2: Math.random() * 360,
  s1: Math.random() * 70 + 20,
  s2: Math.random() * 70 + 20,
  l1: Math.random() * 50 + 30,
  l2: Math.random() * 50 + 30,
  strokeWeight: 1.2,
  tail: 82,
};

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('animation-container'); // Coloca o canvas dentro do container
  for (let i = 0; i < opt.particles; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
  strokeWeight(opt.strokeWeight);
}

function draw() {
  time++;
  background(0, 100 - opt.tail);

  for (let p of particles) {
    p.update();
    p.render();
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.lx = x;
    this.ly = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.hueSemen = Math.random();
    this.hue = this.hueSemen > 0.5 ? 20 + opt.h1 : 20 + opt.h2;
    this.sat = this.hueSemen > 0.5 ? opt.s1 : opt.s2;
    this.light = this.hueSemen > 0.5 ? opt.l1 : opt.l2;
    this.maxSpeed = this.hueSemen > 0.5 ? 3 : 2;
  }

  randomize() {
    this.hueSemen = Math.random();
    this.hue = this.hueSemen > 0.5 ? 20 + opt.h1 : 20 + opt.h2;
    this.sat = this.hueSemen > 0.5 ? opt.s1 : opt.s2;
    this.light = this.hueSemen > 0.5 ? opt.l1 : opt.l2;
    this.maxSpeed = this.hueSemen > 0.5 ? 3 : 2;
  }

  update() {
    this.follow();

    this.vx += this.ax;
    this.vy += this.ay;

    const p = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    const a = Math.atan2(this.vy, this.vx);
    const m = Math.min(this.maxSpeed, p);
    this.vx = cos(a) * m;
    this.vy = sin(a) * m;

    this.x += this.vx;
    this.y += this.vy;
    this.ax = 0;
    this.ay = 0;

    this.edges();
  }

  follow() {
    const angle = noise(this.x * opt.noiseScale, this.y * opt.noiseScale, time * opt.noiseScale) * PI * 0.5 + opt.angle;

    this.ax += cos(angle);
    this.ay += sin(angle);
  }

  updatePrev() {
    this.lx = this.x;
    this.ly = this.y;
  }

  edges() {
    if (this.x < 0) {
      this.x = width;
      this.updatePrev();
    }
    if (this.x > width) {
      this.x = 0;
      this.updatePrev();
    }
    if (this.y < 0) {
      this.y = height;
      this.updatePrev();
    }
    if (this.y > height) {
      this.y = 0;
      this.updatePrev();
    }
  }

  render() {
    stroke(`hsla(${this.hue}, ${this.sat}%, ${this.light}%, .5)`);
    line(this.x, this.y, this.lx, this.ly);
    this.updatePrev();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
