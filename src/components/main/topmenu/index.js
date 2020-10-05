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
    <div className="w-full px-10 flex justify-center items-center flex flex-col bg-white">
      <Container className="border-b border-gray-500 py-4">
        <LogoContainer></LogoContainer>
        <ControllerContainer>
          <div className="flex flex-col mr-4">
            <span>A best place to connect </span>
            <span>with best sellers</span>
          </div>
          <div className="flex flex-row w-1/3 mr-24">
            <input
              className="rounded-l-full h-12 w-4/5 px-4 border"
              placeholder="Search"
            />
            <button className="rounded-r-full w-1/5 bg-blue-900 h-12">
              <i class="fa fa-search fa-lg text-white" aria-hidden="true"></i>
            </button>
          </div>
          <i class="fa fa-comments-o fa-3x mr-12" aria-hidden="true"></i>
          <div className="relative mr-8">
            <i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>
            <BadgeContainer>
              <span className="text-white text-xs">13</span>
            </BadgeContainer>
          </div>
          <div className="relative mr-4">
            <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
            <BadgeContainer>
              <span className="text-white text-xs">0</span>
            </BadgeContainer>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">My Cart</span>
            <span className="text-xs">$ 0.00</span>
          </div>
        </ControllerContainer>
      </Container>
      <Container>
        <div className="">
          <MenuItem
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
            className={
              !showMenu
                ? "w-64 text-black hover:border-gray-200 hover:bg-gray-200"
                : "w-64 text-white bg-blue-800"
            }
          >
            <i class="fa fa-bars fa-lg mr-2" aria-hidden="true"></i>All
            Categories
            <MenuContent style={{ display: showMenu ? "block" : "none" }}>
              {menu_items.map((item) => {
                return <CategoryItemContent title={item} />;
              })}
            </MenuContent>
          </MenuItem>
          <MenuItem>Personal Protective Equipments</MenuItem>
          <MenuItem>Partner Program</MenuItem>
          <MenuItem>Sell on Dun</MenuItem>
        </div>
        <div>
          <MenuItem>Get the app | English - USD</MenuItem>
        </div>
      </Container>
    </div>
  );
};

export default TopMenu;
