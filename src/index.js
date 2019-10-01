module.exports = function check(str, bracketsConfig) {

  let arrayFromString = Array.from(str);
  let brackets = [].concat(...bracketsConfig);
  let stack = [];

  if (arrayFromString.length % 2 != 0) {
    return false;
  }

  for (let i = 0; i < arrayFromString.length; i++) {
    for (let j = 0; j < brackets.length; j++) {
      if (arrayFromString[i] === brackets[j] && (j === 0 || j % 2 === 0)) {
        stack.push(arrayFromString[i]);
      } else if (arrayFromString[i] === brackets[j] && (j % 2 !== 0 ) && stack[stack.length - 1] === brackets[j-1]) {
        stack.pop();
        }
      }
    }


  if (stack.length === 0) {
    return true;
  } else {
  return false;
  }
}

// module.exports = function check(str, bracketsConfig) {
//   let arrayFromString = [];
//   arrayFromString = Array.from(str);
//   let brackets = [].concat(...bracketsConfig);
//   let stack = [];

//   if (arrayFromString.length % 2 != 0) {
//     return false;
//   }

//   for (let i = 0; i < arrayFromString.length; i++) {
//     for (let j = 0; j < brackets.length; j++) {
//       if (arrayFromString[i] === brackets[j] && (j === 0 || j % 2 === 0) && (i === 0 || i % 2 === 0)) {
//         stack.push(arrayFromString[i]);
//         continue;
//       } else if (brackets[j] === brackets[j + 1] || brackets[j] === brackets[j - 1]) {
//           if (arrayFromString[i] === brackets[j] && j % 2 !== 0 && i % 2 !== 0 && stack[stack.length - 1] === brackets[j - 1]) {
//             stack.pop();
//           } else {
//             continue;
//           }
//       } else if (arrayFromString[i] === brackets[j] && j % 2 !== 0 && stack[stack.length - 1] === brackets[j - 1]) {
//         stack.pop();
//       }
//       }
//     }

//   if (stack.length === 0) {
//     return true;
//   } else {
//   return false;
//   }
// }