import React, { useRef } from "react";
import Slider from "infinite-react-carousel";
import { useDispatch, useSelector } from "react-redux";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {getLatestBlogs} from "../../../store/action"
import BlogItem from "./blog_item";
import { FullContainer, Container, Title, ArrowContainer, Button} from "./styles";


const LatestBlogs = (  ) => {
  const sliderRef = useRef(null);
  const dispatch = useDispatch()
  React.useEffect(()=> {
    dispatch(getLatestBlogs())
  }, [])
  
  const latest = useSelector(state=> state.blogs.latest)
  return (
    <FullContainer>
      <Title>Latest Blogs</Title>
      <Container>
      {latest.length > 0 && 
        <Slider
          ref={sliderRef}
          className="w-full"
          slidesToShow={2}
          arrows={false}
          adaptiveHeight={true}
        > 
          {latest && latest.map((item, index) => {
            return <BlogItem data={item} key={index} />;
          })}
        </Slider>
      }
        
        <ArrowContainer>
          <NavigateBeforeIcon onClick={() => sliderRef.current.slickPrev()}/>
          <NavigateNextIcon onClick={() => sliderRef.current.slickNext()} />
        </ArrowContainer>
      </Container>
    </FullContainer>
  );
};
export default LatestBlogs;
