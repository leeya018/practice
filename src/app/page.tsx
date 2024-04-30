"use client";
import React, { useEffect, useState } from "react";
import Choices from "@/components/Choices";
import { Option, optionsCyc, resultsObj } from "@/util";

function App() {
  // Current cycle number
  const [cycle, setCycle] = useState(0);
  // Store user choices in an array
  const [choices, setChoices] = useState<Option[]>([]);
  //result
  const [result, setResult] = useState("sss");
  // Options to be displayed to the user
  const [options, setOptions] = useState(optionsCyc[0]);

  useEffect(() => {
    if (cycle === optionsCyc.length) {
      setResult(getRes());
    }
  }, [cycle]);

  const getRes = () => {
    console.log("get res");
    const key = choices.map((choice) => String(choice.id)).join("");
    console.log({ key, res: resultsObj[key] });
    return resultsObj[key];
  };

  const handleChoice = (choice) => {
    // Append new choice to the choices array
    setChoices([...choices, choice]);
    // Move to the next cycle, or reset if it's the last one
    if (cycle < optionsCyc.length) {
      setCycle(cycle + 1);
      // Update options based on the choice
      // This is where you might fetch new options based on the previous choice
      setOptions(optionsCyc[cycle + 1]);
    }
  };

  const back = () => {
    if (cycle > 0) {
      setResult("");
      setChoices((prev) => prev.slice(0, -1));
      setOptions(optionsCyc[cycle - 1]);
      setCycle(cycle - 1);
    }
  };

  return (
    <div>
      <h1>Choose an Option (Cycle {cycle} of 5)</h1>
      <button onClick={back}>back</button>
      {result && <div>{result}</div>}
      {cycle < optionsCyc.length && (
        <Choices options={options} onChoose={handleChoice} />
      )}
    </div>
  );
}

export default App;
