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
    bb = "dd"
    bb = 1 + 2
    bb = true
    bb = aa // "a"
    bb = function () {
      console.log("hello bb")
    } // bb()
    // cc = "dd"
    // console.log(cc)
  }
  return param1 + param2
}

const funAresult = funcA(1, 2)
console.log(funAresult)
