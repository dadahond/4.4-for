// PARAMETRLI TAKRORLANUVCHILAR
// 1
// let n = prompt("n sonini kiriting");
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }
// 2
// let n = prompt("n sonini kiriting");
// for (let i = n; i >= 1; i--) {
//   console.log(i);
// }
// 3
// let n = prompt("n sonini kiriting");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);
// 4
// let n = prompt("n sonini kiriting");
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// 5
// let n = prompt("n sonini kiriting");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//     sum += i;
//   }
// }
// console.log(sum);
// 6
// let n = prompt("n sonini kiriting");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//     sum += i;
//   }
// }
// console.log(sum);
// 7
// let n = prompt("n sonini kiriting");
// let sum = 0;
// let counter = 0;
// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     counter += 1;
//     sum += i;
//   }
// }
// console.log(`soni ${counter}`);
// console.log(`yig'indisi ${sum}`);
// 8
// let n = prompt("n sonini kiriting");
// let tub = true;

// if (n < 2) {
//   tub = false;
// } else {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       tub = false;
//       break;
//     }
//   }
// }

// if (tub) {
//   console.log("ha");
// } else {
//   console.log("yo'q");
// }

// FOR 1
// let k = prompt("k sonini kiriting");
// let n = prompt("n sonini kiriting (n>0)");
// for (let i = 0; i < n; i++) {
//   console.log(k);
// }
// FOR 2
// let a = prompt("a sonini kiriting");
// let b = prompt("b sonini kiriting (a<b)");
// for (let i = a; i <= b; i++) {
//   console.log(i);
// }
// console.log(`soni ${b - a + 1}`);
// FOR 3
// let a = prompt("a sonini kiriting");
// let b = prompt("b sonini kiriting (a<b)");
// for (let i = b - 1; i > a; i--) {
//   console.log(i);
// }
// console.log(`soni ${b - a - 1}`);
// FOR 4
// let konfet = prompt("1kg konfet narxini kiriting");
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}kg ${i * konfet} so'm`);
// }
// FOR 5
// let konfet = prompt("1kg konfet narxini kiriting");
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i * 100}gr ${(konfet * i) / 10} so'm`);
// }
// FOR 6
// let konfet = prompt("1kg konfet narxini kiriting");
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i / 10 + 1}kg = ${konfet * (i / 10 + 1)} so'm`);
// }
// FOR 7
// let a = prompt("a sonini kiriting");
// let b = prompt("b sonini kiriting (a<b)");
// let m = b - a + 1;
// // m bu a dan b gacha bo'lgan raqamlar soni
// console.log(((Number(a) + Number(b)) / 2) * m);

// FOR 8
// let a = prompt("a sonini kiriting");
// let b = prompt("b sonini kiriting (a<b)");
// let n = 1;
// for (let i = a; i <= b; i++) {
//   n *= i;
// }
// console.log(`ko'paytmasi ${n} ga teng`);
// FOR 9
// let a = prompt("a sonini kiriting");
// let b = prompt("b sonini kiriting (a<b)");
// let n = 1;
// for (let i = a; i <= b; i++) {
//   n += i * i;
// }
// console.log(`kvadratlarining yig'indisi ${n - 1} ga teng`);
// FOR 10
// let n = prompt("n sonini kiriting (n>0)");
// let s = 0;
// for (let i = 1; i <= n; i++) {
//   s += 1 / i;
// }
// console.log(`S = ${s}`);
// FOR 11
// let n = prompt("n sonini kiriting (n>0)");
// let s = 1;
// for (let i = 1; i <= n; i++) {
//   s += i * i;
// }
// console.log(`S = ${s - 2}`);
// FOR 12
// let n = prompt("n sonini kiriting (n>0)");
// let s = 1;
// for (let i = 1; i <= n; i++) {
//   s *= 1 + i / 10;
// }
// console.log(`S = ${s}`);
