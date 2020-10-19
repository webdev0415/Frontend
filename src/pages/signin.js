import React from "react" 
import styled from "styled-components"
import SignInForm from "../components/signins/signinform"
const SignIn = () => {
	return (
		<SignUpWrapper>
		
			<SignInForm />
		</SignUpWrapper>
		)
}
const SignUpWrapper = styled.div.attrs({
  className: ""
})`
	background-color: #fff; 
	padding-bottom:40px;
`

export default SignIn;
