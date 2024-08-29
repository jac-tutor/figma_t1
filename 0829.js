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
let a = 10;
let b = 20;
let c = a;
a = b;
b = c;
console.log(a, b);

// p2 設計一個方法，有兩個參數，把比較大的參數回傳
function max(p1, p2) {
  if (p1 > p2) {
    return p1;
  } else {
    return p2;
  }
}
console.log(max(10, 20));

// 設計一個計算BMI的方法 weight / (height * height)
