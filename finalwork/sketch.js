// 最終課題を制作しよう
let x , y,vx, vy;
const g = 0; // 重力加速度
const vyMax = 30; ;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = windowWidth - 60;
  y = windowHeight - 95;
  vx = 2;
  vy = 1;
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
function draw(){
  background(102, 204, 255);
  let c = color(230, 172, 0);
  fill(c);
  noStroke();
  rect(0, windowHeight-50, windowWidth, 50);
  image(img, x , y,60,50);
  y += vy;
  vy += g;
  vy = constrain(vy, -vyMax, vyMax);
  if(y < 0 || y > windowHeight-100){ vy = 1 * vy; }//どうやったら地面で跳ね返る？
  y = constrain(y, 0, height);
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown(SHIFT)){y -= 5 }
}


let img;
function preload() {
  img = loadImage('eto_remake_inoshishi.png');
}
