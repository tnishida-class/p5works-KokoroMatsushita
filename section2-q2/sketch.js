// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke()

  for(let i = 1; i < 8; i++){
    for(let j = 1; j < 8; j++){
      console.log(i,j);
      rect(size*i,size*j,size,size);
      noFill();
      if((i+j)%2==0){
        fill(196);
      }
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}
