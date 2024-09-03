let i = 0;
if (i == 0) {
}
function funcA(a) {
  a(9);
  //   return a;
}
funcA(function (x) {
  console.log("callback function", x);
});

for (let j = 0; j < 5; j++) {}

"hello world".substring(0, 5);
[1, 2, 3].concat(4);
[1, 2, 3][0];
const obja = { a: "A" };
obja.a;

[1, 2, 3].forEach(function (x, i, arr) {
  console.log(x, i, arr);
});

console.log(
  [1, 2, 3].map(function (x) {
    return x * 2;
  })
);
