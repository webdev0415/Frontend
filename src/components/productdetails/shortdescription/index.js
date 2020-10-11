import React from "react";    
import {Row, Col} from "antd";
import { Rate } from 'antd';
import { Typography } from 'antd';
import { Radio } from 'antd';
import { Avatar } from 'antd'; 

import {  ShortDescriptionWrapper, 
  Shorttopinfo,
  Shortcolor,
  Shortsize,
  Shortprice,
  Rates
} from "./styles";
const { Title,Text } = Typography;

function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}

const ShortDescription = () => {
  return ( 
    <ShortDescriptionWrapper>
        <Shorttopinfo>
         <Row>      
          <Col span={7}>
          <Rates><Rate disabled defaultValue={4} /></Rates>
          </Col>
          <Col span={10}> 
          1 Customer Review
          </Col>   
          <Col span={7}>  
          SKU ED1420
          </Col>         
            </Row>             
            <Title level={5}> Scarf Fashion Winter Cotton Feeling Western Style Soft Light Flower Printed Custom Scarf</Title>
            <Text type="success">In Stock</Text>

             </Shorttopinfo>
             <Shortcolor>
         <Row>      
          <Col span={3}>
       Colour
          </Col>
          <Col span={21}> 
          <Radio.Group onChange={onChange} defaultValue="a">
      <Radio.Button value="a">   <Avatar
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />  </Radio.Button>
      <Radio.Button value="b">  <Avatar
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    /> </Radio.Button>
      <Radio.Button value="c">  <Avatar
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    /> </Radio.Button>
    </Radio.Group>   
          </Col>   
           
            </Row>             
       
             </Shortcolor>
             <Shortsize>
         <Row>      
          <Col span={3}>
        Size
          </Col>
          <Col span={21}> 
          <Radio.Group onChange={onChange} defaultValue="a">
      <Radio.Button value="a">L</Radio.Button>
      <Radio.Button value="b">XL</Radio.Button>
      <Radio.Button value="c">XXL</Radio.Button>
    </Radio.Group>   2 More Sizes
          </Col>   
           
            </Row>             
       
             </Shortsize>
             <Shortprice>
             Price
             <Row>      
          <Col span={6}>1 - 1000<br />
          <Text strong>$ 10.99 </Text>
            </Col>
            <Col span={6}>1001 - 2000<br />
            <Text strong> $ 9.99</Text>
            </Col>
            <Col span={6}>20001-5000 <br />
            <Text strong>  $ 8.99</Text>
            </Col>
            <Col span={6}> 5000&gt; <br />
            <Text strong> $ 7.99</Text>
            </Col> </Row>          
             </Shortprice>
             <Shortprice>
             Delivery
             <Row>      
          <Col span={6}>1 - 5000<br />
          <Text strong>10 Days</Text>
            </Col> 
            <Col span={6}> 5000&gt; <br />
            <Text strong> 15 Days</Text>
            </Col> </Row>          
             </Shortprice>
 
   </ShortDescriptionWrapper>
      
  );
};

export default ShortDescription;
