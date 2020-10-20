// 小手調べ
function setup(){
  createCanvas(110,110);
  for(let i = 10; i < 60; i=i+10){
stroke(255,0,0);
noFill();
  ellipse(50,50,i)  // BLANK[1]
  }
  for(let j=60; j<110; j=j+10){
    stroke(0,0,255);
    noFill();
    ellipse(50,50,j)
  }
}
