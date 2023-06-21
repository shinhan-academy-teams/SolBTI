import React from "react";
import results from "./contents/results";
import styled from "styled-components";
import Parser from "html-react-parser";

const ResultTitle = styled.div`
  font-family: "양진체";
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
  color: #374baa;
`;

const ResultImg = styled.img`
  position: absolute;
  width: 36.624rem;
`;

const Content = styled.div`
  position: absolute;
  font-family: "GmarketSansMedium";
  font-size: 1rem;
  color: #444444;
`;

const ResultSquare = styled.div`
  position: relative;
  display: flex;

  width: 33.1rem;
  height: ${(props) => (props.isNormal < 16 ? "50rem" : "22.9rem")};
  background-color: white;
  border-radius: 0.5rem;

  ${ResultImg} {
    justify-content: center;
    bottom: ${(props) => (props.isNormal < 16 ? "32rem" : "14rem")};
    left: -1.6rem;
  }

  ${Content} {
    width: 85%;
    left: 50%;
    word-break: keep-all;

    ${(props) =>
      props.isNormal < 16
        ? `transform: translateX(-50%);
        bottom : 2rem;`
        : `top: 50%;
        transform: translate(-50%, -50%);`};
  }
`;

function ResultPage({ EI, SN, JP }) {
  var result = "";
  EI >= 2 ? (result += "E") : (result += "I");
  SN >= 2 ? (result += "S") : (result += "N");
  JP >= 2 ? (result += "J") : (result += "P");
  return (
    <>
      <ResultTitle>{results[result].name}</ResultTitle>
      <ResultSquare>
        <ResultImg />
        <Content>{Parser(results[result].explain)}</Content>
      </ResultSquare>
    </>
  );
}

export default ResultPage;