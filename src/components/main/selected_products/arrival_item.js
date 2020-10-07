import React from "react";
import { Card } from 'antd';
import { ArrivalContainer, ArrivalTitle, Description, ImageContainer, ImageItem } from "./styles";

const ArrivalItem = ({title, description, height, backColor, srcimg}) => {
  return (
  	<Card bordered={false} style={{ marginTop: '2px', height: `${height}`}}>
  		<ArrivalTitle>{title}</ArrivalTitle>
      <Description>{description}</Description>
      <ImageContainer height={133}>
        <ImageItem src={srcimg} />
      </ImageContainer>
    </Card>

  );
};

export default ArrivalItem;
