import React from "react";
import ReactStars from "react-rating-stars-component";
import StarRatings from 'react-star-ratings'
import { ProductContainer, ImageContainer } from "./styles";
const ProductItem = ({data}) => {
  return (
    <ProductContainer>
      <ImageContainer>
        <img src={data.image} alt="placeholder" />
      </ImageContainer>
      <StarRatings
        rating={data.rating}
        starDimension="24px"
        starSpacing="1px"
        starRatedColor="#ffd700"
        starEmptyColor="grey"
        numberOfStars={5}
      />
      <p className="text-sm">{data.title}</p>
      <p className="text-lg font-weight-bold">
        ${data.low} - ${data.high}
      </p>
      <p className="text-sm">{data.min} Pieces (Min Order)</p>
    </ProductContainer>
  );
};

export default ProductItem;
