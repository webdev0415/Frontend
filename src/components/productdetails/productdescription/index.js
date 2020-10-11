import React from "react";  
import { Tabs } from 'antd';
import { Typography } from 'antd';
import { Image } from 'antd';
import { Descriptions } from 'antd';
import Reviews from "../reviews"


import {  
  InnerContainer
} from "./styles";
const { Title } = Typography;
const { Paragraph } = Typography;

const { TabPane } = Tabs; 
class ProductDescription extends React.Component {
  state = {
    tabPosition: 'top',
  };  

  render() {
    return (   <InnerContainer>
      <div>    
      <div className="card-container">
    <Tabs type="card"  tabPosition={this.state.tabPosition}>
          <TabPane tab="Description" key="1">
          <Title level={3}> Description</Title>  
          <Paragraph>
      Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
      Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
      a design language for background applications, is refined by Ant UED Team. Ant Design, a
      design language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team.
    </Paragraph>
    <Image 
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />  <Paragraph>
    Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
    a design language for background applications, is refined by Ant UED Team. Ant Design, a
    design language for background applications, is refined by Ant UED Team. Ant Design, a design
    language for background applications, is refined by Ant UED Team. Ant Design, a design
    language for background applications, is refined by Ant UED Team.
  </Paragraph>
  <Image 
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
          </TabPane>
          <TabPane tab="Additional Information" key="2">
          <Title level={3}> Additional Information</Title>   
          <Descriptions layout="Horizontal" bordered>
    <Descriptions.Item label="Material">Acrylic</Descriptions.Item>   
  </Descriptions>
  <Descriptions layout="Horizontal" bordered>
    <Descriptions.Item label="Gender">Women</Descriptions.Item>   
  </Descriptions>
  <Descriptions layout="Horizontal" bordered>
    <Descriptions.Item label="Item Type">Scarf</Descriptions.Item>   
  </Descriptions>
  <Descriptions layout="Horizontal" bordered>
    <Descriptions.Item label="Product Name">Infinity Scraf</Descriptions.Item>   
  </Descriptions>
  <Descriptions layout="Horizontal" bordered>
    <Descriptions.Item label="Color">Customized Colours</Descriptions.Item>   
  </Descriptions>
  <Descriptions layout="Horizontal" bordered>
    <Descriptions.Item label="Item Type">90x190 cm</Descriptions.Item>   
  </Descriptions>
          </TabPane>
          <TabPane tab="Reviews (1)" key="3">
          <Title level={3}> Reviews</Title>   
          <Reviews />

          </TabPane>
        </Tabs>
        </div>
      </div> </InnerContainer>
    );
  }
}

export default ProductDescription;
