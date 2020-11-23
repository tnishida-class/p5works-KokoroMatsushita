// 最終課題を制作しよう
let x,y,vx,vy,a,b;
let animate
let count;//ポイント1：関数の外で変数を宣言する
let cycle;
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
  //fill(0);
  count = 0;
  cycle = 100;
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

  fill(230, 172, 0);
  textSize(25);
  text("ENTER:GameStart  SHIFT:Jump",windowWidth/2+50,30);

  let c = color(230, 172, 0);
  fill(c);
  noStroke();
  rect(0, windowHeight-50, windowWidth, 50);

if(animate){count = (count + 1) % cycle}
  if(count == 1 && 50 && 99){
  for(let i = 0; i < 4; i++){
  h.push({ x: 0, y: random(0, windowHeight - 80) });
  }
  }
  for(let i = 0; i < h.length; i++){
  const s = h[i];
  fill(255, 214, 51);
  star(s.x, s.y, 20);
  if(animate) s.x += 5;
  if(dist(x+60,y+50,s.x,s.y)<40){animate=false;}
  if(dist(x+60,y+50,s.x,s.y)<40){
  fill(230, 172, 0);
  text("Press SPACE key to reset",windowWidth/2,windowHeight/2)
  }
  }

  image(img, x , y,120,100);
  if(animate)y += 2
  if(animate) vy += g;
  vy = constrain(vy, -vyMax, vyMax);
  if(y < 0 || y > windowHeight-200){ vy = 1 * vy; }
  y = constrain(y, 0, height-130);
  if(animate) x -=2
  x = constrain(x,0,width);

  if(x == 0){animate=false}
  if(x == 0){
  fill(255);
  textSize(50);
  textFont("serif");
  text("Mission Cleared!!", windowWidth/2, windowHeight/2-15);}
  if(x == 0){
  fill(255);
  textSize(20);
  textFont("serif");
  text("Press SPACE key to reset", windowWidth/2, windowHeight/2+15);}
  }

function keyPressed(){
  if(keyCode == SHIFT){
    if(animate){y -= 50}}
  if(keyCode == ENTER){animate = !animate;}
  if(key == " "){reset();}
}

let img;
function preload() {
  img = loadImage('eto_remake_inoshishi.png');
}
