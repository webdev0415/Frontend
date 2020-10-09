import React from "react";
import {Row, Col} from "antd"; 
import { Card } from 'antd';
import { Typography } from 'antd';
import { Rate } from 'antd';
import { Title,
  WeeklyDealsWrapper, Colwraps,
  InnerContainer
} from "./styles";

const  WeeklyDeals = () => {
  return ( 
      <WeeklyDealsWrapper>
        <InnerContainer>
        <Row>         <Col span={24}>    <Title>Weekly Deals <a href="">Show More</a></Title>
</Col>
          <Col span={6}>
        <img className="leftimg" alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /> 
         </Col>
          <Col span={18}>
          <Colwraps>  
        
          <Row>   <Col span={8}>   <Card  
  > <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />  <Rate allowHalf defaultValue={2.5} /> 
   <p>New Spring & Autumn Personality High Waist</p>
  <Card title="$9.00 - $12.00"> </Card>
  <p>100 Pieces (Min order)</p>
  </Card> 
  </Col>     <Col span={8}>   <Card  
  > <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /><Rate allowHalf defaultValue={2.5} /> 
  <p>New Spring & Autumn Personality High Waist</p>
  <Card title="$9.00 - $12.00"> </Card>
  <p>100 Pieces (Min order)</p>
  </Card>   
  </Col>     <Col span={8}>  <Card  
  > <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /> <Rate allowHalf defaultValue={2.5} /> 
   <p>New Spring & Autumn Personality High Waist</p>
  <Card title="$9.00 - $12.00"> </Card>
  <p>100 Pieces (Min order)</p>
  </Card> 
  
  </Col>     

 

         
         </Row>   </Colwraps>  
          </Col>     
         
            </Row>  
            </InnerContainer>  
          </WeeklyDealsWrapper>
      
  );
};

export default WeeklyDeals;
