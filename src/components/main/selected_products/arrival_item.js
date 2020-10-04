import React from "react";

import { ArrivalContainer, ArrivalTitle, Description, ImageContainer, ImageItem } from "./styles";

const ArrivalItem = ({title, description, height, backColor, srcimg}) => {
  return (
    <ArrivalContainer backColor={backColor}>
      <ArrivalTitle>{title}</ArrivalTitle>
      <Description>{description}</Description>
      <ImageContainer height={height}>
        <ImageItem src={srcimg} />
      </ImageContainer>
    </ArrivalContainer>
  );
};

export default ArrivalItem;
