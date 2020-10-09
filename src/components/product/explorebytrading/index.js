import React from "react";
import {Row, Col} from "antd"; 
import { Card } from 'antd';
import { Typography } from 'antd';
import { Title,
  ExplorebytradingWrapper, 
  InnerContainer
} from "./styles";

const  Explorebytrading = () => {
  return ( 
      <ExplorebytradingWrapper>
        <InnerContainer>
        <Row>         <Col span={24}>    <Title>Explore by trading 2020 <a href="">View More</a></Title>
</Col>
          <Col span={8}>
          <Card 
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  <Card title="Popular Products"> </Card>
  </Card> 
          </Col>
          <Col span={8}>
          <Card   
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
   <Card title="New Arrivals"> </Card>
  </Card> 
          </Col>     
          <Col span={8}>
          <Card 
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Card title="Fashion & Kids"> </Card>

  </Card> 
            </Col>         
            </Row>  
            </InnerContainer>  
          </ExplorebytradingWrapper>
      
  );
};

export default Explorebytrading;
