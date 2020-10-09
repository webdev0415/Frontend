import React from "react";
import {Row, Col} from "antd"; 
import { Card } from 'antd';
import { Typography } from 'antd';
import { Title,
  WeeklyDealsWrapper, 
  InnerContainer
} from "./styles";

const  WeeklyDeals = () => {
  return ( 
      <WeeklyDealsWrapper>
        <InnerContainer>
        <Row>         <Col span={24}>    <Title>Weekly Deals <a href="">Show More</a></Title>
</Col>
          <Col span={8}>
        <img className="leftimg" alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /> 
          </Col>
          <Col span={18}>
     
          </Col>     
         
            </Row>  
            </InnerContainer>  
          </WeeklyDealsWrapper>
      
  );
};

export default WeeklyDeals;
