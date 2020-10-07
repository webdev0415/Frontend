import styled from "styled-components"

export const CarouselWrapper = styled.div`
	margin: 0rem auto;
`
export const AdsWrapper = styled.div`

`
export const AdsText = styled.p`

`
export const CarouselImgWrapper = styled.div`
	position: relative;
`
export const CarouselImg = styled.img`
	width: 100%;
	height: 50%;
`
export const DescWrapper = styled.div`
	position: absolute;
	left: 30%;
	top: 40%;
	color: white;
	background-color: transparent;
	text-align: left;
`
export const Title = styled.h1`
`
export const SubTitle = styled.h3`
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