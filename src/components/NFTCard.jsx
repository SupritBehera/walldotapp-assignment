import React from "react";
import styled from "styled-components";
import EthVector from "../assets/images/EthVector.svg";

import NFTImage1 from "../assets/images/NFTImage.svg";

const NFTCard = () => {
  const nftCardDetails = {
    name: "Azuki",
    id: "9839",
    bought: "02.82",
    floor: "12.74",
    percentChange: 21.6,
    profilePicture: NFTImage1,
    months: 3,
  };
  return (
    <>
      <RootContainer>
        <Column>
          <img src={nftCardDetails.profilePicture} />
          <MonthsContainer>{`${nftCardDetails.months} Months`}</MonthsContainer>
        </Column>
        <Column margin="0px 5% 0px 3%">
          <Title>{`${nftCardDetails.name} #${nftCardDetails.id}`}</Title>
          <BoughtAndFloorContainer>
            <Subtitle>Bought</Subtitle>
            <Subtitle white flexEnd>
              <span
                style={{ marginRight: 5 }}
              >{`${nftCardDetails.bought}`}</span>
              <span>
                <img src={EthVector} />
              </span>
            </Subtitle>
          </BoughtAndFloorContainer>
          <BoughtAndFloorContainer margin="7% 0px 0px 0px">
            <Subtitle>Bought</Subtitle>
            <Subtitle white flexEnd>
              <span
                style={{ marginRight: 5 }}
              >{`${nftCardDetails.bought}`}</span>
              <span>
                <img src={EthVector} />
              </span>
              {nftCardDetails.percentChange &&
              nftCardDetails.percentChange >= 0 ? (
                <PercentChangeSpan>{`+${nftCardDetails.percentChange}%`}</PercentChangeSpan>
              ) : (
                <PercentChangeSpan
                  red
                >{`-${nftCardDetails.percentChange}%`}</PercentChangeSpan>
              )}
            </Subtitle>
          </BoughtAndFloorContainer>
        </Column>
      </RootContainer>
    </>
  );
};

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 305px;
  width: 201px;
  border-radius: 8px;
  padding: 4px 4px 8px 4px;
  background-color: #111111;
  margin-top: 35%;
`;

const Title = styled.div`
  font-family: "Sharp Grotesk Regular";
  font-weight: 550;
  font-size: 0.9rem;
  color: #fafafa;
  margin-top: 15%;
  margin-bottom: 9%;
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  text-align: baseline;
  justify-content: center;
  font-family: "Sharp Grotesk Regular";
  font-weight: 550;
  font-size: 0.8rem;
  color: #a2a2a2;
  color: ${(props) => (props.white ? "#FAFAFA" : "#a2a2a2")};
  align-self: ${(props) => (props.flexEnd ? "flex-end" : "flex-start")};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
`;

const BoughtAndFloorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  justify-content: ${(props) => (props.centered ? "center" : "flex-start")};
  align-items: ${(props) => (props.centered ? "center" : "stretch")};
`;

const MonthsContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 31px;
  color: #ffffff;
  font-family: "Sharp Grotesk Regular";
  font-size: 0.75rem;
  width: 69px;
  padding: 5px;
  padding-left: 2px;
  padding-right: 2px;
  text-align: center;
  align-self: flex-end;
  margin-top: -13%;
  margin-right: 3px;
  backdrop-filter: blur(6px);
`;

const PercentChangeSpan = styled.div`
  color: ${(props) => (props.red ? "#E97451" : " #19ed7b")};
  color: #19ed7b;
  font-family: "Sharp Grotesk Regular";
  font-size: 0.75rem;
  font-weight: 400;
  margin-left: 4px;
`;

export default NFTCard;
