import React from "react";

import {
  ItemContainer,
  ImageContainer,
  ContentContainer,
  ReadMoreButton
} from "./styles";

const BlogItem = ({data}) => {
  return (
    <ItemContainer><div className="row"><div className="col-md-4 p-0 pl-2">
      <ImageContainer>
        <img
          className="w-full h-full object-cover"
          src={data.image}
          alt="placeholder" width="100%"
        />
      </ImageContainer></div><div className="col-md-8 p-0">
      <ContentContainer>
        <p className="text-gray-500 text-sm mt-2">{data.date}</p>
        <p className="font-bold mt-2">{data.title}</p>
        <p className="text-sm mt-2">{data.summary}</p>
        <ReadMoreButton>Read More</ReadMoreButton>
      </ContentContainer></div></div>
    </ItemContainer>
  );
};

export default BlogItem;
