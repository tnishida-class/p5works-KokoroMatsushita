// 最終課題を制作しよう
let x , y ;
function setup(){
  createCanvas(windowWidth, windowHeight);
  x = windowWidth-60;
  y = windowHeight-95
}

function draw(){
  background(102, 204, 255);
  fill(0)
  strokeWeight(3)
  line(0,windowHeight-50,windowWidth,windowHeight-50)
  fill(255);
  textSize(100);
  text("よけろ！",windowWidth /2　,windowHeight/2)
  image(img2, 0, 0)
  image(img, x , y,60,50);
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown(UP_ARROW)){ y -= 5 ; }
  if(keyIsDown(DOWN_ARROW)){ y += 5 ; }
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

let img;
function preload() {
  img = loadImage('eto_remake_inoshishi.png');
}

let img2;
function preload() {
  img = loadImage('kuri.png');
}
