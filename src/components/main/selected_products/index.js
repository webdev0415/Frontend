import React, { useState } from "react";
import StackGrid from "react-stack-grid";
import ArrivalItem from "./arrival_item";
import {connect} from "react-redux"
import {
  Container,
  Title,
  SelectedContainer,
  SelectedTitleContainer,
  SelectedTitle,
  GridContainer,
  ShopButton
} from "./styles";
import {getSelectedProducts} from "../../../store/action"

const NewArrival = ({selected, getSelectedProducts}) => {
  const [tabIndex, setTabIndex] = useState(0);

  React.useEffect(()=>{
    getSelectedProducts()
  }, [])
  return (
    <><div className="container">
    <h2>  <Title>Selected Products</Title></h2>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <span
            className={
              "inline-block py-2 px-3 cursor-pointer " +
              (tabIndex !== 0
                ? "text-black hover:border-gray-200 hover:bg-gray-200"
                : "text-white bg-blue-800")
            }
            onClick={() => setTabIndex(0)}
          >
            Trending Item
          </span>
        </li>
        <li className="nav-item">
          <span
            className={
              "inline-block py-2 px-3 cursor-pointer " +
              (tabIndex !== 1
                ? "text-black hover:border-gray-200 hover:bg-gray-200"
                : "text-white bg-blue-800")
            }
            onClick={() => setTabIndex(1)}
          >
            New Arrivals
          </span>
        </li>
        <li className="nav-item">
          <span
            className={
              "inline-block py-2 px-3 cursor-pointer " +
              (tabIndex !== 2
                ? "text-black hover:border-gray-200 hover:bg-gray-200"
                : "text-white bg-blue-800")
            }
            onClick={() => setTabIndex(2)}
          >
            Best Sale
          </span>
        </li>
      </ul>
      <Container><div className="col-md-12"><div className="col-md-12"><div className="row"><div className="col-md-6  uvs-imgbg12">   
        <SelectedContainer>
          {/* <img src="https://via.placeholder.com/400" alt="placeholder" /> */}
          <SelectedTitleContainer>
          <h3> <SelectedTitle>Selected New Arrivals</SelectedTitle></h3> 
            <ShopButton>Shop Now</ShopButton>
          </SelectedTitleContainer>
        </SelectedContainer> </div><div className="col-md-6 uvs-productss">
        <GridContainer>
          <StackGrid
            columnWidth={"32%"}
            gutterWidth={1}
            gutterHeight={1}
            style={{ width: "100%", backgroundColor: "rgb(249 249 249)" }}
          >
          {
            tabIndex === 0 && selected[0] && selected[0]["trending"].map((el, index)=> (
              <ArrivalItem
                key={index}
                title={el.title}
                description={el.subtitle}
                srcimg={el.image}
                height={150}
                />
              ))
          }
          {
            tabIndex === 1 && selected[0] && selected[0]["new_arrivals"].map((el, index)=> (
              <ArrivalItem
                key={index}
                title={el.title}
                description={el.subtitle}
                srcimg={el.image}
                height={150}
                />
              ))
          }
          {
            tabIndex === 2 && selected[0] && selected[0]["best_sale"].map((el, index)=> (
              <ArrivalItem
                key={index}
                title={el.title}
                description={el.subtitle}
                srcimg={el.image}
                height={150}
                />
              ))
          }
          
            
          </StackGrid>  
        </GridContainer> </div> </div>  </div>  </div>
      </Container>
      </div>
    </>
  );
};
const mapStateToProps = state=> ({
  selected: state.products.selected,
})
const mapDispatchToProps = dispatch=>({
  getSelectedProducts: getSelectedProducts(dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(NewArrival);
// export default NewArrival;
