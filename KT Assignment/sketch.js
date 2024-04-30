
var col = {
  r: 0,
  g: 0,
  b: 0,
}

let r = 10;
let angle = 0;
let font;
let points;[];

function preload() {
  font= loadFont('assets/PetitFormalScript-Regular.ttf')
}
function setup() {
  createCanvas(400, 400);
  col.r = random(0, 255);
  col.g = random(0, 255);
  col.b = random(0, 255);
  noStroke();
  fill(col.r, col.g, col.b);
  textSize(20);
  textFont(font);
  
  points = font.textToPoints("Zaira Torres",10,360,200,{
    sampleFactor:0.2,
    simplifyThreshold:0
  }); 
print(points);

  angleMode(DEGREES);
}


function draw() {
  background(0);
  let born_year = 1995;
  let current_year = year();
  let age_years = (current_year - 1) - born_year;
  text(age_years + " years old", 20,20);
  
  let birth_date = new Date(1995,8,28);
  let time_passed_ms = new Date() - birth_date

  let days_passed = time_passed_ms / (24*60*60*1000);
  let truncated_days_passed = nf(days_passed, 0, 5
    );
  text(truncated_days_passed + " days passed since birth", 2, 100)

  for (let i = 0; i < points.length; i++) {
    ellipse(points[i].x+r*sin(angle + i*25),points[i].y,5,5);
    }

    angle += 10;
  
}

function mousePressed() {
  col.r= random(0,255);
  col.g= random(0,255);
  col.b= random(0,255);
  fill(col.r, col.g, col.b);
}