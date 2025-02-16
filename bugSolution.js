function foo(a, b) {
  // Explicit type checking and conversion
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: arguments must be numbers";
  }
  return a + b; 
}

console.log(foo(1, '2')); // Output: 3
console.log(foo('abc', 2)); // Output: Invalid input: arguments must be numbers