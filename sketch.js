let s = 1;
let x=0.1,y=0,z=0,dx,dy,dz,dt=0.01,a=10,c=8/3,b=28;
let points = [];

function setup(){
  createCanvas(window.innerWidth,window.innerHeight,WEBGL);
  points.push([x,y,z]);
  colorMode(HSB);
}

function draw(){
  background(0);
  scale(s);
  rotateX(-mouseY * 0.01);
  rotateY(-mouseX * 0.01);
  dx = (a*(y-x))*dt;
  dy = ((x*(b-z))-y)*dt;
  dz = ((x*y)-(c*z))*dt;
  let color = 0;
  noFill();
  beginShape();
  for(var i=0;i<points.length;i++){
    color += 0.2;
    stroke(color,255,255,255);
    curveVertex(points[i][0],points[i][1],points[i][2]);
    if(color > 255){
      color = 0;
    }
  }
  endShape();
  x += dx;
  y += dy;
  z += dz;
  points.push([x,y,z]);
}

function keyPressed(){
  if(key === 'w' || keyCode === UP_ARROW){
    s += 0.5;
  }else if (key === 's' || keyCode === DOWN_ARROW) {
    s -= 0.5;
  }
}
