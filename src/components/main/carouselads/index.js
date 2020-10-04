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
		<AdsWrapper>
			<AdsText></AdsText>
			<ShopButton />
		</AdsWrapper>
		<Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay>
			<CarouselImgWrapper><CarouselImg src="https://via.placeholder.com/150" /></CarouselImgWrapper>
			<CarouselImgWrapper><CarouselImg src="https://via.placeholder.com/150" /></CarouselImgWrapper>
			<CarouselImgWrapper><CarouselImg src="https://via.placeholder.com/150" /></CarouselImgWrapper>
			<CarouselImgWrapper><CarouselImg src="https://via.placeholder.com/150" /></CarouselImgWrapper>

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