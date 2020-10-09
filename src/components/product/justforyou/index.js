import React from "react";
import {Row, Col} from "antd"; 
import { Card } from 'antd';
import { Typography } from 'antd';
import { Title,
  JustForYouWrapper, 
  InnerContainer
} from "./styles";

const  JustForYou = () => {
  return ( 
      <JustForYouWrapper>
        <InnerContainer>
        <Row>         <Col span={24}>    <Title> Just For You <a href="">View More</a></Title>
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
          </JustForYouWrapper>
      
  );
};

export default JustForYou;
