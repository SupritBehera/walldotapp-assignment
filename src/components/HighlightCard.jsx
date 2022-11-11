import React from "react";
import styled from "styled-components";

const typeToColorMap = {
  "ENS Linked": {
    textColor: "#4BDFFF",
    gradientColor: "rgba(37, 181, 213, 0.1)",
  },
};

const HighlightCard = () => {
  const highlightCardDetails = {
    picture: "g",
    title: "ENS Linked",
    type: "ENS Linked",
    username: "dingaling.eth",
    transactionAmount: 1.82,
    time: "2 months",
  };

  return (
    <>
      <RootContainer type="ENS Linked 2"></RootContainer>
    </>
  );
};

const RootContainer = styled.div`
  position: relative;
  height: 118px;
  width: 231px;
  border-radius: 16px;
  background: #111111;
  padding: 10px;
  margin: 50px;

  ${
    "" /* background: radial-gradient(at top left, rgba(37, 181, 213, 0.1), #111111); */
  }
  background: radial-gradient(at top left, rgba(248, 169, 16, 0.1), #111111);
  background: ${(props) =>
    props.type &&
    typeToColorMap[props.type] &&
    typeToColorMap[props.type].gradientColor
      ? `radial-gradient(at top left, ${
          typeToColorMap[props.type].gradientColor
        }, #111111)`
      : "radial-gradient(at top left, rgba(248, 169, 16, 0.1), #111111)"};
`;

export default HighlightCard;
