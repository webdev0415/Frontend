import React from "react"
import ListIcon from '@material-ui/icons/List';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SecurityIcon from '@material-ui/icons/Security';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PersonIcon from '@material-ui/icons/Person';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import {
	MenubarWrapper,
	LeftItems,
	ALink,
	RightItems,
	InnerContainer
} from "./styles"

const Menubar = () => {
	return (
		<MenubarWrapper> 
			<InnerContainer>
				<LeftItems>
					<ALink href="#"><LocationOnIcon />Select your address</ALink>
				</LeftItems>
				<RightItems>
					<ALink><ListIcon />Help</ALink>
					<ALink><SecurityIcon />Guarantee</ALink>
					<ALink><CreditCardIcon />Payment</ALink>
					<ALink><LocalShippingIcon />Delivery</ALink>
					<ALink><PersonIcon />Register or Sign In</ALink>
				</RightItems>
			</InnerContainer>
		</MenubarWrapper>
		)
}
export default Menubar