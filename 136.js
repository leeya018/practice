// let s = "ADOBEODEBAAN";
let s =
  "ADOBCEODEBAANSTNRIEOTNSARITNSEIRANTIENTISNTIESRNIENSTREIATCNIANBFUYCNPUYWFNNFW";
let t = "ABC";
// Output: "BANC";
//  give me the shortest substr
const minWindow = (s, t) => {
  let start = Date.now();
  // console.log(start);
  let inds = [];
  let indsMin = [1, 1000000];
  let r = 0;
  let indOfFirst = s.length - 1 - s.split("").reverse().join("").indexOf(s[0]);
  // console.log(indOfFirst);
  for (let k = indOfFirst; k >= 0; k--) {
    inds = [];
    r = 0;
    for (let i = k; i < s.length; i++) {
      if (t[r] === s[i]) {
        if (inds.length === 0) {
          inds.push(i);
        }

        r++;
      }
      if (t.length === r) {
        inds.push(i);
        if (indsMin[1] - indsMin[0] > inds[1] - inds[0]) {
          indsMin = [...inds];
          const [s1, s2] = indsMin;
          let end = Date.now();
          console.log("Time : " + (end - start));

          return s.substring(s1, s2 + 1);

          break;
        }
      }
    }
  }
  const [s1, s2] = indsMin;
  end = Date.now();
  // console.log(end);
  console.log("Time : " + (end - start));
  console.log("Time : ");

  return s.substring(s1, s2);
};
// const minWindow = (s, t) => {
//   let inds = [];
//   let indsMin = [1, 1000000];
//   let r = 0;
//   let indOfFirst = s.length - 1 - s.split("").reverse().join("").indexOf(s[0]);
//   console.log(indOfFirst);
//   for (let k = 0; k <= indOfFirst; k++) {
//     inds = [];
//     r = 0;
//     for (let i = k; i < s.length; i++) {
//       if (t[r] === s[i]) {
//         if (inds.length === 0) {
//           inds.push(i);
//         }

//         r++;
//       }
//       if (t.length === r) {
//         inds.push(i);
//         if (indsMin[1] - indsMin[0] > inds[1] - inds[0]) {
//           indsMin = [...inds];

//           break;
//         }
//       }
//     }
//   }
//   const [s1, s2] = indsMin;
//   return s.substring(s1, s2);
// };
console.log(minWindow(s, t));
