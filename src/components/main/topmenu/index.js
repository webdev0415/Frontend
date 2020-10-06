import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import ViewListIcon from '@material-ui/icons/ViewList';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ChatIcon from '@material-ui/icons/Chat';
import CategoryItemContent from "./categorymenu"
// import {getAllCategory} from "../../../store/action"
import {
  Container,
  LogoContainer,
  ControllerContainer,
  MenuItem,
  MenuContent,
  TopMenuWrapper,
  Row,
  Col,
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
          <Col className="col-md-2">
            <LogoContainer></LogoContainer>
          </Col>
          <Col className="col-md-10"> 
            <ControllerContainer>
            <Row>
              <Col className="col-md-2">
                <span>A best place to connect </span><br/>
                <span>with best sellers</span>
              </Col>
              <Col className="col-md-5">
                <Row className="search-uvs">
                  <SearchInput />
                  <SearchBtn> <SearchIcon /></SearchBtn>
                </Row>  
              </Col>
              <Col className="col-md-1"></Col>
              <Col className="col-md-1"><ChatIcon /></Col>
              <Col className="col-md-1">
                <FavoriteBorderIcon />
                <span className="badge badge-uvs badge-secondary">13</span>
              </Col>
              <Col className="col-md-1">
                <ShoppingCartIcon />
                <span className="badge badge-uvs badge-secondary">0</span>
              </Col>
              <Col className="col-md-1">
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
          <Col className="col-9">
          <Navbar>
            <MenuItem>Personal Protective Equipments</MenuItem> 
            <MenuItem>Partner Program</MenuItem> 
            <MenuItem>Sell on Dun</MenuItem> 
            <MenuItem>Get the app | English - USD</MenuItem>
          </Navbar>  
          </Col>
        </Row>  
      </Container>  
    </TopMenuWrapper>
  );
};

export default TopMenu;
