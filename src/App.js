import "./App.css";
import styled from "styled-components";
import React from "react";
import LeftPane from "./components/LeftPane/LeftPane";

function App() {
  return (
    <>
      <RootContainer>
        <LeftPane />
      </RootContainer>
    </>
  );
}

const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100vh;
`;

export default App;
