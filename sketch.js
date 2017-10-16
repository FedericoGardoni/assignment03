var r=50;
var x=0;
var y=0;
var d=85;


function setup() {
  createCanvas(500,500);
 // background(230,0,0);
  angleMode(DEGREES);
frameRate(1);
}


function draw() {
var colore1 = random()*255;
var colore2 = random()*255;
var colore3 = random()*255;
var colore4 = random()*255;
var colore5 = random()*255;
var colore6 = random()*255;

noStroke();
  //Parte sopra 
  for (var x=0;x<=500;x+=d) {
    for (var y=0;y<=500;y+=d){
      fill (colore1,colore2,255);
   beginShape();
      vertex(x,y);
     vertex(x+r*sin(60),y+r*cos(60));
      vertex(x,y+2*r*cos(60));
     vertex(x-r*sin(60),y+r*cos(60));
      endShape(); 
      
fill (colore3,255,colore4);
    beginShape();
      vertex(x-r*sin(60),y+r*cos(60));
     vertex(x,y+2*r*cos(60));
    vertex(x,y+d);
    vertex(x-r*sin(60),y+d+r*cos(60));
      endShape();
      
  fill (255,colore5,colore6);
    beginShape();
     vertex(x,y+2*r*cos(60));
     vertex(x+r*sin(60),y+r*cos(60));
     vertex(x+r*sin(60),y+d+r*cos(60));
     vertex(x,y+d);
      endShape();
    }
    }
    
}