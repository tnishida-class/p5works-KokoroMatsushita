// テキスト「アニメーション」
let x, y, vx, vy;
const g = 1; // 重力加速度(ここをいじると重力の強さが変わる)
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 20, 20);
  x += vx;
  y += vy;

  // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
  vy = constrain(vy + g, -vyMax, vyMax);
//↑
//vy=vy+g;
//if(vy>vyMax)vy=vyMax;
//if(vy<vyMax)vy=-vyMax;
//これがないとどんどん早くなってしまうので、上限を設けている

  // 端の処理パターン (1) 反対側から出てくる
  // if(x > width){ x = 0; }
  // else if(x < 0){ x = width; }
  // if(y > height){ y = 0; }
  // if(y < 0){ y = height; }

　// 端の処理パターン (2) 跳ね返る
  if(x < 0 || x > width){ vx = -1 * vx; }
  if(y > height){ vy = -0.9 * vy; }//（vy=-1はバウンドによって高さが変わらない。vy＝－1.1はバウンドするたびに高く跳ねるようになる）
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
