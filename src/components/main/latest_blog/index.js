import React, { useState, useRef } from "react";
import Slider from "infinite-react-carousel";
import {connect} from "react-redux"
import {getLatestBlogs} from "../../../store/action"
import BlogItem from "./blog_item";
import { Container, Title, ArrowContainer, Button } from "./styles";


const LatestBlogs = ({latest, getLatestBlogs}) => {
  const sliderRef = useRef(null);

  React.useEffect(()=> {
    getLatestBlogs()
  }, [])
  const items = [
  {
    "date": "Oct 2, 2020", 
    "id": 0, 
    "image": "http://lorempixel.com/400/400", 
    "summary": "lorem ipsum dolor sit amet consecutuer adispisicng elit. Anenean commodo ligula eget dolor Anena massa.", 
    "title": "Place Holder"
  }, 
  {
    "date": "Oct 2, 2020", 
    "id": 1, 
    "image": "http://lorempixel.com/400/400", 
    "summary": "lorem ipsum dolor sit amet consecutuer adispisicng elit. Anenean commodo ligula eget dolor Anena massa.", 
    "title": "Place Holder"
  },
  {
    "date": "Oct 2, 2020", 
    "id": 2, 
    "image": "http://lorempixel.com/400/400", 
    "summary": "lorem ipsum dolor sit amet consecutuer adispisicng elit. Anenean commodo ligula eget dolor Anena massa.", 
    "title": "Place Holder"
  },
  {
    "date": "Oct 2, 2020", 
    "id": 3, 
    "image": "http://lorempixel.com/400/400", 
    "summary": "lorem ipsum dolor sit amet consecutuer adispisicng elit. Anenean commodo ligula eget dolor Anena massa.", 
    "title": "Place Holder"
  }
]
  return (
    <><div className="container">
		<h2> 
      <Title>Latest Blogs</Title></h2> 
      <Container>
        <Slider
          ref={sliderRef}
          className="w-full"
          slidesToShow={2}
          arrows={false}
          adaptiveHeight={true}
        >
          {items && items.map((item, index) => {
            return <BlogItem data={item} key={index} />;
          })}
        </Slider> <div className="text-right">
        <ArrowContainer>
          <Button className="btn btn-default btn-duvs" onClick={() => sliderRef.current.slickPrev()}>{"<"}</Button>
          <Button className="btn btn-default btn-duvs" onClick={() => sliderRef.current.slickNext()}>{">"}</Button>
        </ArrowContainer></div>
      </Container> </div>
    </>
  );
};
const mapStateToProps = state=> ({
  latest: state.blogs.latest,
})
const mapDispatchToProps = dispatch=>({
  getLatestBlogs: getLatestBlogs(dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(LatestBlogs);
