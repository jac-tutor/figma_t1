// let a = 10
// const b = 20
// let c = a + b

// if (a > 0) {
//     console.log("a > 0")
// } else {
//     console.log("a <= 0")
// }

// function funcA() { }
// function funcB(p1) { console.log(p1) }
// function funcC(p1, p2) { return p1 + p2 }
// console.log(funcB(1))
// console.log(funcC(1, 2))

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// 快速註解快捷鍵 ctrl(cmd) + /

// p1 變數交換
// let a = 10;
// let b = 20;
// let c = a;
// a = b;
// b = c;
// console.log(a, b);

// p2 設計一個方法，有兩個參數，把比較大的參數回傳
// function max(p1, p2) {
//   if (p1 > p2) {
//     return p1;
//   } else {
//     return p2;
//   }
// }
// console.log(max(10, 20));

// p3 設計一個計算BMI的方法 weight / (height * height)
// function countBMI(w, h) {
//   h = h / 100;
//   return w / (h * h);
// }
// console.log(countBMI(80, 170));

// p4 設計一個方法判斷某年份是不是閏年
// 閏年判斷，該年分是否能被400整除，或者能被4整除，但是不能被100整除
// 2000 % 4 == 0 代表 2000 可以被 4 整除
// function isLeapYear(year) {
//   if (year % 400 == 0) return true;
//   if (year % 4 === 0 && year % 100 != 0) return true;
//   return false;
// }
// console.log(isLeapYear(2023) ? "是閏年" : "不是閏年");

// p5 設計一個方法，有三個參數，判斷三個長度能否成為一個三角形
// 三角形特性，兩邊相加大於第三邊
// function isTriangle(a, b, c) {
//   return a + b > c && b + c > a && c + a > b;
// }
// console.log(isTriangle(3, 4, 5));

// p6 請print出一個99乘法表
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i}*${j}=${i * j}`);
  }
}

// console.log("a" + 10 + "b");
// const a = 10;
// console.log(`a${a}b`);
