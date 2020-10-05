import React, { useState } from "react";

import {
  Container,
  Title,
  SelectedContainer,
  SelectedTitleContainer,
  SelectedDescContainer,
  SelectedTitle,
  FormContainer,
  DescHeader,
  DescBody,
  FormTitle,
  FormDesc,
  FormInput,
  RowContainer,
  SubmitButton
} from "./styles";

const Quotation = (props) => {
  return (
    <><div className="container"><br/><br/><br/><br/><br/><br/><br/>
     <h2> <Title>Request for Quotation</Title></h2>
     <ul className="nav nav-tabs">
        <li className="nav-item">
          <span className="inline-block py-2 px-3 cursor-pointer text-black">
            Customization Service
          </span>
        </li>
      </ul>
      <Container><div className="col-md-12"><div className="row"><div className="col-md-6 uvs-imgbg">  
        <SelectedContainer>
          {/* <img src="https://via.placeholder.com/400" alt="placeholder" /> */}
          <SelectedTitleContainer>
      <h3>      <SelectedTitle>A Wholesale Marketplace</SelectedTitle></h3><br/><br/><br/><br/>
          </SelectedTitleContainer>
          <SelectedDescContainer>
            <DescHeader>5,320</DescHeader>
            <DescBody>Industries</DescBody>
            <div className="row">
              <div className="col-md-6">
                <DescHeader>1,60,984</DescHeader>
                <DescBody>Active Suppliers</DescBody>
              </div>
              <div className="col-md-6">
                <DescHeader>{"<"} 12 hrs</DescHeader>
                <DescBody>Avg. Quotation Duration</DescBody>
              </div>
            </div>
          </SelectedDescContainer>
        </SelectedContainer></div><div className="col-md-6 padding-left-uvs0"> <div className="uvs-form">
        <FormContainer>
         <h3> <FormTitle>One Request, Multiple Quotes</FormTitle></h3>
          <FormDesc>Fill details below</FormDesc>
          <RowContainer>
           <FormInput type="input" className="form-control " placeholder="What are you looking for..." />
         <br/>   </RowContainer>
          <RowContainer> <div class="row"> 
          <div className="col-md-6">    <FormInput type="input"  className="form-control "  placeholder="Quantity" />
          </div>  <div className="col-md-6"> <select className="form-control">
              <option>Pieces</option>
              <option>Pieces</option>
              <option>Pieces</option>
            </select></div></div>
          </RowContainer>
          <SubmitButton className="btn btn-uvs-form" >Request for quotation</SubmitButton>
        </FormContainer></div></div> </div>  </div>
      </Container>  </div>
    </>
  );
};

export default Quotation;
