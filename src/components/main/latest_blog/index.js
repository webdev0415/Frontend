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
    <><div className="container">
		<h2> 
      <Title>Latest Blogs</Title></h2> 
      <Container>
        <Slider
          ref={sliderRef}
          className="w-full"
          slidesToShow={1}
          arrows={false}
          adaptiveHeight={true}
        >
          {latest && latest.map((item, index) => {
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
