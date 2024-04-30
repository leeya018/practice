"use client";
import React, { useState, useMemo } from "react";
import Fibonacci from "@/components/Fibonacci";

export default function page() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(2);

  return (
    <div>
      <div className="flex flex-col">
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
        />
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
        />
      </div>
      <Fibonacci num1={num1} num2={num2} />
    </div>
  );
}
