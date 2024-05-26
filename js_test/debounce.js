// // Debouncing is a programming technique used to limit the rate at which a function can fire.
// function debounce(func, wait) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       const res = func.apply(this, args);
//       console.log(res);
//     }, wait);
//   };
// }

// function sum(a, b, c) {
//   return a + b + c;
// }
// const resFunc = debounce(sum, 500);
// resFunc(1, 2, 3);

//
// let inter;
// function debounce(func, time) {
//   clearInterval(inter);
//   return function (data) {
//     setTimeout(() => {
//       const res = func(data);
//       console.log(res);
//     }, time);
//   };
// }

// function add(num) {
//   return num + 1;
// }
// debounce(add, 1000)(1);

// when you do that o nthe promise  .
let timeoutItem;
function debounce1(callback, time) {
  clearTimeout(timeoutItem);
  return function (...arg) {
    return new Promise((resolve, reject) => {
      timeoutItem = setTimeout(() => {
        const res = callback(...arg);
        resolve(res);
      }, time);
    });
  };
}

// when you just set timeout , you just need to wait
// let timeoutItem;
// function debounce1(callback, time) {
//   clearTimeout(timeoutItem);
//   return function (...arg) {
//     timeoutItem = setTimeout(() => {
//       const res = callback(...arg);
//       console.log(res);
//     }, time);
//   };
// }

function mult(a, b) {
  return a * b;
}
const multTime = debounce1(mult, 300);
multTime(2, 3).then((res) => console.log(res));
