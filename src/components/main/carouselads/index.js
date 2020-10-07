import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'
// import { useSelector } from "react-redux";
import {
	CarouselWrapper,
	CarouselImgWrapper,
	CarouselImg,
	ShopButton,
	DescWrapper,
	Title,
	SubTitle
} from "./styles"


const CarouselAds = () => {
	// const slider = useSelector(state=>state.utils.ads[0]["slider"])

	return (
		<CarouselWrapper>
	
		<Carousel 
			className="banner" 
			showArrows={false} 
			showStatus={false} 
			showThumbs={false}
			infiniteLoop={true} 
			stopOnHover={false} 
			autoPlay>
		
			<CarouselImgWrapper>
				<CarouselImg src="carousel1.jpg" alt="Carousel" />
				<DescWrapper>
					<Title>Place Holder</Title>
					<SubTitle>Holder of Places</SubTitle>
					<ShopButton>Shop Now</ShopButton>
				</DescWrapper>
			</CarouselImgWrapper>
			<CarouselImgWrapper>
				<CarouselImg src="carousel2.jpg" alt="Carouse2" />
				<DescWrapper>
					<Title>Place Holder</Title>
					<SubTitle>Holder of Places</SubTitle>
					<ShopButton>Shop Now</ShopButton>
				</DescWrapper>
			</CarouselImgWrapper>
			<CarouselImgWrapper>
				<CarouselImg src="carousel3.jpg" alt="Carouse3" />
				<DescWrapper>
					<Title>Place Holder</Title>
					<SubTitle>Holder of Places</SubTitle>
					<ShopButton>Shop Now</ShopButton>
				</DescWrapper>
			</CarouselImgWrapper>
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