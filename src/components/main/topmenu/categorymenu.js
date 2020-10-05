import React, {useState} from "react"
import {
	CategoryMenuItem,
	MenuItemContent,
	MenuItemContentCols
} from "./styles"
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
const CategoryItemContent = (props) => {
  const [bShow, setShow] = useState(false);
  return (
    <CategoryMenuItem
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span>{props.title}</span>
      <span>{">"}</span>
      <MenuItemContent style={{ display: bShow ? "flex" : "none" }}>
        <MenuItemContentCols>
          <p className="text-lg font-bold">{props.title}</p>
          {menu_items.map((item) => {
            return <span>{item}</span>;
          })}
        </MenuItemContentCols>
        <MenuItemContentCols>
          <p className="text-lg font-bold">{props.title}</p>
          {menu_items.map((item) => {
            return <span>{item}</span>;
          })}
        </MenuItemContentCols>
        <MenuItemContentCols>
          <p className="text-lg font-bold">{props.title}</p>
          {menu_items.map((item) => {
            return <span>{item}</span>;
          })}
        </MenuItemContentCols>
      </MenuItemContent>
    </CategoryMenuItem>
  );
};

export default CategoryItemContent