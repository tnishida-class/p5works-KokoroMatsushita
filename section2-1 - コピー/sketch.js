// テキスト「繰り返し」
function setup() {
  createCanvas(100,100);
  background(196)
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
      console.log(i, j); // 補足： i,j の変化がわかりやすくなるように入れています
      rect(i * 10, j * 10, 5, 5);
    }
  }
  }

// for 文を使うと、同じプログラムを以下のように書くことができます
// function setup() {
//   createCanvas(100,100);
//   fill(0);
//   for(let i = 0; i < 5; i++){
//     rect(i * 20, i * 20, 20, 20);
//   }
// }
