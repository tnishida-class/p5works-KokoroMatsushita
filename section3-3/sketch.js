// テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      //console.log(i + "年はうるう年です");
      console.log(i + "年は365日です");
    }
    else{
      //console.log(i + "年はうるう年ではありません");
      console.log(i + "年は365日です");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);//(y÷４＝０）かつ（ｙ÷100＝0でないとき）、または（ｙ÷400＝0）のとき
}

function daysInYear(y){
  // BLANK[1]
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < 13; i++){
    count += daysInMonth(y, i);//「count += n」 は「count を n 増やす」の意。：countを一ヶ月の日数分増やす

  }
  return count + d;
}

function dayOfWeek(y, m, d){
  let count = 0;
  for(let i=)
//}

//function dayOfWeekAsString(dow){
  //const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  //return a[dow];
//}
