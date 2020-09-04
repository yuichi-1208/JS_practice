function mailTemplate(){
  console.log("matsumotoさん,今日のランチはうどんにしましょう。");
}
// console.log(mailTemplate);
mailTemplate();

function text(){
  console.log("あなたは素晴らしい人間ですね！");
}
text();

function weather(){
  console.log("晴れ");
  console.log("曇り");
  console.log("雨");
}
weather();

function mailTemplate(name){
  console.log(`${name}さん,今日のランチはうどんにしましょう。`);
}
mailTemplate("鈴木");
mailTemplate();//わざと因数を定義しない

function mailTemplate2(name, menu){
  console.log(`${name}さん,今日のランチは${menu}にしましょう。`);
}
mailTemplate2("鈴木","ラーメン");
mailTemplate2("鈴木");

function introduce(name, old){
  console.log(`私の名前は${name}です。年齢は${old}です。`)
}
// introduce("大山",20);
const name = "大山";
const old = 20;
introduce(name,old);
