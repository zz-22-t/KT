
var col = {
  r: 0,
  g: 0,
  b: 0,
}

let r = 1;
let angle = 0;
let font;
let points;[];
let points2;[];

function preload() {
  font= loadFont('assets/NanumGothicCoding-Bold.ttf')
}
function setup() {
  createCanvas(400, 400);
  col.r = random(0, 255);
  col.g = random(0, 255);
  col.b = random(0, 255);
  noStroke();
  fill(col.r, col.g, col.b);
  textSize(10);
  textFont(font);
  
  points = font.textToPoints("Z A I R A",50,200,70 ,{
    sampleFactor:0.6,
    simplifyThreshold:0
  });

  points2 = font.textToPoints("T O R R E S",50,350,50 ,{
    sampleFactor:1,
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
  text(age_years + " years old", 50,30);
  
  let birth_date = new Date(1995,8,28);
  let time_passed_ms = new Date() - birth_date

  let days_passed = time_passed_ms / (24*60*60*1000);
  let truncated_days_passed = nf(days_passed, 0, 5
    );
  text(truncated_days_passed + " days passed since birth", 50, 60)

  for (let i = 0; i < points.length; i++) {
    ellipse(points[i].x+r*sin(angle + i*55),points[i].y,5,5);
    }

    angle += 3;
    
    ///Torres
    for (let i = 0; i < points2.length; i++) {
      ellipse(points2[i].x+r*sin(angle + i*55),points2[i].y,.9,5);
      }
  
      angle += 3;
}

function mousePressed() {
  col.r= random(0,255);
  col.g= random(0,255);
  col.b= random(0,255);
  fill(col.r, col.g, col.b);
}