import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'
import { useSelector, useDispatch } from "react-redux";
import {getDynamicAds} from "../../../store/action"
import {
	CarouselWrapper,
	CarouselImgWrapper,
	CarouselImg,
	ShopButton,
	DescWrapper,
	Title,
	SubTitle
} from "./styles"


const CarouselProduct = () => {
	
	const dispatch = useDispatch();
	React.useEffect(()=>{
		dispatch(getDynamicAds())
	},[])
	const slider = useSelector(state=>state.utils.ads)
	return (
		<CarouselWrapper>
	
		<Carousel 
			showArrows={false} 
			showStatus={false} 
			showThumbs={false}
			infiniteLoop={true} 
			stopOnHover={false} 
			autoPlay>
			{
				slider[0] && slider[0]["product_slider"].length > 0 && slider[0]["product_slider"].map((el, index)=>
					<CarouselImgWrapper key={index}>
						<CarouselImg src={el.image} alt={el.title} />
						<DescWrapper>
							<Title>{el.title}</Title>
							<SubTitle>{el.subtitle}</SubTitle>
						</DescWrapper>
					</CarouselImgWrapper>
					)
			}
			
			
		</Carousel>
		</CarouselWrapper>
		)
	
}
export default CarouselProduct
// {
// 			slider.map((el, id)=> 
// 				<CarouselImgWrapper key={id}>
// 					<CarouselImgLink href={el.url}><CarouselImg src={el.image} /></CarouselImgLink>
// 				</CarouselImgWrapper>
// 				)
// 		}