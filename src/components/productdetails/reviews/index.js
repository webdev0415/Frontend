import React from "react";   
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { Rate } from 'antd';

import {  ReviewsWrapper,
  AddReviewsButton,
  Rates
} from "./styles";

const Reviews = () => {
  return ( 
      <ReviewsWrapper>        
           <AddReviewsButton>Add Reviews</AddReviewsButton>    
           <Comment
           
      author={<a>Olen Chabanov</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        /> 
     
      }
      content={  
        <p> <Rates><Rate disabled defaultValue={4} /></Rates>
Lorem ipusum We supply a series of design principles, practical patterns and high quality design design design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().format('YYYY-MM-DD HH:mm:ss')}</span>
        </Tooltip>
      }
    
    />

          </ReviewsWrapper>
      
  );
};

export default Reviews;
