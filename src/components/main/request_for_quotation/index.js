import React from "react";

import {
  FullContainer,
  Container,
  Title,
  SelectedContainer,
  SelectedDescContainer,
  SelectedTitle,
  FormContainer,
  DescHeader,
  DescBody,
  FormTitle,
  FormDesc,
  FormInput,
  RowContainer,
  SubmitButton,
  Row,
  Col2,
  DescItem,
  FormSelect
} from "./styles";
import {
  NavTabs,
  NavItem,
  NavTxt
} from "../featured_products/styles"
const Quotation = () => {
  return (

    <FullContainer>
     <Title>Request for Quotation</Title>
     <NavTabs>
        <NavItem>
          <NavTxt>
            Customization Service
          </NavTxt>
        </NavItem>
      </NavTabs>
      <Container>
        <SelectedContainer>

           <SelectedTitle>A Wholesale Marketplace</SelectedTitle>

          <SelectedDescContainer>
            <DescItem style={{gridArea: 'row1'}}>
              <DescHeader>5,320</DescHeader>
              <DescBody>Industries</DescBody>
            </DescItem>
            <DescItem style={{gridArea: 'row21'}}>
              <DescHeader>1,60,984</DescHeader>
              <DescBody>Active Suppliers</DescBody>
            </DescItem>
            <DescItem style={{gridArea: 'row22'}}>
              <DescHeader>{"<"} 12 hrs</DescHeader>
                <DescBody>Avg. Quotation Duration</DescBody>
            </DescItem>
          </SelectedDescContainer>
        </SelectedContainer>
        <FormContainer>
         <FormTitle>One Request, Multiple Quotes</FormTitle>
          <FormDesc>Fill details below</FormDesc>
          <RowContainer>
           <FormInput placeholder="What are you looking for..." />
            </RowContainer>
          <RowContainer>
          <Row> 
          <Col2>    
          <FormInput placeholder="Quantity" />
          </Col2>  
          <Col2> 
            <FormSelect className="form-control">
              <option>Pieces</option>
              <option>Pieces</option>
              <option>Pieces</option>
            </FormSelect>
            </Col2>
            </Row>
          </RowContainer>
          <SubmitButton>Request for quotation</SubmitButton>
        </FormContainer>


      </Container>  
      </FullContainer>

  );
};

export default Quotation;
