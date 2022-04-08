import { stack } from './01_stack_array_implementation.js';

/**
 * @Algorithm
 * [1] Create empty stack & empty string for output
 * [2] Loop on the infix expression
 *     [2.1] if it is a digit then add it to the output
 *     [2.2] if it is ( then add it to the stack
 *     [2.3] if it is ) then pop from stack to output until you reach (
 *     [2.4] if it is an operator then pop from stack until you can push it to the stack
 *      [2.4.1] operator priority
 * [3] if the stack is not empty then pop all the elements from the stack to the output
 * [4] return the output
 */

function infixToPostfix(infix) {
  const infixLength = infix.length;
  const stk = new stack(infixLength);
  let output = '';

  for (let i = 0; i < infixLength; i++) {
    let current = infix[i];
    if (current === ' ') continue;

    if (!isNaN(current) || isLetter(current)) {
      output += current;
    } else if (current === '(') {
      stk.push(current);
    } else if (current === ')') {
      while (stk.peek() !== '(') {
        output += stk.pop();
      }
      stk.pop(); // to remove (
    } else {
      while (!stk.isEmpty() && priority(current) <= priority(stk.peek())) {
        output += stk.pop();
      }
      stk.push(current);
    }
  }

  while (!stk.isEmpty()) {
    output += stk.pop();
  }

  return output;
}

function isLetter(c) {
  // /[a-zA-Z]/.test(c) if u want to use regular expression
  return c.toLowerCase() != c.toUpperCase();
}

function priority(c) {
  if (c === '+' || c === '-') {
    return 1;
  } else if (c === '*' || c === '/' || c === '%') {
    return 2;
  } else if (c === '^') {
    return 1;
  } else {
    return 0;
  }
}

/**
 * @test 1
 */

console.log(infixToPostfix('1 + 2 * 3')); // 1 2 3 * +

/**
 * @test 2
 */

console.log(infixToPostfix('1 + 2 * 3 + 4 * 5')); // 1 2 3 * + 4 5 * +

/**
 * @test 3
 */

console.log(infixToPostfix('(3+2)+7/2*((7+3)*2)')); // 3 2 + 7 2 / 7 3 + 2 * * +
