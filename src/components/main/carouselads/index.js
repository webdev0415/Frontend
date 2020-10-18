import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'
import { useSelector } from "react-redux";
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
	const slider = useSelector(state=>state.utils.ads)

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
			{
				slider[0] && slider[0]["slider"].length > 0 && slider[0]["slider"].map((el, index)=>
					<CarouselImgWrapper key={index}>
						<CarouselImg src={el.image} alt={el.title} />
						<DescWrapper>
							<Title>{el.title}</Title>
							<SubTitle>{el.subtitle}</SubTitle>
							<ShopButton>Shop Now</ShopButton>
						</DescWrapper>
					</CarouselImgWrapper>
					)
			}
			
			
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