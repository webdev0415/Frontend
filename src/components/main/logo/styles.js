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
	color: #212b46;
	background-color: white;
	margin: 15px 50px;
	border-radius: 30px;
	transition: all .3s;
	background-color: white;
	  &:hover {
	    box-shadow: 3px 3px 5px gray;
	    color: white;
	    background-color: #212b46;
	  }
`;
export const SliderWrapper = styled.div`
	width: 100%;
	
`