import React from "react";

function Choices({ options, onChoose }) {
  return (
    <div>
      {options.map((option) => (
        <button key={option.id} onClick={() => onChoose(option)}>
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Choices;
