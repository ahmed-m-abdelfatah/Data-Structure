import { stack } from './01_stack_array_implementation.js';

function postfixToEvaluation(exp) {
  const expLength = exp.length;
  const stk = new stack(expLength);

  for (let i = 0; i < expLength; i++) {
    let current = exp[i];

    if (!isNaN(current)) {
      stk.push(+current);
    } else {
      let operant2 = stk.pop();
      let operant1 = stk.pop();

      switch (current) {
        case '+':
          stk.push(operant1 + operant2);
          break;
        case '-':
          stk.push(operant1 - operant2);
          break;
        case '*':
          stk.push(operant1 * operant2);
          break;
        case '/':
          stk.push(operant1 / operant2);
          break;
        case '%':
          stk.push(operant1 % operant2);
          break;
      }
    }
  }

  return stk.pop();
}

/**
 * @test 1
 */

console.log("~ postfixToEvaluation('382/+5-')", postfixToEvaluation('382/+5-')); // 2

/**
 * @test 2
 */

console.log("~ postfixToEvaluation('82%')", postfixToEvaluation('82%')); // 0
