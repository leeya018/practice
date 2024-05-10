const arr = [1, 2, 3, 4];

//  methods that change the array :
// push, pop, shift, unshift, splice, and sort
//  methods that are not changing arr -
// map ,filter, reduce, find

// sort
console.log(arr.sort((a, b) => b - a));
console.log(arr);
// cut array from index 1 , for  6 items, or the end of the array ,  the things which is smaller
// console.log(arr.splice(1, 6));
// what is left from array
// console.log(arr);
// cut array from index 1 , for  2 items
// console.log(arr.splice(1, 2));
// what is left from array
// console.log(arr);
//  cut the array and return from ind 1
// console.log(arr.splice(1));
// what is left from array
// console.log(arr);
// add element to start
// console.log(arr.unshift(99));
// console.log(arr);
// remove first element
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.push(11));
// console.log(arr);

// console.log(arr.find((item) => item === 2));
// console.log(arr);

//  not changing array
// console.log(arr.find((item) => item === 2));
// console.log(arr);
// console.log(arr.reduce((acc, item) => item + acc, 0));
// console.log(arr);
// console.log(arr.map((item) => item * 2));
// console.log(arr);
// console.log(arr.filter((item) => item > 2));
// console.log(arr);
// return part of array between indexes not including the second
// console.log(arr.slice(0, 2));
// console.log(arr);
//  get array not including the last item
// console.log(arr.slice(0, -1));
// console.log(arr);
// return an array sstarting from index 1
// console.log(arr.slice(1));
// console.log(arr);
