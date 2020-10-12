import React from "react";
import {Row, Col} from "antd";
import ProductGallery from "../productgallery" 
import MessageBox from "../messagebox"
import ProductDescription from "../productdescription"
import ShortDescription from "../shortdescription"
import { 
  ProductDetailsWrapper, 
  InnerContainer
} from "./styles";

const ProductDetails = () => {
  return ( 
      <ProductDetailsWrapper>
        <InnerContainer>
        <Row>      
          <Col span={12}>
          <ProductGallery />
          </Col>
          <Col span={10}> 
          <ShortDescription />
          </Col>   
         
                 
            </Row>   <MessageBox />
            <Row>      
          <Col span={24}>
            <ProductDescription />
            </Col>         
            </Row>  
            </InnerContainer>  
          </ProductDetailsWrapper>
      
  );
};

export default ProductDetails;
