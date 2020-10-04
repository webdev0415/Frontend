import React from "react";

import {
  ItemContainer,
  ImageContainer,
  ContentContainer,
  ReadMoreButton
} from "./styles";

const BlogItem = ({data}) => {
  return (
    <ItemContainer>
      <ImageContainer>
        <img
          className="w-full h-full object-cover"
          src={data.image}
          alt="placeholder"
        />
      </ImageContainer>
      <ContentContainer>
        <p className="text-gray-500 text-sm mt-2">{data.date}</p>
        <p className="font-bold mt-2">{data.title}</p>
        <p className="text-sm mt-2">{data.summary}</p>
        <ReadMoreButton>Read More</ReadMoreButton>
      </ContentContainer>
    </ItemContainer>
  );
};

export default BlogItem;
