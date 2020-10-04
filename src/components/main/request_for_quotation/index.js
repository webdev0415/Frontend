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
    <>
      <Title>Request for Quotation</Title>
      <ul class="flex border-b-2 border-blue-800 my-5 mx-10">
        <li class="mr-3 ml-3">
          <span className="inline-block py-2 px-3 cursor-pointer text-black">
            Customization Service
          </span>
        </li>
      </ul>
      <Container>
        <SelectedContainer>
          {/* <img src="https://via.placeholder.com/400" alt="placeholder" /> */}
          <SelectedTitleContainer>
            <SelectedTitle>A Wholesale Marketplace</SelectedTitle>
          </SelectedTitleContainer>
          <SelectedDescContainer>
            <DescHeader>5,320</DescHeader>
            <DescBody>Industries</DescBody>
            <div className="flex-row flex flex-1 justify-between w-full">
              <div className="flex flex-col flex-1 w-1/2">
                <DescHeader>1,60,984</DescHeader>
                <DescBody>Active Suppliers</DescBody>
              </div>
              <div className="flex flex-col flex-1 w-1/2">
                <DescHeader>{"<"} 12 hrs</DescHeader>
                <DescBody>Avg. Quotation Duration</DescBody>
              </div>
            </div>
          </SelectedDescContainer>
        </SelectedContainer>
        <FormContainer>
          <FormTitle>One Request, Multiple Quotes</FormTitle>
          <FormDesc>Fill details below</FormDesc>
          <RowContainer>
            <FormInput type="input" placeholder="What are you looking for..." />
          </RowContainer>
          <RowContainer>
            <FormInput type="input" placeholder="Quantity" />
            <select className="flex-1 ml-5 border px-5">
              <option>Pieces</option>
              <option>Pieces</option>
              <option>Pieces</option>
            </select>
          </RowContainer>
          <SubmitButton>Request for quotation</SubmitButton>
        </FormContainer>
      </Container>
    </>
  );
};

export default Quotation;
