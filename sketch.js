
var step = 5;
var col = {
  r: 0,
  g: 0,
  b: 0,
}

//let r = 1;
let angle = 0;
let font;
let points;[];
let points2;[];

var rad = 1

function preload() {
  
  font= loadFont('assets/SpaceMono-Regular.ttf')
  ///font= loadFont('assets/SpaceMono-Bold.ttf')
  ///font= loadFont('assets/NanumGothicCoding-Bold.ttf')
}

function setup() {
  createCanvas(800, 800);
  col.r = random(0, 255);
  col.g = random(0, 255);
  col.b = random(0, 255);
  noStroke();
  fill(col.r, col.g, col.b);
  textSize(15);
  textFont(font);
  
  
  points = font.textToPoints("Z A I R A",50,200,70 ,{
    sampleFactor:0.6,
    simplifyThreshold:0
  });

  points2 = font.textToPoints("T O R R E S",70,300,50 ,{
    sampleFactor:1,
    simplifyThreshold:0
  });
   
print(points);

  angleMode(DEGREES);
}


function draw() {
  background(0);


  ///time function
  x = pow(1.37973, step);
  let born_year = 1995;
  let current_year = year();
  let age_years = (current_year - 1) - born_year;
  text(age_years + " years old", 50,30);
  
  let birth_date = new Date(1995,8,28);
  let time_passed_ms = new Date() - birth_date
  

  let days_passed = time_passed_ms / (24*60*60*1000);
  ///console.log(days_passed,x);
  if (x >=100){
    step=5,
    x=0
  }
  let truncated_days_passed = nf(days_passed, 0, x
    );
  text(truncated_days_passed+"",50,60);
  text("days passed since birth", 50, 80);


  ///animate text
  r = pow(1.8,rad);
  for (let i = 0; i < points.length; i++) {
    ellipse(points[i].x+r*sin(angle + i*15),points[i].y,5,5);
    }

    angle += 5;
    
    ///Torres
    for (let i = 0; i < points2.length; i++) {
      ellipse(points2[i].x+r*sin(angle + i*8),points2[i].y,.9,5);
      }
  
      ///angle += 3;
      print(r);
      if (r >=359){
        rad=0,
        r=0
      }
}

function mousePressed() {
  col.r= random(0,255);
  col.g= random(0,255);
  col.b= random(0,255);
  fill(col.r, col.g, col.b);
}

function mouseClicked() {
step = step + 1;
rad = rad +1;

}