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
  return (
    <>
      <Title>Latest Blogs</Title>
      <Container>
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
        <ArrowContainer>
          <Button onClick={() => sliderRef.current.slickPrev()}>{"<"}</Button>
          <Button onClick={() => sliderRef.current.slickNext()}>{">"}</Button>
        </ArrowContainer>
      </Container>
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
