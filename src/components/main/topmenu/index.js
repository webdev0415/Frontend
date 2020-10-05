import React, { useState } from "react";
import CategoryItemContent from "./categorymenu"
import {
  Container,
  LogoContainer,
  ControllerContainer,
  BadgeContainer,
  MenuItem,
  MenuContent
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


const TopMenu = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="header-uvss">
      <Container className="container uvs-main-head"><div className="col-md-12"><div className="row"><div className="col-md-2">
        <LogoContainer></LogoContainer>
        </div> <div className="col-md-10"> <ControllerContainer>
        <div className="row"><div className="col-md-2">
            <span>A best place to connect </span><br/>
            <span>with best sellers</span>
          </div><div className="col-md-5">
          <div className="row search-uvs">
            <input 
              className="form-control col-10"
            />
              <button className="btn btn-primary uvs-btn col-2"> <i class="text-gray-400 mr-2 fa fa-search"></i>
            </button>
          </div>  </div><div className="col-md-1"> </div><div className="col-md-1">
          <i class="fa fa-comments-o fa-3x mr-12" aria-hidden="true"></i>
          </div><div className="col-md-1">
            <i class="fa fa-heart-o fa-3x" aria-hidden="true"></i>
            
              <span className="badge badge-uvs badge-secondary">13</span>
            
              </div><div className="col-md-1">
            <i class="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
           
              <span className="badge badge-uvs badge-secondary">0</span>
            
              </div><div className="col-md-1">
            <span className="font-bold">My Cart</span><br/>
            <span className="text-xs">$ 0.00</span>
          </div> </div>
           </ControllerContainer>  </div> </div>  </div>  
      </Container>
      <Container className="container"><div className="col-md-12">
        <div className="row menu-row-uvs">  <div className="col-3 bg-menu-uvs p-0">
          <MenuItem
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
            className={
              !showMenu
                ? "p-t-uvs-m"
                : "p-t-uvs-m"
            }
          >
            <i class="fa fa-bars fa-lg mr-2" aria-hidden="true"></i>All
            Categories 
            <MenuContent style={{ display: showMenu ? "block" : "none" }}>
              {menu_items.map((item) => {
                return <CategoryItemContent title={item} />;
              })}
            </MenuContent>  </MenuItem>
        </div> <div className="col-9"><div className="navbar">
          <MenuItem>Personal Protective Equipments</MenuItem> 
          <MenuItem>Partner Program</MenuItem> 
          <MenuItem>Sell on Dun</MenuItem> 
      
       
          <MenuItem>Get the app | English - USD</MenuItem>
        </div>  </div></div>  </div>
      </Container>  
    </div>
  );
};

export default TopMenu;
