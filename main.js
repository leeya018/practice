// greens areas
//  1,1. 0

//  0,1. 1
//  1,0. 2
//  2,1. 0
//  1,2. 0
// function findNeighbors(arr, i, j) {
//   if (i < 0 || j < 0 || i === arr.length || j === arr.length || arr[i][j] === 2)
//     return 0;
//   else {
//     if (arr[i][j] === 0) {
//       return 1;
//     } else if (arr[i][j] === 1) {
//       arr[i][j] = 2;
//       return (
//         findNeighbors(arr, i - 1, j) +
//         findNeighbors(arr, i, j - 1) +
//         findNeighbors(arr, i, j + 1) +
//         findNeighbors(arr, i + 1, j)
//       );
//     }
//   }
// }

function findNeighbors(arr, i, j) {
  //  run
  let c = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 1) {
        arr[i][j] = 2;
        if (arr[i][j - 1] === 0) c++;
        if (arr[i][j + 1] === 0) c++;
        if (arr[i - 1][j] === 0) c++;
        if (arr[i + 1][j] === 0) c++;
      }
    }
  }
}

function findGreens(arr) {
  let counter = 0;
  let counter_p = 0;

  //  run
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      //  1 1
      if (arr[i][j] === 1) {
        const permiter = findNeighbors(arr, i, j);
        console.log(permiter);
        counter++;
        counter_p += permiter;
      }
    }
    console.log(counter_p);
    return counter;
  }

  // jf 1 , change 2
  //  check around
  // when finish counter +1
}

findGreens([
  [0, 0, 0],
  [0, 1, 1],
  [0, 0, 1],
]);
