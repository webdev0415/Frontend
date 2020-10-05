import React, {useRef} from "react"
import Slider from "infinite-react-carousel";
import {
    LogoWrapper,
    SliderWrapper,
    ShopButton,
    DynamicText
} from "./styles"

const Logo = () => {
	const texts = [
	"Work from home essentials1",
	"Work from home essentials2",
	"Work from home essentials3",
	"Work from home essentials4"
	]

	const sliderRef = useRef(null);
    return (
        <LogoWrapper>
        	<SliderWrapper>
        	<Slider
	          ref={sliderRef}
	          arrows={false}
	          adaptiveHeight={true}
	          autoplay 
	        >
	          {texts && texts.map((item, index) => {
	            return <DynamicText key={index}>{item}</DynamicText>;
	          })}
	        </Slider>
	        </SliderWrapper>
        	<ShopButton>Shop Now</ShopButton>
        </LogoWrapper>
        )
}
export default Logo