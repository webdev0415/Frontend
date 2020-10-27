import React from "react";
import {Row, Col} from "antd"
import { Menu, Dropdown } from 'antd';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ChatIcon from '@material-ui/icons/Chat';
import Badge from '@material-ui/core/Badge';
import {Container, ShoppingCartTotal, MenuHeader, ItemQuantity, ItemPrice, ItemImg, ItemName, LogoContainer, SearchBtn, ControllerContainer, SearchInput} from "./styles.js"

const menu = (
  <Menu style={{width: '300px'}}>
    <MenuHeader>
      <Badge badgeContent={1} color="primary">
        <ShoppingCartIcon />
       </Badge>
       <ShoppingCartTotal>
         <ItemQuantity>Total: </ItemQuantity>
         <ItemPrice> $2,229.97</ItemPrice>
       </ShoppingCartTotal>
    </MenuHeader>
    <Menu.Item key="0">
      <ItemImg src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
        <ItemName class="item-name">Sony DSC-RX100M III</ItemName>
        <ItemPrice class="item-price">$849.99</ItemPrice>
        <ItemQuantity class="item-quantity">Quantity: 01</ItemQuantity>
    </Menu.Item>
    <Menu.Item key="1">
      <ItemImg src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" alt="item1" />
        <ItemName class="item-name">KS Automatic Mechanic...</ItemName>
        <ItemPrice class="item-price">$1,249.99</ItemPrice>
        <ItemQuantity class="item-quantity">Quantity: 01</ItemQuantity>
    </Menu.Item>
    <Menu.Item key="3">
    <ItemImg src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" alt="item1" />
        <ItemName class="item-name">Kindle, 6" Glare-Free To...</ItemName>
        <ItemPrice class="item-price">$129.99</ItemPrice>
        <ItemQuantity class="item-quantity">Quantity: 01</ItemQuantity>
    </Menu.Item>
  </Menu>
);

const SearchMenu = () => {
	return (
		<Container className="container">
        <Row>
          <Col span={4}>
            <LogoContainer></LogoContainer>
          </Col>
          <Col span={20}> 
            <ControllerContainer>
            <Row>
              <Col span={4}>
                <span>A best place to connect </span><br/>
                <span>with best sellers</span>
              </Col>
              <Col span={10}>
                <Row className="search-uvs">
                  <SearchInput />
                  <SearchBtn> <SearchIcon /></SearchBtn>
                </Row>  
              </Col>
              <Col span={2} />
              <Col span={2}><ChatIcon /></Col>
              <Col span={2}>
                <Badge badgeContent={13} color="primary">
                  <FavoriteBorderIcon />
                </Badge>
              </Col>
              <Col className="col-md-1">
               <Dropdown overlay={menu} trigger={['click']}>
                <Badge badgeContent={1} color="primary">
                  <ShoppingCartIcon onClick={e => e.preventDefault()}/>
                </Badge>
               </Dropdown>
              </Col>
              <Col span={2}>
                <span className="font-weight-bold">My Cart</span><br/>
                <span className="text-xs">$ 0.00</span>
              </Col> 
            </Row>
             </ControllerContainer>   
          </Col>  
        </Row>  
      </Container>
		)
}
export default SearchMenu