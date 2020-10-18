import React from "react";
import {Row, Col, Card} from "antd"; 
import {useSelector, useDispatch} from "react-redux"
import {getTrending} from "../../../store/action"
import { 
  Title,
  ExplorebytradingWrapper, 
  InnerContainer
} from "./styles";

const  Explorebytrading = () => {

  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(getTrending())
  },[])
  const trending = useSelector(state=>state.products.trending)
  return ( 
      <ExplorebytradingWrapper>
        <InnerContainer>
        <Row>         
        <Col span={24}>    
          <Title>Explore by trading 2020 <a href="">View More</a></Title>
        </Col>
        {
          trending && trending.length > 0 && trending.map((el, index)=>
            <Col span={8} key={index}>
              <Card
                style={{ width: 240 }}
                cover={<img alt="example" src={el.image} />}
              >
                <h5>{el.title}</h5>
              </Card> 
             </Col>
            ) 
        }    
        </Row>  
        </InnerContainer>  
    </ExplorebytradingWrapper>
      
  );
};

export default Explorebytrading;
