// console.log("hello aaaa!")

// 基礎類別
// 1
// "9"
// true // false // boolean
// undefined
// null
// [1, 2, 3] // array // [1, 2, 3][0]
// { a: 1, b: 2 } // object // { a: 1, b: 2 }.a // { a: 1, b: 2 }["a"]

// 宣告
// var a = 1
// var b // function
// let c = "c" // {}
// const d = "d" // PI = 3.14

/**
 * A function that performs some operations and returns the sum of two parameters.
 *
 * @param {*} param1 - The first parameter to be added.
 * @param {*} param2 - The second parameter to be added.
 * @return {*} The sum of param1 and param2.
 */
// function funcA(param1, param2) {
//   if (true) {
//     var aa = "a"
//     let bb = "b"
//     const cc = "c"
//     // cc = "dd" // error
//     // console.log(cc)
//     bb = "dd" // "dd"
//     bb = 1 + 2 // 3
//     bb = true // true
//     bb = aa // "a"
//     bb = function () {
//       console.log("hello bb")
//     } // bb() // hello bb
//   }
//   return param1 + param2
// }
// // return 回傳
// const funAresult = funcA(1, 2)
// console.log(funAresult) // 3

// const funcB = function () {}
// // run function
// funcB()

// if判斷式
// else 可選 // else if 可選
// ==, >, <, >=, <=, !=, ===, !==
// && and, || or // ! not
// true && true // true
// true && false // false
// true || false // true
// false || false // false
// !false // true
// if (2 != 3 || 2 < 0) {
//   // ...
// }
// else if (false) {
//   // ..
// } else if (false) {
//   // ..
// } else {
//   // ..
// }

// let a = 10
// if (a > 10) {
//   console.log("a > 10")
// } else if (a < 10) {
//   console.log("a < 10")
// } else {
//   console.log("a == 10")
// }

// console.log(1 == "1") // true
// console.log(1 === "1") // false
// console.log(1 != "1") // false
// console.log(1 !== "1") // true

// console.log(true && true) // true
// console.log(true && false) // false
// console.log(true || true) // true
// console.log(true || false) // true
// console.log(false || false) // false

// console.log(!false) // true
// console.log(!true) // false

// + - * / %
// console.log(1 + 2) // 3
// console.log(2 - 1) // 1
// let a = 1
// a = a + 1
// console.log(a) // 2
// a += 1
// a++
// console.log(a)
// console.log(3 % 2) // 1
// console.log("a" + "b") // ab
// console.log(0 + "b") // 0b
// console.log(960 + "110") //

// // for
// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }
// console.log("end for")

let sum = 0
function double(num) {
  return num * 2
}
// console.log(double(5))
for (let i = 1; i <= 10; i++) {
  sum = sum + double(i)
}
console.log(sum)
