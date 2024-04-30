
let r = 25;
let angle = 0;
let font2,points;[]
function preload() {
  font2= loadFont("assets/Cormorant-Italic-VariableFont_wght.ttf")
}

function setup() {
  createCanvas(400, 400);
  textFont(font2);
  textSize(20);
}

function draw() {
  background(220);
  points = font2.textToPoints("ZT",50,200,300)

for(let i=0; i<points.length;i++){
ellipse(points[i].x+r*sin(angle + i*25),points[i].y,10,10);
}
 
print(points)
}
