import React, { useState } from "react";
import StackGrid from "react-stack-grid";
import ArrivalItem from "./arrival_item";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Title,
  SelectedContainer,
  SelectedTitleContainer,
  SelectedTitle,
  GridContainer,
  ShopButton,
  FullContainer,
  ImgCol,
  ProductCol
} from "./styles";
import {
  NavTabs,
  NavItem,
  NavTxt
} from "../featured_products/styles"
import {getSelectedProducts} from "../../../store/action"

const menus = [
  "Trending Item",
  "New Arrivals",
  "Best Sale"
];
const menukeys = [
  "trending",
  "new_arrivals",
  "best_sale"
]
const NewArrival = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(getSelectedProducts())
  }, [])
  const selected = useSelector(state=> state.products.selected)
  return (
    <FullContainer>
      <Title>Selected Products</Title>
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

              <ImgCol className="col-md-6">   
                <SelectedContainer>
                  <SelectedTitleContainer>
                    <SelectedTitle>Selected New Arrivals</SelectedTitle>
                    <ShopButton>Shop Now</ShopButton>
                  </SelectedTitleContainer>
                </SelectedContainer> 
              </ImgCol>
              <ProductCol className="col-md-6">
                <GridContainer>
                  <StackGrid
                    columnWidth={"32%"}
                    gutterWidth={1}
                    gutterHeight={1}
                    style={{ width: "100%", backgroundColor: "rgb(249 249 249)" }}
                  >
                  {
                    selected[tabIndex] && 
                    selected[tabIndex][menukeys.filter((el, id)=> tabIndex === id)] && 
                    selected[tabIndex][menukeys.filter((el, id)=> tabIndex === id)].map((item, i)=>
                      <ArrivalItem
                            key={i}
                            title={item.title}
                            description={item.subtitle}
                            srcimg={item.image}
                            height={100}
                            />
                    )
                  }
                  </StackGrid>  
                </GridContainer> 
              </ProductCol>
      </Container>
    </FullContainer>
  );
};

export default NewArrival
