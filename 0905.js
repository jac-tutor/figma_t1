// const j = 20
// let i = 10
// if (true) {
//   console.log(i)
// }
// function funcA() {}
// const funcB = () => {}
// const funcC = (p1, p2) => p1 + p2
// for (let x = 0; x < 10; x++) {
//   console.log(x)
// }
const arr = [1, 2, 3, 4, 5, 6]
const obj = { a: "A", b: "B" }
arr[0] // 1
obj.a // "A"
// arr.forEach((x) => console.log(x))
console.log(arr.filter((x) => x < 3))
const forEach = (arr, callbackFn) => {
  for (let i = 0; i < arr.length; i++) {
    callbackFn(arr[i], i, arr)
  }
}
const filter = (arr, callbackFn) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (callbackFn(arr[i], i, arr)) {
      result.push(arr[i])
    }
  }
  return result
}
const map = (arr, callbackFn) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(callbackFn(arr[i], i, arr))
  }
  return result
}
// console.log(map(arr, (x) => x * 2))
console.log(
  arr.reduce((result, val) => {
    return result + val
  }, 0)
)
const reduce = (arr, callbackFn, initialValue) => {
  let result = initialValue
  for (let i = 0; i < arr.length; i++) {
    result = callbackFn(result, arr[i], i, arr)
  }
  return result
}
console.log(reduce(arr, (result, val) => result + val, 0))

const timer = setInterval(() => {
  console.log("interval")
  clearInterval(timer)
}, 1000)
setTimeout(() => {
  console.log("timeout ")
}, 2000)

// 把班上學生按照年齡分組
// {
//   30: [{...}],
//   33: [{...}, {...}]
// }
