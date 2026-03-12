// let num = prompt("Ededi daxil edin")
// let result = 1;
// for (let i = 1; i <= num; i++){
//     result=result*i
// }
// console.log(result);

// let num = prompt("Ededi daxil edin")
// let result = true;
// for (let i = 3; i <= num; i++){
//      (num%i ==0) {
//          console.log("sade eded deyil");
//          result = false
//          break
//      } {
//          console.log("sade ededdi");
//          break
//      }   
// } 

let num = prompt("Ededi daxil edin")
let num1 = num.length;
let sum = 0;
for (let index = 0; index < num1; index++) {
  sum=sum+num1**3;
    
}
if (sum == num){
    console.log("eded armstrong ededdi");
}
else{
    console.log("eded armstrong eded deyil");
}
