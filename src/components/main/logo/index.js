import React from "react"
import {Carousel} from 'react-responsive-carousel'
import { useDispatch, useSelector } from "react-redux";
import {getDynamicAds} from "../../../store/action"
import {
    SliderWrapper,
    DynamicContent,
    AdsImg,
    ShopButton
} from "./styles"

const Logo = () => {
	const dispatch = useDispatch();

	React.useEffect(()=>{
		dispatch(getDynamicAds())
	},[])
	const dynamicAds = useSelector(state=>state.utils.ads)
    return (
        	<SliderWrapper>
        	<Carousel 
        		axis="vertical"
        		showArrows={false} 
        		showStatus={false} 
        		showThumbs={false} 
        		infiniteLoop={true} 
        		showIndicators={false}
        		stopOnHover={false}
 				autoPlay>
	          {dynamicAds[0] && dynamicAds[0]["banner"] && dynamicAds[0]["banner"].map((item, index) => {
	            return <DynamicContent key={index}>
	            			<AdsImg src={item.image}></AdsImg>
	            			<ShopButton>Shop Now</ShopButton>
	            		</DynamicContent>;
	          })}
	        </Carousel>
	        </SliderWrapper>
        )
}
export default Logo