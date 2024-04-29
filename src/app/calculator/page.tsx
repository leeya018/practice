"use client";
import React, { useState } from "react";
//  calculator
export default function page() {
  const [result, setResult] = useState<string>("0");

  const calc = () => {
    setResult(eval(result));
  };
  const isSign = (txt: string) => {
    return txt === "+" || txt === "-" || txt === "*" || txt === "/";
  };

  const print = (txt: string) => {
    if (isSign(txt) && isSign(result.slice(-1)[0])) {
      return;
    }
    if (result === "0") {
      if (isSign(txt)) {
        return;
      }
      setResult(txt);
      return;
    }
    setResult((prev) => prev + txt);
  };
  return (
    <div className="w-screen flex items-center flex-col">
      <div className="text-2xl font-bold mt-10 flex items-center justify-center">
        calculator
      </div>
      {/* calculotr */}
      <div className="border-gray w-[30%] border-2 p-2 rounded-md">
        {/* input sectoin */}
        <div className="border-2 rounded-md p-2">
          <input
            type="text"
            value={result}
            onChange={(e) => setResult(e.target.value)}
            className="border-2 border-black rounded-md w-full p-2 "
          />
        </div>

        {/* buttons section */}
        <div className="flex w-full">
          {/* num button */}
          <ul className="grid grid-cols-3 w-[60%]   ">
            {"7894561230".split("").map((item, key) => (
              <li
                key={key}
                className={`flex-1 h-20 ${item === "0" && "col-span-3"}`}
              >
                <button onClick={() => print(item + "")} className={` button `}>
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* actions buttons */}
          <div className="grid grid-cols-2 ps-4 flex-1 ">
            <button
              onClick={() => print("+")}
              className="button  bg-gray-400 h-20"
            >
              +
            </button>
            <button
              onClick={() => print("-")}
              className="button bg-gray-400 h-20"
            >
              -
            </button>
            <button
              onClick={() => print("*")}
              className="button bg-gray-400 h-20"
            >
              *
            </button>
            <button
              onClick={() => print("/")}
              className="button bg-gray-400 h-20"
            >
              /
            </button>
            <button onClick={calc} className="button bg-blue-500 col-span-2">
              =
            </button>
          </div>
          {/* <div>
            <button onClick={calc} className="button">
              =
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
