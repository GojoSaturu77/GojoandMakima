// 1-misol
// let a =8;
// let b= 3;
// let S= a*b;
// let p=2 * (a+b);
// console.log(S);
// console.log(p);

// 2-misol
// let nor = +prompt("sonlar");
// if (nor == 0) {
//     alert(10); 
// } else if (nor % 2 === 0) {
//     alert(nor + 1); 
// } else {
//     alert(nor - 2); 
// }


// 3-misol
// let a = +prompt("son kirit");
// let b = +prompt("son kirit");
// if (a > b) {
//     alert(a,b),
//     alert(b);
    
    
// } else  {
//      alert(b,a), 
//     alert(a);
// } 
// 4-misol
// let k = +prompt("son")
//     switch (k) {
//         case 1:
//             alert("Yomon");
//             break;
//         case 2:
//             alert("Qoniqarsiz");
//             break;
//         case 3:
//             alert("Qoniqarli");
//             break;
//         case 4:
//             alert("Yaxshi");
//             break;
//         case 5:
//             alert("A'lo");
//             break;
//         default:
//             alert("1-5 gacha bo'lgan son kiriting");
//             break;
//     }

// 5-misol

// let Oy = +prompt("oy raqamioni kkirit");
// switch (Oy) {
//     case 1:
//         alert("Qish")
//         break
//     case 2:
//         alert("Qish")
//         break
//     case 3:
//         alert("Bahor")
//         break
//     case 4:
//         alert("Bahor")
//         break
//     case 5:
//         alert("Bahor")
//         break
//     case 6:
//         alert("Yoz")
//         break
//     case 7:
//         alert("Yoz")
//         break
//     case 8:
//         alert("Yoz")
//         break
//     case 9:
//         alert("Kuz")
//         break
//     case 10:
//             alert("Kuz")
//             break
//     case 11:
//         alert("Kuz")
//         break
//     case 12:
//         alert("Qish")
//         break    
// }

// 6-misol
// let k = +prompt("son kiriting");
// let n = +prompt("2-sonni kiriting");

// for (let i = 0; i < n; i++) 
// {console.log(k)}
  

// 7-misol

// let k = +prompt(" natural son kiriting:");

// if (k <= 0 || isNaN(k)) {
//     console.log("Iltimos, musbat natural son kiriting.");
// } else {
//     let toqSonlar = [];
//     for (let i = 1; toqSonlar.length < k; i += 2) {
//         toqSonlar.push(i);
//     }

//     console.log("Dastlabki " + k + " ta toq son:");
//     for (let i = 0; i < toqSonlar.length; i++) {
//        alert(toqSonlar[i])
//     }
// }

// 8-misol
// let n = +prompt(" elementlar soni kirit:");
// let massiv = [];
// for (let i = 0; i < n; i++) {
//   let element = +prompt((i + 1) + "-element kirit:");
//   massiv.push(element);
// }
// console.log("Massiv elementlari teskari tartibda:");
// for (let i = n - 1; i >= 0; i--) {
//   console.log(massiv[i]);
// }

// 9-misol
// function kattaSonniChiqar() {
//     let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
//     let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));
  
//     if (son1 > son2) {
//       alert("Katta son: " + son1);
//     } else if (son2 > son1) {
//       alert("Katta son: " + son2);
//     } else {
//       alert("Sonlar teng");
//     }
//   }
  


// 10-misol
// function juftYokiToq() {
//     let son = parseInt(prompt("Sonni kiriting:"));
  
//     if (son % 2 === 0) {
//       alert(son + " juft son.");
//     } else {
//       alert(son + " toq son.");
//     }
//   }
  
//   juftYokiToq()