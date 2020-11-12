// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;//ポイント1：関数の外で変数を宣言する
let cycle;
let size;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 100;//countは0～99。99までいったら0に戻る
  size = 10;
    console.log (size);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  console.log (size);  // BLANK[1]
  console.log (size);
  if(count<50){size=size+1}//sizeで定義するとバグるのでcountで50の時が最大になるようにする
  else if(50<count){size=size-1};
ellipse(width / 2, height / 2, size);

}
