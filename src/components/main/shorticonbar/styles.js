import styled from 'styled-components'

export const StyledPanel = styled.div.attrs({
    className: 'container'
})`
	border: 1px solid lightgray;
	background-color: white;
`
export const IconWrapper = styled.div.attrs({
    className: ''
})`
	display: flex;

`

export const TextWrapper = styled.span.attrs({
    className: ''
})`
	display: flex;
	flex-direction: column;
`
export const Title = styled.span`
	font-weight: bold;
`
export const Desc = styled.span`
	font-weight: 300;
	font-size: .7em;
`
export const IconImg = styled.img`
	width: 32px;
	height: 32px;
`

export const InnerPanel = styled.div.attrs({
    className: 'p-4'
})`

`
export const IconsWrapper = styled.div.attrs({
    className: 'row'
})`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
`