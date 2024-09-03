// let i = 0;
// if (i == 0) {
// }
// function funcA(a) {
//   a(9);
//   //   return a;
// }
// funcA(function (x) {
//   console.log("callback function", x);
// });

// for (let j = 0; j < 5; j++) {}

// "hello world".substring(0, 5);
// [1, 2, 3].concat(4);
// [1, 2, 3][0];
// const obja = { a: "A" };
// obja.a;

// [1, 2, 3].forEach(function (x, i, arr) {
//   console.log(x, i, arr);
// });

// console.log(
//   [1, 2, 3].map(function (x) {
//     return x * 2;
//   })
// );

// 練習1 "hello world"找出o的所有索引值
// 練習2 "gave a nice day" 把所有文字第一個字變成大寫
"a".toUpperCase();
"hello world".split(" ");

// function funcA(a) {
//   return a;
// }
// const funcA = (a) => a;
// const funcA = (a, b) => {
//   return a + b;
// };
// const funcA = (a, b) => a + b;

function forEach(arr, doFn) {
  for (let i = 0; i < arr.length; i++) {
    doFn(arr[i], i, arr);
  }
}

forEach([1, 2, 3], function (x, i, arr) {
  console.log(x, i, arr);
});
