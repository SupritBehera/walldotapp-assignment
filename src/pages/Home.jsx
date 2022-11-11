import React from "react";
import styled from "styled-components";
import LeftPane from "../components/LeftPane/LeftPane";
import NFTCard from "../components/NFTCard";

const Home = () => {
  return (
    <>
      <RootContainer>
        <LeftPane />
        <Column>
          <NFTCard />
        </Column>
      </RootContainer>
    </>
  );
};
const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100vh;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  justify-content: ${(props) => (props.centered ? "center" : "flex-start")};
  align-items: ${(props) => (props.centered ? "center" : "stretch")};
`;

export default Home;
