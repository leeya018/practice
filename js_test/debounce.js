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

let inter;
function debounce(func, time) {
  clearInterval(inter);
  return function (data) {
    setTimeout(() => {
      const res = func(data);
      console.log(res);
    }, time);
  };
}

function add(num) {
  return num + 1;
}
debounce(add, 1000)(1);
