import { PlayButton } from "./Styles.js";
import React from "react";
import Guess from "./Guess.js";
import { Div, MainDiv, GuessDiv, Form, Input } from "./GamePage.style";
import { useGamePage } from "./GamePage.logic.js";

const GamePage = (props) => {
  const {
    addGuess,
    values,
    handleChange,
    handleKeyUp,
    guesses,
    inputRefs,
  } = useGamePage(props.gameNumber, props.logic);
  return (
    <MainDiv>
      <p>Enter 4 digit number</p>
      <Form onSubmit={addGuess}>
        <Div>
          {values.map((value, index) => (
            <Input
              key={index}
              type="text"
              value={value}
              onChange={(event) => handleChange(index, event.target.value)}
              maxLength={1}
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
        <PlayButton type="submit">Enter</PlayButton>
      </Form>
      <GuessDiv>
        {guesses.reverse().map((guess, index) => {
          return (
            <Guess
              key={index}
              guess={guess}
              index={Math.abs(index - guesses.length)}
            />
          );
        })}
      </GuessDiv>
    </MainDiv>
  );
};

export default GamePage;
