import React from "react";
import styled from "styled-components";
import ProfileIcon from "../../assets/images/ProfileIcon.svg";
import TwitterIcon from "../../assets/images/twitter-icon.svg";
import GlobeIcon from "../../assets/images/Vectorglobe-final.svg";

import Community1 from "../../assets/images/Rectangle1599.svg";
import Community2 from "../../assets/images/Rectangle1600.svg";
import Community3 from "../../assets/images/Rectangle1601.svg";
import Community4 from "../../assets/images/Rectangle1602.svg";

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
        communityPhoto: Community1,
      },
      {
        communityId: "456",
        communityPhoto: Community2,
      },
      {
        communityId: "789",
        communityPhoto: Community3,
      },
      {
        communityId: "239",
        communityPhoto: Community4,
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
          <Column margin="0px 6px 10px 0px">
            <img src={ProfileIcon} alt="profile icon" />
            <LevelDiv>{`LVL ${user.level}`}</LevelDiv>
          </Column>
          <Column margin="10px" centered>
            <Title>{`${user.name}`}</Title>
            <Subtitle>{`${user.shortDesc}`}</Subtitle>
          </Column>
        </Row>
        <Row margin="10% 0px 0px 0px">
          <TwitterContainer>
            <img src={TwitterIcon} alt="twitter icon" />
            <TwitterHandle>{`@${user.twitterHandle}`}</TwitterHandle>
          </TwitterContainer>
          <WebsiteContainer>
            <img src={GlobeIcon} alt="twitter icon" />
          </WebsiteContainer>
        </Row>
        <Row margin="12% 0px 0px 0px">
          <DescriptionText>{`${user.description}`}</DescriptionText>
        </Row>
        <Column margin="20% 0px 0px 0px">
          <SubtitleTextFontProps>
            {`Common Communities (${user.commonCommunities.length})`}
          </SubtitleTextFontProps>
          <Row wrap>
            {user.commonCommunities.length > 0 &&
              user.commonCommunities.map((community) => (
                <CommonCommunityContainer>
                  <img src={community.communityPhoto} />
                </CommonCommunityContainer>
              ))}
          </Row>
        </Column>
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
  padding-top: 22px;
  padding-left: 22px;
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

const LevelDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 44px;
  padding: 8px;
  padding-right: 0px;
  padding-left: 0px;
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

const TwitterContainer = styled.div`
  background-color: #1a1a1a;
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #a2a2a2;
  font-size: 0.8rem;
  padding: 4px 8px 4px 8px;
`;

const SubtitleTextFontProps = styled.div`
  font-family: "Sharp Grotesk Regular";
  font-weight: 400;
  font-size: 0.8rem;
  color: #a2a2a2;
`;

const TwitterHandle = styled(SubtitleTextFontProps)`
  margin-left: 9px;
`;

const DescriptionText = styled(SubtitleTextFontProps)`
  font-size: 0.9rem;
  padding-right: 10%;
`;

const WebsiteContainer = styled.div`
  border-radius: 24px;
  background-color: #1a1a1a;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
`;

const CommonCommunityContainer = styled.div`
  margin-right: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
`;

export default LeftPane;
