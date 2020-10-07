import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import ViewListIcon from '@material-ui/icons/ViewList';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ChatIcon from '@material-ui/icons/Chat';
import CategoryItemContent from "./categorymenu"
import Badge from '@material-ui/core/Badge';
import {Row, Col} from "antd"
// import {getAllCategory} from "../../../store/action"
import {
  Container,
  LogoContainer,
  ControllerContainer,
  MenuItem,
  MenuContent,
  TopMenuWrapper,
  SearchInput,
  SearchBtn,
  Navbar
} from "./styles";

const menu_items = [
  "Apparels",
  "Health & Medical",
  "Consumer Electronics",
  "Vehicle Accessories",
  "Sports & Entertainment",
  "Office Electronics",
  "Laptops",
  "Mobiles",
  "Tools & Hardwares",
  "Video Games",
  "Home & Garden",
  "Other"
];


const TopMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  // const dispatch = useDispatch()
  // React.useEffect(()=>{
  //   dispatch(getAllCategory())
  // },[])
  // const menus = useSelector(state=> state.utils.category)
  return (
    <TopMenuWrapper>
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
                <Badge badgeContent={1} color="primary">
                  <ShoppingCartIcon />
                </Badge>
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
      <Container className="container">
        <Row className="menu-row-uvs">  
          <Col className="col-3 btn-secondary p-0">
          <MenuItem
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
            className={
              !showMenu
                ? "p-t-uvs-m"
                : "p-t-uvs-m"
            }
          >
            <ViewListIcon />All Categories 
            <MenuContent style={{ display: showMenu ? "block" : "none" }}>
              {menu_items.map((item, index) => {
                return <CategoryItemContent key={index} title={item} />;
              })}
            </MenuContent>  
          </MenuItem>
          </Col> 
          <Col span={10}>
          <Navbar>
            <MenuItem>Personal Protective Equipments</MenuItem> 
            <MenuItem>Partner Program</MenuItem> 
            <MenuItem>Sell on Dun</MenuItem> 
          </Navbar>
          </Col>
          <Col span={8}> 
          <Navbar style={{float: 'right'}}><MenuItem>Get the app | English - USD</MenuItem></Navbar>
          </Col>
        </Row>  
      </Container>  
    </TopMenuWrapper>
  );
};

export default TopMenu;
