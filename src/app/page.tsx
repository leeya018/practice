"use cilent";
import React from "react";
import Fibonacci from "@/components/Fibonacci";

// 1 2 3 5 8
export default function page() {
  return (
    <div>
      <Fibonacci num1={1} num2={3} />
    </div>
  );
}
