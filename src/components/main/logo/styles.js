import styled from "styled-components"

export const DynamicText = styled.h2`
	text-align: center;
`
export const DynamicContent = styled.div`
	position: relative;
`
export const AdsImg = styled.img`
`
export const ShopButton = styled.button.attrs({
  className:
    "btn"
})`
	position: absolute;
	right: 10px;
	top: 15px
	background-color: white;
	margin: 15px 50px;
	border-radius: 30px;
	transition: all .3s;
	background-color: white;
	&:hover {
		box-shadow: 1px 2px solid gray;
	}
`;
export const SliderWrapper = styled.div`
	width: 100%;
	
`