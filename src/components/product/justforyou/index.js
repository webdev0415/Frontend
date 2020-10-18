import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {Link} from "react-router-dom"
import {getJustForYou} from "../../../store/action"
import ProductItem from "../../main/featured_products/product_item";
import { 
  Container,
  Title, 
  ShowMoreButton,
  FullContent,
  InnerContainer
} from "../../main/featured_products/styles";
import { useDispatch, useSelector } from "react-redux";

const FeaturedProducts = () => {
  // const [tabIndex, setTabIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = React.useState(8)
  const [loading, setLoading] = React.useState(false)

  const dispatch = useDispatch()
  React.useEffect(()=> {
    dispatch(getJustForYou())
  },[])
  const justforyou = useSelector(state => state.products.justforyou)

  const handleClick = () => {
    setLoading(true)
    setDisplayIndex(displayIndex+4)
    setLoading(false)
  }
  return (
    <FullContent>
      <Title>Just For You</Title>
      <Container>
      <InnerContainer>
      { justforyou.length > 0 &&
        justforyou.filter((el, id)=> id < displayIndex)
        .map((item, i)=><Link to="/product/detail"><ProductItem key={i} data={item} /></Link>)
      }
        {
          justforyou.length > 0 &&
          displayIndex < justforyou.length && 
          <ShowMoreButton onClick={handleClick}>
            <ClipLoader size={24} loading={loading} />
            {!loading && <label>Show more</label> }
          </ShowMoreButton>
        }
      </InnerContainer>
      </Container>
    </FullContent>
  );
};

export default FeaturedProducts;

