console.log("hello aaaa!")

// 1
// "9"
// true
// undefined
// null
// [1, 2, 3]
// { a: 1, b: 2 }
var a = 1
var b // function
let c = "c" // {}
const d = "d"

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

const funAresult = funcA(1, 2)
console.log(funAresult)
