import React from "react";
import {Row, Col} from "antd"; 
import Profile from "../profile";
import PersonalInfo from "../personalinfo";
import CompanyInfo from "../companyinfo";
import VendorInfo from "../vendorinfo"
import { 
  LayoutPageWrapper, 
  InnerContainer
} from "./styles";

const LayoutPage = () => {
  return ( 
      <LayoutPageWrapper>
        <InnerContainer>
        <Row>      
          <Col span={24}>
           <Profile />
          </Col>
          <Col span={8}>
          <PersonalInfo />
          </Col>         
          <Col span={16}>
          <CompanyInfo />
            </Col>    
            <Col span={24}>
            <VendorInfo />
            </Col>    
        </Row>  
        </InnerContainer>  
      </LayoutPageWrapper>
      
  );
};

export default LayoutPage;
