import React, {useRef} from "react"
import Slider from "infinite-react-carousel";
import { useDispatch, useSelector } from "react-redux";
import {getDynamicAds} from "../../../store/action"
import {
    SliderWrapper,
    DynamicContent,
    AdsImg
} from "./styles"

const Logo = () => {
	const dispatch = useDispatch();
	const sliderRef = useRef(null);

	React.useEffect(()=>{
		dispatch(getDynamicAds())
	},[])
	const dynamicAds = useSelector(state=>state.utils.ads)
    return (
        	<SliderWrapper>
        	<Slider
	          ref={sliderRef}
	          arrows={false}
	          adaptiveHeight={true}
	          autoplay
	        >
	          {dynamicAds[0] && dynamicAds[0]["banner"] && dynamicAds[0]["banner"].map((item, index) => {
	            return <DynamicContent key={index}><AdsImg src={item.image}></AdsImg></DynamicContent>;
	          })}
	        </Slider>
	        </SliderWrapper>
        )
}
export default Logo