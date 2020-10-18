import React from "react";   
import { Comment, Avatar } from 'antd';
import StarRatings from 'react-star-ratings'
import {useSelector} from "react-redux"
import {  ReviewsWrapper,
  AddReviewsButton,
  Rates
} from "./styles";

const Reviews = () => {
  const details = useSelector(state=>state.products.productdetail)
  if (details && details.length > 0) {

  }
  return ( 
      <ReviewsWrapper>        
           <AddReviewsButton>Add Reviews</AddReviewsButton> 
           {
             details && details.length > 0 && details[0].reviews.map((el, index)=>
               <Comment
                  key={index}
                  author={<a>Olen Chabanov</a>}
                  avatar={
                    <Avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      alt="Han Solo"
                    /> 
                 
                  }
                  content={  
                    <div>
                    <Rates> 
                    <StarRatings
                      rating={el.rating}
                      starDimension="18px"
                      starSpacing="1px"
                      starRatedColor="#ffd700"
                      starEmptyColor="grey"
                      numberOfStars={5}
                    /></Rates>
                      {el.content}
                    </div>
                  }
                  datetime={
                    el.date
                  }
                
                />
               )
           }   
           

          </ReviewsWrapper>
      
  );
};

export default Reviews;
