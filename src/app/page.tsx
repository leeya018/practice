"use client";
import React, { useState, useEffect } from "react";

export default function page() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // useEffect(() => {
  //   // fect function
  //   const getData = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //     const data = await res.json();
  //     console.log(data);
  //     return data;
  //   };
  //   getData();
  // }, []);

  // useEffect(() => {
  //   const resizeFunc = () => console.log(window.innerWidth);
  //   window.addEventListener("resize", resizeFunc);

  //   return () => {
  //     window.removeEventListener("resize", resizeFunc);
  //   };
  // }, []);

  useEffect(() => {
    console.log({ name, count });
  }, [count, name]);

  // console.log("component");
  return (
    <div>
      useEffect
      <button onClick={() => setCount(count + 1)}>increase counter</button>
      <input
        className="border-2 border-black"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
