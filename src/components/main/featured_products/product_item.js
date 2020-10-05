import React from "react";
import ReactStars from "react-rating-stars-component";

import { ProductContainer, ImageContainer } from "./styles";
const ProductItem = ({data}) => {
  return (
    <ProductContainer>
      <ImageContainer>
        <img src={data.image} alt="placeholder" />
      </ImageContainer>
      <ReactStars
        edit={true}
        value={data.rate}
        size={24}
        isHalf={true}
        activeColor="#ffd700"
      />
      <p className="text-sm">{data.title}</p>
      <p className="text-lg font-bold">
        ${data.low} - ${data.high}
      </p>
      <p className="text-sm">{data.min} Pieces (Min Order)</p>
    </ProductContainer>
  );
};

export default ProductItem;
