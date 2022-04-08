import { stack } from './01_stack_array_implementation.js';
// console.log('~ stack', stack);

function isBalancedParentheses(str) {
  const openBrackets = new stack(str.length);

  for (let i = 0; i < str.length; i++) {
    // console.log(`~ str[${i}]`, str[i]);

    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      openBrackets.push(str[i]);
      // console.log('~ openBrackets.stackSize()', openBrackets.stackSize());
    } else if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
      if (openBrackets.isEmpty()) return false;
      else if (pair(openBrackets.pop(), str[i]) === false) return false;
    }
  }

  return openBrackets.isEmpty();
}

function pair(open, close) {
  // console.log('~ open', open);
  // console.log('~ close', close);

  if (open === '(' && close === ')') {
    return true;
  } else if (open === '[' && close === ']') {
    return true;
  } else if (open === '{' && close === '}') {
    return true;
  } else {
    return false;
  }
}

console.log(
  "~ isBalancedParentheses('[{()}]')",
  isBalancedParentheses('[{()}]'),
);

console.log(
  "~ isBalancedParentheses('[{)(}]')",
  isBalancedParentheses('[{)(}]'),
);
