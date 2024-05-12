console.log(canFormPalindrome("civic"));
console.log(canFormPalindrome("ivicc"));
console.log(canFormPalindrome("civic2"));

function canFormPalindrome(str) {
  if (str.length === 0 || str.length === 1) return true;
  if (str[0] == str[str.length - 1]) return canFormPalindrome(str.slice(1, -1));
  else return false;
}
// function canFormPalindrome(str) {
//   for (let i = 0; i < str.length/2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) return false;
//   }
//   return true;
// }
// function canFormPalindrome(str) {
//   const a = str.split("").reverse();
//   const b = str.split("");
//   for (let i = 0; i < str.length; i++) {
//     if (a[i] !== b[i]) return false;
//   }
//   return true;
// }
