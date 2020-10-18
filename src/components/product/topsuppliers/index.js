import React from "react";
import {Row, Col, Card, Button} from "antd"; 
import {useSelector, useDispatch} from "react-redux"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import {Link} from "react-router-dom"
import { Title,
  TopSuppliersWrapper, 
  InnerContainer,
  Colwraps
} from "./styles";
import {getTopSuppliers} from "../../../store/action"

const  TopSuppliers = () => {
  const dispatch = useDispatch()
  const topsupply = useSelector(state=>state.products.topsupply)
  React.useEffect(()=>{
    dispatch(getTopSuppliers())
  }, [])
  return ( 
      <TopSuppliersWrapper>
        <InnerContainer>
        <Row>         
          <Col span={24}>    
            <Title>Top Suppliers <a href="">Show More</a></Title>
          </Col>
          {
            topsupply && topsupply.length > 0 && topsupply.filter((el, index)=> index < 2).map((el, index)=>

              <Col span={12} key={index}> 
              <Link to="product/detail">   
            <Colwraps>  
              <Row>   
                <Col span={4}>    
                  <Button type="danger" shape="round">{el.username.charAt(0)}</Button> 
                </Col>  
                <Col span={20}>
                  <h5>{el.username}</h5>
                  {
                    el.verified && (<div><VerifiedUserIcon style={{fontSize: 15}} color="primary" /><span>VERIFIED</span></div>)
                  }
                  
                </Col>   
              </Row>
              <Row style={{marginTop: '10px'}}>
              {
                el.products.length > 0 && el.products.filter((item, index)=> index < 3).map((item, index)=>
                  <Col span={8} key={index}>  
                    <Card 
                        cover={<img alt={`image${index}`} src={item.image} />}
                    >
                      <Card title={`${item.low} - ${item.high}`}> </Card>
                    </Card> 
                  </Col> 
                  )
              }
             </Row>   
             </Colwraps>   
             </Link> 
             </Col>   
              )
          }
        </Row>  
      </InnerContainer>  
    </TopSuppliersWrapper>
      
  );
};

export default TopSuppliers;
