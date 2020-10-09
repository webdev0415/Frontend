import React from "react";
import {Row, Col} from "antd"; 
import { Card } from 'antd';
import { Typography } from 'antd';
import { Button } from 'antd';
import { Title,Verified,
  TopSuppliersWrapper, 
  InnerContainer,
  Colwraps
} from "./styles";

const  TopSuppliers = () => {
  return ( 
      <TopSuppliersWrapper>
        <InnerContainer>
        <Row>         <Col span={24}>    <Title>Top Suppliers <a href="">Show More</a></Title>
</Col>
          <Col span={12}>    <Colwraps>  
          <Row>   <Col span={4}>    <Button type="danger" shape="round">M</Button> </Col>  <Col span={20}><h5>Mango Fashion LLC.</h5>
           <Verified><i className="fa fa-shield" ></i>
  VERIFIED</Verified> </Col>   </Row>
          <Row>   <Col span={8}>  <Card 
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  <Card title="$9.00 - $12.00"> </Card>
  </Card> 
  </Col>     <Col span={8}>  <Card 
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  <Card title="$9.00 - $12.00"> </Card>
  </Card> 
  </Col>     <Col span={8}>  <Card 
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  <Card title="$9.00 - $12.00"> </Card>
  </Card> 
  </Col>     
         
         </Row>   </Colwraps>    </Col>     <Col span={12}>    <Colwraps>  
          <Row>   <Col span={4}>    <Button type="danger" shape="round">O</Button> </Col>  <Col span={20}><h5>Oreo Design LLC.</h5>
           <Verified><i className="fa fa-shield" ></i>
  VERIFIED</Verified> </Col>   </Row>
          <Row>   <Col span={8}>  <Card 
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  <Card title="$9.00 - $12.00"> </Card>
  </Card> 
  </Col>     <Col span={8}>  <Card 
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  <Card title="$9.00 - $12.00"> </Card>
  </Card> 
  </Col>     <Col span={8}>  <Card 
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  <Card title="$9.00 - $12.00"> </Card>
  </Card> 
  </Col>     
         
         </Row>   </Colwraps>    </Col>
        
            </Row>  
            </InnerContainer>  
          </TopSuppliersWrapper>
      
  );
};

export default TopSuppliers;
