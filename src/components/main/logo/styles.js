import styled from "styled-components"

export const DynamicText = styled.h2`
	text-align: center;
`
export const DynamicContent = styled.div`
`
export const AdsImg = styled.img`
`
export const ShopButton = styled.button.attrs({
  className:
    "btn"
})`
	background-color: white;
	margin: 15px 50px;
	border-radius: 30px;
	transition: all .3s;
	color: #ffad33;
	&:hover {
		background-color: #ffad33;
		border-color: white;
		color: white;
	}
`;
export const SliderWrapper = styled.div`
	width: 100%;
	
`