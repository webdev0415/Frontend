import React from "react";
import {Row, Col, Card} from "antd"; 
import StarRatings from 'react-star-ratings'
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import {getWeeklyDeals} from "../../../store/action"
import { 
  Title,
  WeeklyDealsWrapper,
  Colwraps,
  InnerContainer
} from "./styles";

const  WeeklyDeals = () => {
  const dispatch = useDispatch()
  React.useEffect(()=> {
    dispatch(getWeeklyDeals())
  }, [])
  const weeklydeals = useSelector(state=>state.products.weeklydeals)
  return ( 
      <WeeklyDealsWrapper>
        <InnerContainer>
        <Row>         
        <Col span={24}>    
          <Title>Weekly Deals <a href="">Show More</a></Title>
        </Col>
        
        {
          weeklydeals && weeklydeals.length > 0 && weeklydeals.filter((el, index)=> index < 1).map((el, index)=>
            <>
            <Col span={6}>
              <img className="leftimg" alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /> 
            </Col>
            <Col span={18}>
              <Colwraps>  
              <Row>   
              {
                el.products && el.products.length > 0 && el.products.filter((item, index)=> index < 3).map((item, index)=>
                  
                  <Col span={8} key={index}>  
                  <Link to="/product/detail"> 
                    <Card> 
                      <img alt="example" src={item.image} />  
                      <StarRatings
                        rating={item.rating}
                        starDimension="24px"
                        starSpacing="1px"
                        starRatedColor="#ffd700"
                        starEmptyColor="grey"
                        numberOfStars={5}
                      />
                      <p>{item.title}</p>
                      <Card title={`${item.low} - ${item.high}`} />
                      <p>{item.min} Pieces (Min order)</p>
                    </Card> 
                    </Link>
                  </Col> 
                    
                  )
              }
              </Row>   
               </Colwraps>  
            </Col> 
            </>   
            )
        }
        </Row>  
      </InnerContainer>  
    </WeeklyDealsWrapper>
      
  );
};

export default WeeklyDeals;
