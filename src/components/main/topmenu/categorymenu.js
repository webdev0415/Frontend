import React, {useState} from "react"
import {Link} from "react-router-dom"
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
const CategoryItemContent = ({title}) => {
  const [bShow, setShow] = useState(false);
  return (
    <CategoryMenuItem
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span>{title}</span>
      <span className="float-right">{">"}</span>
      <MenuItemContent style={{ display: bShow ? "flex" : "none", "position" : "absolute"  }}>
        <MenuItemContentCols>
          <p className="text-lg font-weight-bold">{title}</p>
          {menu_items.map((item, index) => {
            return <Link to="/product" key={index}><span>{item}</span></Link>;
          })}
        </MenuItemContentCols>
        <MenuItemContentCols>
          <p className="text-lg font-weight-bold">{title}</p>
          {menu_items.map((item, index) => {
            return <Link to="/product" key={index}><span>{item}</span></Link>;;
          })}
        </MenuItemContentCols>
        <MenuItemContentCols>
          <p className="text-lg font-weight-bold">{title}</p>
          {menu_items.map((item, index) => {
            return <Link to="/product" key={index}><span>{item}</span></Link>;;
          })}
        </MenuItemContentCols>
      </MenuItemContent>
    </CategoryMenuItem>
  );
};

export default CategoryItemContent