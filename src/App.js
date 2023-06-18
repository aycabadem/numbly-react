import React from "react";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import GamePage from "./GamePage";
import { PlayButton } from "./Styles.js";

const MyDiv = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 20px;
`;

function App() {
  const [showGamePage, setShowGamePage] = useState(false);
  const [gameNumber, setGameNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    isGameOver && alert("game over");
  }, [isGameOver]);

  const createRandomNumber = () => {
    const randomNum = [];

    for (let i = 0; i < 4; i++) {
      let random1 = Math.floor(Math.random() * 10);
      if (randomNum.includes(random1) || random1 === 0) {
        return createRandomNumber();
      }
      randomNum.push(random1);
    }

    console.log(randomNum);
    return +randomNum.join("");
  };
  return (
    <MyDiv>
      {(!showGamePage || isGameOver) && (
        <>
          <p>Press play button to play</p>
          <PlayButton
            onClick={() => {
              setShowGamePage(true);
              const gameNumber = createRandomNumber();
              setGameNumber(gameNumber);
              setIsGameOver(false);
            }}
          >
            Play
          </PlayButton>
        </>
      )}

      {showGamePage && !isGameOver && (
        <GamePage gameNumber={gameNumber} logic={setIsGameOver} />
      )}
    </MyDiv>
  );
}

export default App;
