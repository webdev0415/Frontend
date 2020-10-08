import React from "react";
import {Row, Col} from "antd";
import ProductSider from "../productsider"
import { 
  LayoutPageWrapper, 
  InnerContainer
} from "./styles";

const LayoutPage = () => {
  return ( 
      <LayoutPageWrapper>
        <InnerContainer>
        <Row>      
          <Col span={3}>
          <ProductSider />
          </Col>
          <Col span={9}>
            
          </Col>         
            </Row>  
            </InnerContainer>  
          </LayoutPageWrapper>
      
  );
};

export default LayoutPage;
