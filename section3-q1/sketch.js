// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",20,30,0,300);
}

function balloon(t,x,y,bc,tc){
  let w = textWidth(t);
  let h = textAscent() + textDescent(); //文字列の高さを表している（下に突き出すか上に突き出すか）
  let p = 2;
  fill(bc);
  rect(0, 0, w + p * 2, h + p * 2);
  fill(tc);
  text(t, p, h + p);
}
