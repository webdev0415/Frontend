import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import ViewListIcon from '@material-ui/icons/ViewList';
import CategoryItemContent from "./categorymenu"
import {Row, Col} from "antd"
import SearchMenu from "./searchmenu"
// import {getAllCategory} from "../../../store/action"
import {
  Container,
  MenuItem,
  MenuContent,
  TopMenuWrapper,
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
  // const [showCart, setShowCart] = useState(false)
  // const dispatch = useDispatch()
  // React.useEffect(()=>{
  //   dispatch(getAllCategory())
  // },[])
  // const menus = useSelector(state=> state.utils.category)
  // const handleShoppingCartClick = e => {
  //   e.preventDefault()
  //   setShowCart(!showCart)
  // }
  return (
    <TopMenuWrapper>

      
    <SearchMenu />
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
