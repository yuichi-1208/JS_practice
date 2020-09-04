// const hasStudentCard = true;
// if (hasStudentCard === true){
//   console.log("学割適用");
// }

// const hasStudentCard = false;
// if (hasStudentCard === true){
//   console.log("学割適用");
// }else {
//   console.log("学生証がないため割引できません");
// }

const userAge = 39;
const hasStudentCard = false;
const minAge = 3;
const maxAge = 25;
if(hasStudentCard === true){
  console.log("学割適用");
}else if (userAge >=minAge && userAge <=maxAge){
  console.log("学割適用");
}else{
  console.log("条件に合わないので割引できません");
}
