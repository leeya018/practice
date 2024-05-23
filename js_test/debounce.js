function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function add(a) {
  return a + 1;
}
const resFunc = debounce(add, 3000);
console.log(resFunc(1));
