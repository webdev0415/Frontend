import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {getFeaturedProducts} from "../../../store/action"
import ProductItem from "./product_item";
import { 
  Container,
  Title, 
  ShowMoreButton,
  FullContent,
  Span,
  NavTabs,
  NavItem,
  NavTxt,
  InnerContainer
} from "./styles";
import { useDispatch, useSelector } from "react-redux";

const menus = [
  "Consumer Electronics",
  "Health & Medical",
  "Tools & Hardware",
  "Sports & Entertainment",
  "Office Electronics",
  "Laptops",
  "Mobiles",
  "Other"
];
const menukeys = [
  "consumer",
  "health",
  "hardware",
  "entertainment",
  "office",
  "laptops",
  "mobile",
  "other"
]



const FeaturedProducts = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const dispatch = useDispatch()
  React.useEffect(()=> {
    dispatch(getFeaturedProducts())
  },[])
  const featured = useSelector(state => state.products.featured)
  return (
    <FullContent>
      <Title>Featured Products</Title>
      <NavTabs>
      
        {menus.map((item, index) => {
          return (
            <NavItem key={index}>
              <NavTxt
                className={
                  "inline-block py-2 px-3 cursor-pointer " +
                  (tabIndex !== index
                    ? "text-black"
                    : "text-white")
                }
                bgcolor={
                  (tabIndex !== index
                    ? "transparent"
                    : "#212b46")
                }
                onClick={() => setTabIndex(index)}
              >
                {item}
              </NavTxt>
            </NavItem>
          );
        })}
      </NavTabs>
      <Container>
      <InnerContainer>
      {
        featured[tabIndex] && featured[tabIndex][menukeys.filter((el, id)=> tabIndex === id)] && featured[tabIndex][menukeys.filter((el, id)=> tabIndex === id)].map((item, i)=><ProductItem key={i} data={item} />)
      }
        <ShowMoreButton>
          <ClipLoader size={24} />
          <Span>Show More</Span>
        </ShowMoreButton>
      </InnerContainer>
      </Container>
    </FullContent>
  );
};

export default FeaturedProducts;

