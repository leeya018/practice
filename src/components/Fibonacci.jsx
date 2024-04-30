import React, { useMemo } from "react";

const generateFibonacci = (first, second) => {
  let n = 10; // Number of elements in the Fibonacci sequence
  let fibSequence = [first, second];

  while (fibSequence.length < n) {
    const nextFib =
      fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    fibSequence.push(nextFib);
  }
  return fibSequence;
};

const Fibonacci = ({ num1, num2 }) => {
  // Function to generate Fibonacci sequence
  const fibonacciSequence = useMemo(() => {
    return generateFibonacci(num1, num2);
  }, [num1, num2]);

  return (
    <div>
      <h2>Fibonacci Sequence</h2>
      {fibonacciSequence.map((num, index) => (
        <p key={index}>{num}</p>
      ))}
    </div>
  );
};

export default Fibonacci;
