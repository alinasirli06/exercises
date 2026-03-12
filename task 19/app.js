// 1
// let id = prompt('Idnizi daxil edin');
// switch (id) {
//     case "1":
//         alert("Available 10 pcs.")
//         break;
   
//     case "2":
//         alert('Available 256 pcs.');
//         break;

//     case "3":
//         alert("Available 53 pcs.");
//         break;
    
//     case "4":
//         alert("There are 3 available.");
//         break;

//     default:
//         alert("Out of stock");
//         break;
// }

// 2
// let month = Number(prompt("Ayın nömrəsini daxil edin"));
// switch (month) {
//     case 1:
//         console.log("Yanvar");
//         break;

//     case 2:
//         console.log("Fevral");
//         break;
    
//     case 3:
//         console.log("Mart");
//         break;
        
//     case 4:
//         console.log("Aprel");
//         break;

//     case 5:
//         console.log("May");
//         break;

//     case 6:
//         console.log("Iyun");
//         break;

//     case 7:
//         console.log("Iyul");
//         break;

//     case 8:
//         console.log("Avqust");
//         break;

//     case 9:
//         console.log("Sentyabr");
//         break;

//     case 10:
//         console.log("Oktyabr");
//         break;

//     case 11:
//         console.log("Noyabr");
//         break;

//     case 12:
//         console.log("Dekabr");
//         break;
//     default:
//         console.log("Düzgün ay nömrəsi daxil edin");
//         break;
// }

// 3
// let date = prompt("Tarixi il,ay və gün sıralamasında müvafiq olaraq daxil edin");
// let parts = date.split(".");
// let year = Number(parts [0]);
// let month = parts [1];
// let day = Number(parts [2]);
// let monthNames = [
//     "","Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"];
//     if (month < 1 || month >12 || day <1 || day > 31) {
//         console.log("Düzgün tarix aralığı daxil edin");
//     }
//     else if (year [-1] == 1 || year [-1] == 2 || year [-1] == 5) { 
//         console.log(`${day} ${monthNames[month]} ${year}-ci il `);
//     }
//     else console.log(`${day} ${monthNames[month]} ${year}-cu il `);
 
// 19
// let a = prompt("Ədəd daxil edin");
// console.log(a < 15);
// console.log(a !=20);
// console.log(a*2 <= 20);
// console.log(a >= 10 && a < 20);
// console.log(a < 19);

// 20
// let age = prompt("Yaşınızı daxil edin");
// if (age >=18) {
//     alert("Access granted");
//     }
// else alert("Access denied");

// 21

// 22
let year = Number(prompt("İli daxil edin"));
if (year%4===0) {
    console.log("İl uzun ildir");
}
else console.log("il uzun il deyil");
