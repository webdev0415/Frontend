import React from "react"
import styled from "styled-components"
import SearchBox from "./search_box"

const Header = () => {
	return (
		<HearderWrapper>
			<BrandWrapper>
				<BrandImg src="" alt="" />
			</BrandWrapper>
			<SearchBox />
			<DynamicIcons>
				<IconWrapper></IconWrapper>
				<IconWrapper></IconWrapper>
				<IconWrapper></IconWrapper>
			</DynamicIcons>
		</HearderWrapper>
		)
}
const BrandWrapper = styled.div`
`
const BrandImg = styled.img`
`
const DynamicIcons = styled.div`
`
const IconWrapper = styled.div`
`
const HearderWrapper = styled.div`
`
export default Header