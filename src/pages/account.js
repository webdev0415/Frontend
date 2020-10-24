import React from "react"
import styled from "styled-components" 
import Layout from "../components/account/layoutpage" 
const AccountPage = () => {
	return (
		<AccountPageWrapper> 	 
			<Layout />  
		</AccountPageWrapper>
		)
}
const AccountPageWrapper = styled.div.attrs({
  className: ""
})`
	background-color: #f9f9f9;
`
export default AccountPage