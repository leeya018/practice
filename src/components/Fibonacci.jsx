import React, { useMemo } from "react";

export default function Fibonacci({ num1, num2 }) {
  const n = 1000;
  const generateFib = (num1, num2) => {
    let arr = [num1, num2];
    let i = 2;
    while (i < n) {
      const res = arr[i - 2] + arr[i - 1];
      arr.push(res);

      i++;
    }
    return arr;
  };

  const fibMemoArr = useMemo(() => {
    return generateFib(num1, num2);
  }, [num1, num2]);

  return (
    <div>
      <ul>
        {fibMemoArr.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
