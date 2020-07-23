
var wall;

function setup() {
  createCanvas(800,800);
  wall = createSprite(45,75,5,80)
  wall1 = createSprite(85,115,80,5)
  wall2 = createSprite(125,75,5,80)
  wall3 = createSprite(85,35,80,5)
hr = hour();
mn = minute();
sc = second();

  angleMode(DEGREES);

}

function draw() {
  background(255,255,255);
  text("blue:seconds",50,50);
text("red:minutes",50,80);
text("yellow:hours",50,110);



  ellipse(CENTER);
  ellipse(400,400,10,10)
  fill("black");
  ellipse(400,400,800,800);
  
  

  hrAnlge = map(hr,0,60,0,360)
  stroke("yellow");
  strokeWeight(25);
  line(400,400,100,3000);
  

  mnAnlge = map(mn,0,60,0,360)
  stroke("red");
  strokeWeight(25);
  line(400,400,100,250);

  scAnlge = map(sc,0,60,0,360)
  stroke("blue");
  strokeWeight(20);
  line(400,400,600,250);

  drawSprites();
}