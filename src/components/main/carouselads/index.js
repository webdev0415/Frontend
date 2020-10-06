import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'
import { useSelector } from "react-redux";
import {
	CarouselWrapper,
	CarouselImgWrapper,
	CarouselImg,
} from "./styles"


const CarouselAds = () => {
	const slider = useSelector(state=>state.utils.ads[0]["slider"])

	return (
		<CarouselWrapper>
	
		<Carousel className="banner" showArrows={false} showStatus={false} showThumbs={false} autoPlay>
		
			<CarouselImgWrapper><CarouselImg src="carousel1.jpg" /></CarouselImgWrapper>
			<CarouselImgWrapper><CarouselImg src="carousel2.jpg" /></CarouselImgWrapper>
			<CarouselImgWrapper><CarouselImg src="carousel3.jpg" /></CarouselImgWrapper>
			<CarouselImgWrapper><CarouselImg src="carousel1.jpg" /></CarouselImgWrapper>

		</Carousel>
		</CarouselWrapper>
		)
	
}
export default CarouselAds
// {
// 			slider.map((el, id)=> 
// 				<CarouselImgWrapper key={id}>
// 					<CarouselImgLink href={el.url}><CarouselImg src={el.image} /></CarouselImgLink>
// 				</CarouselImgWrapper>
// 				)
// 		}