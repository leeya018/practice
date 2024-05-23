// The Promise object represents the eventual completion (or failure)
//  of an asynchronous operation and its resulting value.
// this obj is getting 2 callbacks, (  resolve, reject )
// so if the action succeed it calls the resolve ,
// if not , its calls to reject
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise.then((res) => console.log(res));
