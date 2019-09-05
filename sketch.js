
let increment = 2;
let x = increment;
let flowers = [];
let angle;

let slider;
let phiButton;
let sqrtTwoButton;
let oneOverPiButton;
let halfButton;
let thirdButton;
let fourthButton;
let fifthButton;
let sixthButton;

function setup() {
  createCanvas(600, 600);
  frameRate(60);

  angleInc = 0.0000001; //TWO_PI * (0.6);
  angle = 0;

  turn = select('#turn');
  slider = createSlider(0, 20, 0);
  phiButton = createButton('&#966');
  phiButton.mousePressed(setPhi);
  sqrtTwoButton = createButton('&#8730;2');
  sqrtTwoButton.mousePressed(setSqrtTwo);
  oneOverPiButton = createButton('1/&#960');
  oneOverPiButton.mousePressed(setOneOverPi);

  halfButton = createButton('&#189');
  halfButton.mousePressed(setHalf);

  thirdButton = createButton('&#8531');
  thirdButton.mousePressed(setThird);

  fourthButton = createButton('&#188');
  fourthButton.mousePressed(setFourth);

  fifthButton = createButton('&#8533');
  fifthButton.mousePressed(setFifth);

  sixthButton = createButton('&#8537');
  sixthButton.mousePressed(setSixth);

  slider.position(100,100);
  phiButton.position(100, slider.y + 60);
  oneOverPiButton.position(100, phiButton.y + 30)
  sqrtTwoButton.position(100, oneOverPiButton.y + 30);
  halfButton.position(100, sqrtTwoButton.y + 30);
  thirdButton.position(100, halfButton.y + 30);
  fourthButton.position(100, thirdButton.y + 30);
  fifthButton.position(100, fourthButton.y + 30);
  sixthButton.position(100, fifthButton.y + 30);



  while(flowers.length < 100) {
    if (flowers.length == 0)
      x = 20;
    flowers.push(new Flower(x, 0));
    x += increment;
  }
}

function setPhi() {
  angle = (1+sqrt(5)) / 2;
}

function setSqrtTwo() {
  angle = sqrt(2);
}

function setOneOverPi() {
  angle = 1/PI;
}

function setHalf() {
  angle = 1/2;
}

function setThird() {
  angle = 1/3;
}

function setFourth() {
  angle = 1/4;
}

function setFifth() {
  angle = 1/5;
}

function setSixth() {
  angle = 1/6;
}

function Flower(x, y) {
  this.x = x;
  this.y = y;

  this.show = function(angle) {
    rotate(angle);
    strokeWeight(2);
    stroke(255,92,0, 120);
    fill(255,255,0,230);
    ellipse(this.x, this.y, 20);
  }
}

function draw() {
  background(255);

  turn.html(Number((angle).toFixed(3)));

  translate(width/2, height/2);
  // rectMode(CENTER);
  // fill(0);
  // rect(0,0,10,10);

  for (flower of flowers) {
    flower.show(TWO_PI * angle);
    angle += map(slider.value(), 0,10, 0.0, 0.000001);
  }
}
