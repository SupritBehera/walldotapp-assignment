import React from "react";
import styled from "styled-components";
import LeftPane from "../components/LeftPane/LeftPane";
import NFTCard from "../components/NFTCard";
import NFTImage1 from "../assets/images/NFTImage.svg";
import NFTImage2 from "../assets/images/NFTImage2.svg";
import NFTImage3 from "../assets/images/NFTImage3.svg";
import NFTImage4 from "../assets/images/NFTImage4.svg";
import NFTImage5 from "../assets/images/NFTImage5.svg";
import HighlightCard from "../components/HighlightCard";

const Home = () => {
  const nftCardDetailsList = [
    {
      name: "Azuki",
      profilePicture: NFTImage1,
      id: "9839",
      bought: "02.82",
      floor: "12.74",
      percentChange: 21.6,
      months: 3,
    },
    {
      name: "MAYC",
      profilePicture: NFTImage2,
      id: "9839",
      bought: "02.82",
      floor: "12.74",
      percentChange: 21.6,
      months: 3,
    },
    {
      name: "MoonBirds",
      profilePicture: NFTImage3,
      id: "9839",
      bought: "02.82",
      floor: "12.74",
      percentChange: 21.6,
      months: 3,
    },
    {
      name: "Otherdeed",
      profilePicture: NFTImage4,
      id: "9839",
      bought: "02.82",
      floor: "12.74",
      percentChange: 21.6,
      months: 3,
    },
    {
      name: "Cryptoz",
      profilePicture: NFTImage5,
      id: "9839",
      bought: "02.82",
      floor: "12.74",
      percentChange: 21.6,
      months: 3,
    },
  ];
  return (
    <>
      <RootContainer>
        <LeftPane />
        <HighlightCard />
        <Column margin="5% 0px 0px 0px">
          <Row>
            {nftCardDetailsList.map((nftCardDetails) => (
              <NFTCard nftCardDetails={nftCardDetails} />
            ))}
          </Row>
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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  justify-content: ${(props) => (props.centered ? "center" : "flex-start")};
  align-items: ${(props) => (props.centered ? "center" : "stretch")};
`;

export default Home;
