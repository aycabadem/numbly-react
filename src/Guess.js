import styled from "@emotion/styled";
import React from "react";

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 50%;
`;

const Guess = (props) => {
  return (
    <MainDiv>
      <InfoDiv>
        <div>{props.index}</div>
        <div>
          {props.guess.plusCount && `+${props.guess.plusCount}`}{" "}
          {props.guess.minusCount && `-${props.guess.minusCount}`}
        </div>
      </InfoDiv>
      <div> Guess : {props.guess.guess}</div>
    </MainDiv>
  );
};

export default Guess;
