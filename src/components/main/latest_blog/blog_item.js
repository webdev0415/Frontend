import React from "react";

import {
  ItemContainer,
  ImageContainer,
  ContentContainer,
  ReadMoreButton,
  BlogImg,
  Row, 
  Col 
} from "./styles";

const BlogItem = ({data}) => {
  return (
    <ItemContainer>
      <Row>
        <Col className="col-md-4 p-0 pl-4">
          <ImageContainer>
            <BlogImg
              src={data.image}
              alt="placeholder"
            />
          </ImageContainer>
        </Col>
        <Col className="col-md-8 p-0">
          <ContentContainer>
            <p className="text-gray-500 text-sm mt-2">{data.date}</p>
            <p className="font-weight-bold mt-2">{data.title}</p>
            <p className="text-sm mt-2">{data.summary}</p>
            <ReadMoreButton>Read More</ReadMoreButton>
          </ContentContainer>
        </Col>
      </Row>
    </ItemContainer>
  );
};

export default BlogItem;
