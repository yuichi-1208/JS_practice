let points = [60,100,80,80,70,80];
// function get_achievement(points){
//   if()
// }

// let sum = 0
// sum = sum + points[0];
// sum = sum + points[1];
// sum = sum + points[2];
// sum = sum + points[3];
// sum = sum + points[4];
// sum = sum + points[5];

let sum = 0;
let number = points.length;
for(let i=0; i<number; i++){
    sum = sum + points[i];
}

// これだと、point[0]の値しか処理に影響しない、1以降は処理に関係ない。
// for(let i=0; i<number; i++){
//   if(point[i]>=60){
//     return "合格"
//   }else{
//     return "不合格"
//   }
// }

let judge = "合格";
for(let i=0; i<number; i++){
  if(points[i]<60){
    judge = "不合格";
    break;
  }

}


// function get_achievement(x,y,z){
function get_achievement(points){

  let average = sum/(number*100)

  if( average >= 0.8){
    return "A";
  }else if (average >= 0.6){
    return "B";
  }else if (average >= 0.4){
    return "C";
  }else{
    return "D";
  }
}

// function get_achievement(){
//
//   // let sum = x + y + z;
//   // let average = sum/number*100
//   // let average = number*100*0.8;
//
//   if( sum >= number*100*0.8){
//     return "A";
//   }else if (sum >= number*100*0.6){
//     return "B";
//   }else if (sum >= number*100*0.4){
//     return "C";
//   }else{
//     return "D";
//   }
// }

function get_pass_or_failure(points){

  if(judge = "合格"){
    return "合格";
  }else{
    return "不合格"
  }
}

// console.log(get_achievement(points));

function judgement(points){
  let achievement = get_achievement(points);
  let pass_or_failure = get_pass_or_failure(points);
  return `あなたの成績は${achievement}です。${pass_or_failure}です！`;
}

console.log(judgement(points));
