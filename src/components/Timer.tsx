import React, { useState, useEffect } from "react";
let timer: any;
export default function Timer() {
  const [seconds, setSeconds] = useState(10);
  const [isStop, setIsStop] = useState(true);
  const [chosenTab, setChosenTab] = useState("pomadoro");

  useEffect(() => {
    if (!isStop && seconds > 0) {
      timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [seconds, isStop]);

  const stop = () => {
    clearTimeout(timer);
    setIsStop(true);
  };
  const start = () => {
    setIsStop(false);
  };
  console.log(chosenTab);
  const getTimeClock = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddedSeconds = String(remainingSeconds).padStart(2, "0");

    // Format the output as HH:mm:ss
    return `${paddedMinutes}:${paddedSeconds}`;
  };

  return (
    <div className="w-full mx-auto flex  justify-center ">
      <div className="mt-10 w-[400px] h-[300px] mb-10 py-5 bg-red-400 ">
        {/* buttons */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => {
              setChosenTab("pomadoro");
              setSeconds(25 * 60);
            }}
            className={` button-top  ${
              chosenTab === "pomadoro" && "bg-red-500"
            } `}
          >
            pomadoro
          </button>
          <button
            className={`${
              chosenTab === "shortbreak" && "bg-red-500"
            } button-top`}
            onClick={() => {
              setChosenTab("shortbreak");
              setSeconds(5 * 60);
            }}
          >
            short breark
          </button>
          <button
            onClick={() => {
              setChosenTab("longbreak");
              setSeconds(15 * 60);
            }}
            className={`${
              chosenTab === "longbreak" && "bg-red-500"
            } button-top`}
          >
            Long Break
          </button>
        </div>
        {/* timee */}
        <div className="flex items-center justify-center mt-10">
          <div className="text-white font-bold text-6xl ">{getTimeClock()}</div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <button onClick={isStop ? start : stop} className="button-start">
            {isStop ? "Start" : "Stop"}
          </button>
        </div>
      </div>
    </div>
  );
}
