import React from "react";  
import { Tabs, Typography, Image, Descriptions } from 'antd';
import {useSelector} from "react-redux"
import Reviews from "../reviews"
import {  
  InnerContainer
} from "./styles";

const { Title } = Typography;
const { Paragraph } = Typography;

const { TabPane } = Tabs; 
const ProductDescription = () => {
  const details = useSelector(state=>state.products.productdetail)
  let total_reviews
  if (details && details.length > 0) {
    total_reviews = details[0].total_reviews
  }
  return (
    <InnerContainer>
      <div>    
      <div className="card-container">
      <Tabs type="card"  tabPosition='top'>
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
          />  
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
          />
        </TabPane>
        <TabPane tab="Additional Information" key="2">
          <Title level={3}> Additional Information</Title> 
          {
            details && details.length > 0 && Object.keys(details[0].specification).map((el, index)=>
              <Descriptions layout="Horizontal" key={index} bordered>
                <Descriptions.Item label={el}>{details[0].specification[el]}</Descriptions.Item>   
              </Descriptions>
              )
          }  
        </TabPane>
        <TabPane tab={`Reviews (${total_reviews})`} key="3">
          <Title level={3}> Reviews</Title>   
          <Reviews />

          </TabPane>
        </Tabs>
        </div>
      </div> </InnerContainer>
    )
}


export default ProductDescription;
