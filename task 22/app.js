// 1
// let user = {
//     name: "Ali",
//     gender: "male",
//     birthday: "12.09.2006"
// }
// console.log(user.birthday);

// 2
// user.age = 19;
// delete user.birthday;
// console.log(user);

// let user = {
//     name: "Ali",
//     gender: "male",
//     // birthday: "12.09.2006",
//     age: 19,

//     setAge(newAge){
//         this.age=newAge;
//     },

// getYearsBeforeRetirement(){
//     let retirementAge = 65
//     return retirementAge - this.age
// }
// }
// user.setAge(30)
// console.log(user.age)
// console.log(user.getYearsBeforeRetirement())

// 4
let client = {
    fullName: "Ali Nasirli",
    creditLimit: 7000,
    balans: 2500,
    percentOfMinPayment: 16
}
getBalance() {
    if (this.balance>=0) {
        return `Balansiniz ${this.balance}`
    }
    else{
        return `Borcunuz ${Math.abs(this.balance)}`
    }
}
