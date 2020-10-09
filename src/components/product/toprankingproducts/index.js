import React from "react";
import {Row, Col} from "antd"; 
import { Card } from 'antd';
import { Typography } from 'antd';
import { Title,
  TopRankingProductsWrapper, 
  InnerContainer
} from "./styles";

const  TopRankingProducts = () => {
  return ( 
      <TopRankingProductsWrapper>
        <InnerContainer>
        <Row>         <Col span={24}>    <Title>Top Ranking Products <a href="">View More</a></Title>
</Col>
          <Col span={8}>
          <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  <Card title="Popular Products"> </Card>
  </Card> 
          </Col>
          <Col span={8}>
          <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
   <Card title="New Arrivals"> </Card>
  </Card> 
          </Col>     
          <Col span={8}>
          <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Card title="Fashion & Kids"> </Card>

  </Card> 
            </Col>         
            </Row>  
            </InnerContainer>  
          </TopRankingProductsWrapper>
      
  );
};

export default TopRankingProducts;
