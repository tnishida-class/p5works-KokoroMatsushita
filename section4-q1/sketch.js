// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;//ポイント1：関数の外で変数を宣言する
let cycle;
let size;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 100;
  size = 10
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  ellipse(width / 2, height / 2, size);
  if(0<size<50){size+=1}//なぜか永遠に大きくなる
}
