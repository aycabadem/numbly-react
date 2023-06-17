import styled from "@emotion/styled";
import { PlayButton } from "./Styles.js";
import React, { useRef, useState } from "react";

const Div = styled.div`
  display: flex;
  gap: 5px;
`;

const Input = styled.input`
  width: 20px;
  height: 20px;
  text-align: center;
`;

const GamePage = () => {
  const [values, setValues] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleKeyUp = (event, index) => {
    if (event.key === "Delete" || event.key === "Backspace") {
      if (values[index] === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleChange = (index, value) => {
    console.log(index);
    if (index === 0 && value === 0) {
      alert("First value can not be 0");
      return;
    }

    if (isNaN(+value)) {
      alert("You can only enter numbers");
      return;
    }
    for (var i = 0; i < index; i++) {
      if (value !== "" && value === values[i]) {
        alert("different numbers!!!");
        return;
      }
    }

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    // Move focus to the next input
    if (index < inputRefs.current.length - 1 && !isNaN(+value)) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <>
      <p>Enter 4 digit number</p>
      <Div>
        {" "}
        {values.map((value, index) => (
          <Input
            key={index}
            type="text"
            value={value}
            onChange={(event) => handleChange(index, event.target.value)}
            maxLength={1} // Limit input to one character
            ref={(el) => (inputRefs.current[index] = el)}
            onKeyUp={(event) => handleKeyUp(event, index)}
            onBeforeInputCapture={(event) => {
              if (!isNaN(+event.target.value) && index < values.length - 1) {
                inputRefs.current[index + 1].focus();
              }
            }}
          />
        ))}
      </Div>

      <PlayButton>Enter</PlayButton>
    </>
  );
};

export default GamePage;
