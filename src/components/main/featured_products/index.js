import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {connect} from "react-redux"
import {getFeaturedProducts} from "../../../store/action"
import ProductItem from "./product_item";
import { Container, Title, ShowMoreButton } from "./styles";

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
  "electronics",
  "entertainment",
  "hardware",
  "health",
  "hardware",
  "health",
  "office"
]



const FeaturedProducts = ({featured, getFeaturedProducts}) => {
  const [tabIndex, setTabIndex] = useState(0);

  React.useEffect(()=> {
    getFeaturedProducts()
  },[])
  return (
    <><div className="container">
    <h2> 
      <Title>Featured Products</Title></h2> 
      <ul className="nav nav-tabs">
      
        {menus.map((item, index) => {
          return (
            <li className="nav-item">
              <span
                class={
                  "inline-block py-2 px-3 cursor-pointer " +
                  (tabIndex !== index
                    ? "text-black hover:border-gray-200 hover:bg-gray-200"
                    : "text-white bg-blue-800")
                }
                onClick={() => setTabIndex(index)}
              >
                {item}
              </span>
            </li>
          );
        })}
      </ul><div className="col-md-12">
      <Container>
      {
        featured[0] && featured[0][menukeys.filter((el, id)=> tabIndex === id)].map((item, i)=><ProductItem key={i} data={item} />)
      }
        <ShowMoreButton>
          <ClipLoader size={24} />
          <span className="ml-4">Show More</span>
        </ShowMoreButton>
      </Container> </div></div>
    </>
  );
};

const mapStateToProps = state=> ({
  featured: state.products.featured,
})
const mapDispatchToProps = dispatch=>({
  getFeaturedProducts: getFeaturedProducts(dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProducts);

