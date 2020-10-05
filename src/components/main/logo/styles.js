import styled from "styled-components"

export const LogoWrapper = styled.div.attrs({
    className: ''
})`
	width: 100%;
	height: 70px;
	background-color: #ffad33;
	display: grid;
	grid-template-columns: 4fr 1fr;

`
export const DynamicText = styled.h2`
	text-align: center;
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
	width: 80%;
	padding-top: 10px;
`