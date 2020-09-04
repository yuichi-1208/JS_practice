// function scope_test01(x){
//   return x + 6;
// }
// console.log(scope_test01(4));
// console.log(scope_test01(x));


// let x = 3;
// function scope_test02(){
//   console.log(x);
//   console.log(y);
// }
// scope_test02();
// let y = 3;

// {
//   let block = 5;
//   console.log(block);
// }
// console.log(block);

// グローバルスコープと関数スコープの融合
// let x= -6;
// function scope_test01(x){
//   return x + 6;
// }
// console.log(scope_test01(4));
// console.log(scope_test01(x));

//ブロックスコープとブロックスコープの融合
// {
//   let judge = "safe";
//   console.log(judge);
//   {
//     let judge = "out";
//     console.log(judge);
//   }
//   console.log(judge);
// }
// console.log(judge);

// {
//   let judge = "safe";
//   let check = "safe";
//   console.log(judge);
//   console.log(check);
//   {
//     let judge = "out";
//     console.log(judge);
//     console.log(check);
//   }
// }

let barrier;
{
  let data = {name:"shibata",passward: "hogehoge"};
  barrier = function(){
    return data;
  };
}

console.log(barrier());
let invasion = barrier();
invasion.passward = "fugafuga";
console.log(barrier());

let test;
test = function(){
  console.log("関数を実行しました");
};
test();
