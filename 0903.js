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
// function findWordIndex(targetWord) {
//   let result = [];
//   "hello world".split("").forEach(function (word, index) {
//     if (word == targetWord) {
//       result.push(index);
//       // result = result.concat(index)
//     }
//   });
//   return result;
// }
// console.log(findWordIndex("d"));
// // 練習2 "have a nice day" 把所有文字第一個字變成大寫
// console.log(
//   "have a nice day"
//     .split(" ")
//     .map(function (word) {
//       return word[0].toUpperCase() + word.substring(1);
//     })
//     .join(" ")
// );
// let needUpper = true;
// console.log(
//   "have a nice day"
//     .split("")
//     .map(function (word) {
//       if (needUpper) {
//         needUpper = false;
//         return word.toUpperCase();
//       }
//       if (word == " ") {
//         needUpper = true;
//       }
//       return word;
//     })
//     .join("")
// );
// "a".toUpperCase();
// "hello world".split(" ");

// function funcA(a) {
//   return a;
// }
// const funcA = (a) => a;
// const funcA = (a, b) => {
//   return a + b;
// };
// const funcA = (a, b) => a + b;

// function forEach(arr, doFn) {
//   for (let i = 0; i < arr.length; i++) {
//     doFn(arr[i], i, arr);
//   }
// }

// forEach([1, 2, 3], function (x, i, arr) {
//   console.log(x, i, arr);
// });

console.log(
  Array(10)
    .fill("")
    .map((x, i) => i)
    .filter(function (x) {
      return false;
    })
);
const datas = [
  {
    id: 1,
    first_name: "佳穎",
    last_name: "陳",
    phone: "0987654321",
    birthday: "1985-03-15",
    gender: "女",
  },
  {
    id: 2,
    first_name: "宇軒",
    last_name: "林",
    phone: "0912345678",
    birthday: "1992-07-22",
    gender: "男",
  },
  {
    id: 3,
    first_name: "雅婷",
    last_name: "黃",
    phone: "0923456789",
    birthday: "1988-11-30",
    gender: "女",
  },
  {
    id: 4,
    first_name: "冠宇",
    last_name: "張",
    phone: "0934567890",
    birthday: "1995-01-05",
    gender: "男",
  },
  {
    id: 5,
    first_name: "芳瑜",
    last_name: "李",
    phone: "0945678901",
    birthday: "1982-09-18",
    gender: "女",
  },
  {
    id: 6,
    first_name: "柏翰",
    last_name: "王",
    phone: "0956789012",
    birthday: "1998-06-27",
    gender: "男",
  },
  {
    id: 7,
    first_name: "怡君",
    last_name: "吳",
    phone: "0967890123",
    birthday: "1990-04-11",
    gender: "女",
  },
  {
    id: 8,
    first_name: "志偉",
    last_name: "劉",
    phone: "0978901234",
    birthday: "1987-12-03",
    gender: "男",
  },
  {
    id: 9,
    first_name: "淑芬",
    last_name: "蔡",
    phone: "0989012345",
    birthday: "1993-08-20",
    gender: "女",
  },
  {
    id: 10,
    first_name: "俊傑",
    last_name: "楊",
    phone: "0990123456",
    birthday: "1997-02-14",
    gender: "男",
  },
];
