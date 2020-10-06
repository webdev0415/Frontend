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
	RightItems
} from "./styles"

const Menubar = () => {
	return (
		<MenubarWrapper> <div className="container"><div className="col-md-12"><div className="row">
			<LeftItems>
				<ALink><LocationOnIcon />Select your address</ALink>
			</LeftItems>
			<RightItems>
				<ALink><ListIcon />Help</ALink>
				<ALink><SecurityIcon />Guarantee</ALink>
				<ALink><CreditCardIcon />Payment</ALink>
				<ALink><LocalShippingIcon />Delivery</ALink>
				<ALink><PersonIcon />Register or Sign In</ALink>
			</RightItems></div></div> </div> 
		</MenubarWrapper>
		)
}
export default Menubar