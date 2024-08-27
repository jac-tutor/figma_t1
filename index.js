console.log("hello aaaa!")

// 基礎類別
// 1
// "9"
// true // false // boolean
// undefined
// null
// [1, 2, 3] // array // [1, 2, 3][0]
// { a: 1, b: 2 } // object // { a: 1, b: 2 }.a // { a: 1, b: 2 }["a"]

// 宣告
var a = 1
var b // function
let c = "c" // {}
const d = "d" // PI = 3.14

/**
 * A function that performs some operations and returns the sum of two parameters.
 *
 * @param {*} param1 - The first parameter to be added.
 * @param {*} param2 - The second parameter to be added.
 * @return {*} The sum of param1 and param2.
 */
function funcA(param1, param2) {
  if (true) {
    var aa = "a"
    let bb = "b"
    const cc = "c"
    // cc = "dd" // error
    // console.log(cc)
    bb = "dd" // "dd"
    bb = 1 + 2 // 3
    bb = true // true
    bb = aa // "a"
    bb = function () {
      console.log("hello bb")
    } // bb() // hello bb
  }
  return param1 + param2
}
const funcB = function () {}
// run function
funcB()

// return 回傳
const funAresult = funcA(1, 2)
console.log(funAresult) // 3

// if判斷式
// else 可選 // else if 可選
// ==, >, <, >=, <=, !=, ===, !==
// && and, || or // ! not
if (2 != 3 || 2 < 0) {
  // ...
}
// else if (false) {
//   // ..
// } else if (false) {
//   // ..
// } else {
//   // ..
// }
