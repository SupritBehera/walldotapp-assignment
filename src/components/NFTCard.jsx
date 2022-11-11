import React from "react";
import styled from "styled-components";
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
          <MonthsContainer>{`${nftCardDetails.months} months`}</MonthsContainer>
        </Column>
        <Column>
          <Title>{`${nftCardDetails.name} #${nftCardDetails.id}`}</Title>
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

const Row = styled.div`
  display: flex;
  flex-direction: row;
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

export default NFTCard;
