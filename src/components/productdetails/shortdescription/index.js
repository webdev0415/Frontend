import React from "react";    
import {Row, Col, Typography, Radio, Avatar} from "antd";
import {useSelector} from "react-redux"
import StarRatings from 'react-star-ratings'
import {  ShortDescriptionWrapper, 
  Shorttopinfo,
  Shortcolor,
  Shortsize,
  Shortprice
} from "./styles";
const { Title,Text } = Typography;

function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}

const ShortDescription = () => {
  const details = useSelector(state=>state.products.productdetail)
  let rating
  if (details && details.length > 0) {
    rating = details[0].rating
  }
  return ( 
    <ShortDescriptionWrapper>
        <Shorttopinfo>
         <Row>      
          <Col span={7}>
            <StarRatings
              rating={rating}
              starDimension="18px"
              starSpacing="1px"
              starRatedColor="#ffd700"
              starEmptyColor="grey"
              numberOfStars={5}
            />
          </Col>
          <Col span={10}> 
          {details && details.length > 0 && details[0].total_reviews} Customer Review
          </Col>   
          <Col span={7}>  
          {details && details.length > 0 && details[0].code}
          </Col>         
         </Row>             
         <Title level={5}> {details && details.length > 0 && details[0].title}</Title>
         <Text type="success">In Stock</Text>
      </Shorttopinfo>
      <Shortcolor>
        <Row>      
          <Col span={3}>Colour</Col>
          <Col span={21}> 
            <Radio.Group onChange={onChange} defaultValue={0}>
              {
                details && details.length > 0 && details[0].colors.map((el, index)=>
                  <Radio.Button value={index} key={index}>   
                    <Avatar src={el.image} />  
                  </Radio.Button>
                  )
              }
            </Radio.Group>   
          </Col>   
        </Row>             
      </Shortcolor>
      <Shortsize>
        <Row>      
          <Col span={3}>Size</Col>
          <Col span={21}> 
            <Radio.Group onChange={onChange} defaultValue={0}>
            {
              details && details.length > 0 && details[0].sizes.map((el, index)=>
                <Radio.Button value={index} key={index}>{el.size}</Radio.Button>
                )
            }
            </Radio.Group>   2 More Sizes
          </Col>   
        </Row>             
      </Shortsize>
      <Shortprice>Price
        <Row>
        {
          details && details.length > 0 && details[0].prices.map((el, index)=>
            <Col span={6} key={index}>{`${el.quantity[0]} - ${el.quantity[1]}`}<br />
              <Text strong>$ {el.price} </Text>
            </Col>
            )
        }      
        </Row>          
      </Shortprice>
      <Shortprice>Delivery
        <Row>      
          <Col span={6}>1 - 5000<br />
            <Text strong>10 Days</Text>
          </Col> 
          <Col span={6}> 5000&gt; <br />
            <Text strong> 15 Days</Text>
          </Col> 
        </Row>          
      </Shortprice>
 
   </ShortDescriptionWrapper>
      
  );
};

export default ShortDescription;
