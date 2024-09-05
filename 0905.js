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
// const arr = [1, 2, 3, 4, 5, 6]
// const obj = { a: "A", b: "B" }
// arr[0] // 1
// obj.a // "A"
// // arr.forEach((x) => console.log(x))
// console.log(arr.filter((x) => x < 3))
// const forEach = (arr, callbackFn) => {
//   for (let i = 0; i < arr.length; i++) {
//     callbackFn(arr[i], i, arr)
//   }
// }
// const filter = (arr, callbackFn) => {
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     if (callbackFn(arr[i], i, arr)) {
//       result.push(arr[i])
//     }
//   }
//   return result
// }
// const map = (arr, callbackFn) => {
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callbackFn(arr[i], i, arr))
//   }
//   return result
// }
// // console.log(map(arr, (x) => x * 2))
// console.log(
//   arr.reduce((result, val) => {
//     return result + val
//   }, 0)
// )
// const reduce = (arr, callbackFn, initialValue) => {
//   let result = initialValue
//   for (let i = 0; i < arr.length; i++) {
//     result = callbackFn(result, arr[i], i, arr)
//   }
//   return result
// }
// console.log(reduce(arr, (result, val) => result + val, 0))

// const timer = setInterval(() => {
//   console.log("interval")
//   clearInterval(timer)
// }, 1000)
// setTimeout(() => {
//   console.log("timeout")
// }, 2000)

// 把班上學生按照年齡分組
// {
//   30: [{...}],
//   33: [{...}, {...}]
// }
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
]

const newStudents = datas.map((x) => {
  return {
    // id: x.id,
    // first_name: x.first_name,
    // last_name: x.last_name,
    // phone: x.phone,
    // birthday: x.birthday,
    // gender: x.gender,
    ...x,
    get age() {
      return new Date().getFullYear() - x.birthday.substring(0, 4)
    },
    get full_name() {
      return x.last_name + x.first_name
    },
    //   ...x,
  }
})

// console.log(
//   newStudents.reduce((result, x) => {
//     if (!result[x.age]) result[x.age] = []
//     result[x.age].push(x)
//     return result
//   }, {})
// )
// {}[28] // undefined
// {}[28] = [] // {28: []}
// {}[28].push({}) //  {28: [{...}]}
// 把班上同學按照年齡層分組
// {
//   "0~10": [{...}],
//   "11~20": [{...}, {...}]
// }
// console.log([1, 2, 3, 4, 5, 6].includes(6)) // true
// console.log(newStudents.some((x) => x.age > 30))
// console.log([1, 2, 3, 4, 5, 6].some((x) => x > 5))
// console.log([1, 2, 3, 4, 5, 6].every((x) => x > 5))
// console.log([1, 2, 3, 4, 5, 6].reverse())

// // p2 "hello world" 倒過來排列
// console.log("hello world".split("").reverse().join(""))

setTimeout(() => {
  console.log("timeout")
})
console.log("hello world")
new Promise((resolve, reject) => {
  resolve(1)
}).then((x) => console.log(x))

fetch("https://data.ntpc.gov.tw/api/datasets/308dcd75-6434-45bc-a95f-584da4fed251/json", {})
  .then((res) => res.json())
  .then((res) => console.log(res))
