// The Promise object represents the eventual completion (or failure)
//  of an asynchronous operation and its resulting value.
// this obj is getting 2 callbacks, (  resolve, reject )
// so if the action succeed it calls the resolve ,
// if not , its calls to reject
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 300);
// });

// myPromise.then((res) => console.log(res));
// Create a function that returns a promise that resolves after a given time
const delay = (ms, value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, ms);
  });
};

// Create a function that returns a promise that rejects after a given time
const delayReject = (ms, reason) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(reason);
    }, ms);
  });
};

// Use Promise.race with multiple promises
const promise1 = delay(3000, "First promise resolved");
const promise2 = delay(500, "Second promise resolved");
const promise3 = delayReject(5000, "Third promise rejected");

// only 1 win, the first one that finish
// console.log("RACE");
// Promise.race([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result); // Output: "Second promise resolved"
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// wait to call to finish
console.log("ALL");

// Promise.all([promise1, promise2, promise3]) // because 1 is rejected so  it reject all
Promise.all([promise1, promise2]) // will create all
  .then((result) => {
    console.log(result); // Output: "Second promise resolved"
  })
  .catch((error) => {
    console.error(error);
  });
