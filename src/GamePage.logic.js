import { useRef, useState } from "react";

export const useGamePage = (gameNumber, setIsGameOver) => {
  const [values, setValues] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [guesses, setGuesses] = useState([
    {
      guess: 1234,
      plusCount: 2,
      minusCount: 1,
    },
  ]);

  const handleKeyUp = (event, index) => {
    if (event.key === "Delete" || event.key === "Backspace") {
      if (values[index] === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleChange = (index, value) => {
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

  const addGuess = (event) => {
    event.preventDefault();
    const guess = +values.join("");

    const plusCount = calculatePlus(guess);
    const minusCount = calculateMinus(guess);
    if (plusCount === 4) {
      setIsGameOver(true);
    }
    setGuesses((oldState) => {
      return [
        ...oldState,
        {
          guess,
          plusCount,
          minusCount,
        },
      ];
    });
  };

  const calculatePlus = (guess) => {
    let plusCount = 0;
    for (var i = 0; i < 4; i++) {
      if (gameNumber.toString()[i] === guess.toString()[i]) {
        plusCount++;
      }
    }
    return plusCount;
  };

  const calculateMinus = (guess) => {
    let minusCount = 0;
    for (var i = 0; i < 4; i++) {
      if (gameNumber.toString().includes(guess.toString()[i])) {
        if (gameNumber.toString()[i] !== guess.toString()[i]) {
          minusCount++;
        }
      }
    }
    return minusCount;
  };

  return {
    addGuess,
    values,
    handleChange,
    inputRefs,
    handleKeyUp,
    guesses,
  };
};
