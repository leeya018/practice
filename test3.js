// const arr = [1, 2, 4, 2, 3, 4, 1];

// const ar_cl = Array.from(new Set(arr));
// let resArr = [];

// for (const it of ar_cl) {
//   if (arr.filter((i) => it === i).length > 1) {
//     resArr.push(it);
//   }
// }
// console.log(resArr);
function flattenObject(obj) {
  const result = {};

  function recurse(subObj, path) {
    Object.keys(subObj).forEach((key) => {
      const fullPath = path ? `${path}.${key}` : key; // create a new key with path
      if (
        typeof subObj[key] === "object" &&
        subObj[key] !== null &&
        !Array.isArray(subObj[key])
      ) {
        recurse(subObj[key], fullPath); // continue recursion if it's a nested object
      } else {
        result[fullPath] = subObj[key]; // store value in result object
      }
    });
  }

  recurse(obj, "");
  return result;
}

const o = {
  a: {
    b: {
      c: 1,
      d: 2,
    },
    e: 3,
  },
  f: 4,
};

const flattenedObject = flattenObject(o);
console.log(flattenedObject);
