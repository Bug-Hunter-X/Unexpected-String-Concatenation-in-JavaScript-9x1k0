# Unexpected String Concatenation in JavaScript

This repository demonstrates a common yet subtle bug in JavaScript related to type coercion and the '+' operator.  When adding numbers, JavaScript will implicitly convert operands to strings if one of them is already a string, resulting in unexpected concatenation instead of numerical addition.

The `bug.js` file contains the problematic code.  The `bugSolution.js` file presents a solution to mitigate this issue.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code using a JavaScript interpreter (e.g., Node.js).
4. Observe the unexpected output.

## Solution

The solution, detailed in `bugSolution.js`, employs strict type checking or explicit type conversion before performing addition to ensure numerical operations.