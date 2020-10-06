import React from 'react'
import {
    StyledPanel,
    InnerPanel,
    IconsWrapper
} from "./styles"
import Icon from "./icon"

const Panel = () => {
    return ( <div className="container mt-4">
        <StyledPanel>  
            <InnerPanel>
                <IconsWrapper>
                    <Icon type="shipping" title="Ocean and Air Shipping" desc="Free Shipping All Orders" />
                    <Icon type="payment" title="Pay Later" desc="Finacing Solutions" />
                    <Icon type="support" title="Help Center" desc="24x7 Support System" />
                    <Icon type="trade" title="Trade Assurance" desc="Order Protection" />
                </IconsWrapper>
            </InnerPanel> 
        </StyledPanel></div>
    )
}

export default Panel