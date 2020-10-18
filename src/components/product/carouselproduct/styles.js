import styled from "styled-components"

export const CarouselWrapper = styled.div.attrs({
  className: "Carousel-Wrapper"
})`
  border-radius: 20px;
  margin: 2rem auto; 
  width:82%;
  & .carousel-slider {
    border-radius: 20px;
  }

`;
 
export const AdsWrapper = styled.div`

`
export const AdsText = styled.p`

`
export const CarouselImgWrapper = styled.div`
	position: relative;
`
export const CarouselImg = styled.img`
	width: 100%;
	height: 300px;	
`
export const DescWrapper = styled.div`
	position: absolute;
	left: 2rem;
	top: 2rem;
	color: white;
	background-color: transparent;
	text-align: left;
`
export const Title = styled.h1`
  color: white;
`
export const SubTitle = styled.h3`
  color: white;
`
export const CarouselImgLink = styled.a`
`
export const ShopButton = styled.button.attrs({
  className:
    "btn"
})`

  background-color: white;
  border-radius: 30px;
  margin-left: 0;
  padding: 10px 40px;
  color: #212b46;
  transition: all .3s;
    &:hover {
      box-shadow: 3px 3px 5px gray;
      color: white;
      background-color: #212b46;
    }
`