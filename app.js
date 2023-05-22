

// メイン部分
let alertString;

// 作成した関数を呼び出し、変数へ格納
alertString = addString("WebCamp");

//変数の中身をアラートで表示する
alert(alertString);

// 作成した関数
function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}