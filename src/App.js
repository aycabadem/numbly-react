import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
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
  const [showGamePage, setShowGamePage] = useState(true);
  return (
    <MyDiv>
      {!showGamePage && (
        <>
          <p>Press play button to play</p>
          <PlayButton
            onClick={() => {
              setShowGamePage(true);
            }}
          >
            Play
          </PlayButton>
        </>
      )}

      {showGamePage && <GamePage />}
    </MyDiv>
  );
}

export default App;
