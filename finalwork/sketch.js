// 最終課題を制作しよう
let x,y,vx,vy,a,b;
let animate
const g = 2; // 重力加速度
const vyMax = 200;

function setup(){
  createCanvas(windowWidth, windowHeight);
  reset();
}

function reset(){
  x = windowWidth - 60;
  y = windowHeight/2;
  vx = 2;
  vy = 1;
  a = 0;
  animate = false;
  fill(0);
  //regularPolygon(10,250,50,40)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

let h =[];


function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function draw(){
  background(51, 102, 255);
  let c = color(230, 172, 0);
  fill(c);
  noStroke();
  rect(0, windowHeight-50, windowWidth, 50);

  for(let i = 0; i<4; i++)
  {
   h.push(random(0,windowHeight-110));
  }
  for(let i = 0; i< 3; i++){
   fill(255, 219, 77)
   star(a,h[i],20)
  // if(dist(x-60,y-50,a,h[i])<60){reset();}
 }
//   rect(a,h[i],30,20)}
   if(animate) a +=5

  image(img, x , y,120,100);
  if(animate)y += 2
  if(animate) vy += g;
  vy = constrain(vy, -vyMax, vyMax);
  if(y < 0 || y > windowHeight-200){ vy = 1 * vy; }
  y = constrain(y, 0, height-130);
  if(animate) x -=2
  x = constrain(x,0,width);
}

function keyPressed(){
  if(keyCode == SHIFT){y -= 50}
  if(keyCode == ENTER){animate = !animate;}
  if(key == " "){reset();}
}

let img;
function preload() {
  img = loadImage('eto_remake_inoshishi.png');
}
