import React from "react";
import {Row, Col} from "antd";
import ProductSider from "../productsider"
import ExplorebyTrading from "../explorebytrading"
import TopSuppliers from "../topsuppliers"
import WeeklyDeals from "../weeklydeals"
import TopRankingProducts from "../toprankingproducts"
import JustForYou from "../justforyou" 
import RecentlyViewed from "../recentlyviewed" 
import { 
  LayoutPageWrapper, 
  InnerContainer
} from "./styles";

const LayoutPage = () => {
  return ( 
      <LayoutPageWrapper>
        <InnerContainer>
        <Row>      
          <Col span={6}>
          <ProductSider />
          </Col>
          <Col span={18}>
          <ExplorebyTrading />
          <TopSuppliers />
          <WeeklyDeals />
          <TopRankingProducts />
          <JustForYou />
          <RecentlyViewed />
          </Col>         
            </Row>  
            </InnerContainer>  
          </LayoutPageWrapper>
      
  );
};

export default LayoutPage;
