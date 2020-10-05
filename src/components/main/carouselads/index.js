import React from "react"
import styled from "styled-components"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'
import {
	CarouselWrapper,
	AdsWrapper,
	AdsText,
	CarouselImgWrapper,
	CarouselImg,
	CarouselImgLink,
	ShopButton
} from "./styles"


const CarouselAds = () => {

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
// 			result && result.map((el, index)=>
// 				<CarouselImgWrapper key={index}>
// 					<CarouselImgLink href={el.link}><CarouselImg src={el.image} alt={el.name} /></CarouselImgLink>
// 				</CarouselImgWrapper>
// 				)
// 		}