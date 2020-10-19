import React from "react" 
import styled from "styled-components"
import SignupForm from "../components/signups/signupform"
const SignUp = () => {
	return (
		<SignUpWrapper>
		
			<SignupForm />
		</SignUpWrapper>
		)
}
const SignUpWrapper = styled.div.attrs({
  className: ""
})`
	background-color: #fff; 
	padding-bottom:40px;
`

export default SignUp;
