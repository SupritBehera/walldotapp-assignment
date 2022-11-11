import React from "react";
import styled from "styled-components";
import ProfileIcon from "../../assets/images/ProfileIcon.svg";

const LeftPane = () => {
  const user = {
    profileIcon: ProfileIcon,
    name: "dingaling.eth",
    shortDesc: "0xadgf....jkld",
    level: 2,
    twitterHandle: "dingalingts",
    websiteUrl: "https://www.wall.app/",
    description:
      "An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and owner of 📦  @nftboxes",
    commonCommunities: [
      {
        communityId: "123",
        communityPhoto: "",
      },
      {
        communityId: "123",
        communityPhoto: "",
      },
      {
        communityId: "123",
        communityPhoto: "",
      },
      {
        communityId: "123",
        communityPhoto: "",
      },
    ],
    tags: [
      {
        tagName: "Art",
        tagPercent: 12,
      },
      {
        tagName: "Utility",
        tagPercent: 12,
      },
      {
        tagName: "PFP",
        tagPercent: 12,
      },
      {
        tagName: "Metaverse",
        tagPercent: 12,
      },
      {
        tagName: "Gaming",
        tagPercent: 12,
      },
      {
        tagName: "PFP",
        tagPercent: 12,
      },
      {
        tagName: "ens",
        tagPercent: 12,
      },
    ],
  };
  return (
    <>
      <RootContainer>
        <Row>
          <Column margin="22px 6px 10px 22px">
            <img src={ProfileIcon} alt="profile icon" />
            <LevelDiv>{`LVL ${user.level}`}</LevelDiv>
          </Column>
          <Column margin="10px" centered>
            <Title>{`${user.name}`}</Title>
            <Subtitle>{`${user.shortDesc}`}</Subtitle>
          </Column>
        </Row>
      </RootContainer>
    </>
  );
};

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 640px;
  width: 292px;
  border-radius: 16px;
  padding: 16px, 16px, 24px, 16px;
  background-color: #111111;
  margin: 3%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  justify-content: ${(props) => (props.centered ? "center" : "flex-start")};
  align-items: ${(props) => (props.centered ? "center" : "stretch")};
`;

const LevelDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 44px;
  padding: 8px;
  background-color: rgba(248, 169, 16, 0.1);
  font-family: "Sharp Grotesk";
  font-weight: 600;
  font-size: 0.8rem;
  color: #ffc148;
  margin-top: 9px;
`;
const Title = styled.div`
  font-family: "Sharp Grotesk Regular";
  font-weight: 500;
  font-size: 1.3rem;
  color: white;
`;

const Subtitle = styled.div`
  font-family: "Sharp Grotesk Regular";
  font-weight: 400;
  font-size: 0.8rem;
  color: #a2a2a2;
  align-self: flex-start;
  margin-top: 10px;
`;

export default LeftPane;
