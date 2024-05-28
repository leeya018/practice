// let arr = [1, 1, 1, 2, 2, 3, 4, 4, 4, 4]; //1122344

// async function func(arr) {
//   let o = {};
//   for (const item of arr) {
//     if (!o[item]) {
//       o[item] = 1;
//     } else {
//       o[item]++;
//     }
//   }
//   console.log(o);
//   let arrRes = [];
//   for (const [key, value] of Object.entries(o)) {
//     let num = parseInt(key);
//     if (value === 1) {
//       arrRes.push(num);
//     } else {
//       arrRes.push(num);
//       arrRes.push(num);
//     }
//   }
//   console.log(arrRes);
//   for (const item of arrRes) {
//     await wait();
//     console.log(item);
//   }
// }

// function wait() {
//   return new Promise((resovle) =>
//     setTimeout(() => {
//       resovle();
//     }, 500)
//   );
// }

// func(arr);

function wait1() {
  return new Promise((resovle) =>
    setTimeout(() => {
      resovle(1);
    }, 1000)
  );
}

function wait2() {
  return new Promise((resovle) =>
    setTimeout(() => {
      resovle(2);
    }, 500)
  );
}

// Promise.all([wait1(), wait2()]).then((res) => {
//   console.log(res);
// });

const myPromiseAll = (promiseArr) => {
  return new Promise((resolve) => {
    let arrRes = [];
    let counter = 0;
    for (let i = 0; i < promiseArr.length; i++) {
      promiseArr[i].then((res) => {
        arrRes[i] = res;
        counter++;
        if (counter === promiseArr.length) {
          resolve(arrRes);
        }
      });
    }

    // console.log(arrRes);
  });
};
myPromiseAll([wait2(), wait1()]).then((res) => console.log(res));
