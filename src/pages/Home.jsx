import React from "react";
import styled from "styled-components";
import LeftPane from "../components/LeftPane/LeftPane";
import NFTCard from "../components/NFTCard";
import NFTImage1 from "../assets/images/NFTImage.svg";
import NFTImage2 from "../assets/images/NFTImage2.svg";
import NFTImage3 from "../assets/images/NFTImage3.svg";
import NFTImage4 from "../assets/images/NFTImage4.svg";
import NFTImage5 from "../assets/images/NFTImage5.svg";
import Highlight1 from "../assets/images/Highlight1-f.svg";
import Highlight2 from "../assets/images/Highlight2-f.svg";
import Highlight3 from "../assets/images/Highlight3-f.svg";
import Highlight4 from "../assets/images/Highlight4-f.svg";
import Highlight5 from "../assets/images/Highlight5-f.svg";

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
  const highlightCardDetailsList = [
    {
      picture: Highlight2,
      title: "Best Flip",
      type: "Sold",
      username: "CryptoPunk #2131",
      transactionAmount: 98.5,
      time: "10 days",
      xpGain: 150,
    },
    {
      picture: Highlight3,
      title: "Should have...",
      type: "Mint",
      username: "Rare Apepe #6974",
      transactionAmount: 98.5,
      time: "10 days",
      xpGain: 200,
    },
    {
      picture: Highlight4,
      title: "First NFT Bought",
      type: "Bought",
      username: "BAYC #7925",
      transactionAmount: 98.5,
      time: "2 months",
      xpGain: 10,
    },
    {
      picture: Highlight5,
      title: "Paper Handled",
      type: "Sold",
      username: "Moonbird #7866",
      transactionAmount: 98.5,
      time: "10 days",
      xpGain: 200,
    },
  ];
  return (
    <>
      <RootContainer>
        <LeftPane />

        <Column margin="5% 0px 0px 0px">
          <Row margin="0px 0px 4% 0px">
            {highlightCardDetailsList.map((highlightCardDetails) => (
              <HighlightCard highlightCardDetails={highlightCardDetails} />
            ))}
          </Row>
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
