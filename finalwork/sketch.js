// 最終課題を制作しよう
let x,y,vx,vy,a,b;
let animate
const g = 2; // 重力加速度
const vyMax = 200;

function setup(){
  createCanvas(windowWidth, windowHeight);
  reset();
  //x = windowWidth - 60;
  //y = windowHeight/2;
  //vx = 2;
  //vy = 1;
  //a = 0;
  //animate = false;
}

function reset(){
  x = windowWidth - 60;
  y = windowHeight/2;
  vx = 2;
  vy = 1;
  a = 0;
  animate = false;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

let h =[];

function draw(){
  background(102, 204, 255);
  let c = color(230, 172, 0);
  fill(c);
  noStroke();
  rect(0, windowHeight-50, windowWidth, 50);

  for(let i = 0; i<4; i++)
  {
   h.push(random(0,windowHeight-110));
  }
  for(let i = 0; i< 4; i++){
   fill(255)
   rect(a,h[i],30,20)}
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
