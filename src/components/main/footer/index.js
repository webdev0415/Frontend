import React from "react";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import SearchIcon from '@material-ui/icons/Search';
import {Row, Col} from "antd";
import { 
  FooterWrapper, 
  InnerContainer, 
  ColTitle, 
  ColText, 
  SearchForm,
  SearchInput,
  SearchBtn,
  FooterContainer
} from "./styles";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <InnerContainer>
        <Row>
          <Col span={6}>
            <ColTitle> Contact Us</ColTitle>
            <ColText><PhoneIcon />{" "} (+01)123-456-7890</ColText>
            <ColText ><EmailIcon />manager@shop.com</ColText>
            <ColText><LocationOnIcon />Location store</ColText>
          </Col>
          <Col span={4}>
            <ColTitle>Policies & Info</ColTitle>
            <ColText>Terms Conditions</ColText>
            <ColText>Policy for Sellers</ColText>
            <ColText>Policy for Buyers</ColText>
            <ColText>Shipping & Refund</ColText>
            <ColText>Wholesale Policy</ColText>
          </Col>
          <Col span={4}>
            <ColTitle>Quick Links</ColTitle>
            <ColText>Terms Conditions</ColText>
            <ColText>Policy for Sellers</ColText>
            <ColText>Policy for Buyers</ColText>
            <ColText>Shipping & Refund</ColText>
            <ColText>Wholesale Policy</ColText>
          </Col>
            <Col span={4}>
            <ColTitle>My account</ColTitle>
            <ColText>Terms Conditions</ColText>
            <ColText>Policy for Sellers</ColText>
            <ColText>Policy for Buyers</ColText>
            <ColText>Shipping & Refund</ColText>
            <ColText>Wholesale Policy</ColText>
            </Col>
            <Col span={6}>
            <ColTitle>Subscribe Now</ColTitle>
            <ColText>Terms Conditions</ColText>
            <SearchForm>
              <SearchInput />
              <SearchBtn> <SearchIcon /></SearchBtn>
            </SearchForm>
            <div className="flex flex-row mt-4">
              <FacebookIcon />
              <TwitterIcon />
              <YouTubeIcon />
              <RssFeedIcon />
            </div>
            </Col>  
            </Row>  
            </InnerContainer>  
          </FooterWrapper>
      <FooterContainer>
      <InnerContainer>
        <Row>
          <Col span={16} />
          <Col span={8}>
          <img src="https://img.icons8.com/plasticine/48/000000/google-wallet.png" alt="payment1" />
          <img src="https://img.icons8.com/fluent/48/000000/bitcoin.png" alt="payment2" />
          <img src="https://img.icons8.com/officel/48/000000/discover.png" alt="payment3" />
          <img src="https://img.icons8.com/fluent/48/000000/mastercard.png" alt="payment4" />
          <img src="https://img.icons8.com/fluent/48/000000/paypal.png" alt="payment5" />
          <img src="https://img.icons8.com/color/48/000000/visa.png" alt="payment6" />
          </Col>
        </Row>
      </InnerContainer>   
      </FooterContainer>
      </>
  );
};

export default Footer;
