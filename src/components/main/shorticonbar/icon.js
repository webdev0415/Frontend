import React from "react"
import {
	IconWrapper,
	TextWrapper,
	Title,
	Desc,
	IconImg
} from "./styles"
const Icon = ({type, title, desc}) => {
	return (
		<IconWrapper>
		{
			type==="shipping" && (<IconImg src={require('../../../assets/imges/startup.svg')} />)
		}
		{
			type==="payment" && (<IconImg src={require('../../../assets/imges/credit-card.svg')} />)
		}
		{
			type==="support" && (<IconImg src={require('../../../assets/imges/24-hours.svg')} />)
		}
		{
			type==="trade" && (<IconImg src={require('../../../assets/imges/umbrella.svg')} />)
		}
			<TextWrapper>
				<Title>{title}</Title>
				<Desc>{desc}</Desc>
			</TextWrapper>
		</IconWrapper>
		)
}
export default Icon;