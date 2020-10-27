import React from "react" 
import styled from "styled-components"
import SignInForm from "../components/signins/signinform"
import {getAccountDetail} from "../store/action"
import {useDispatch} from "react-redux"
const SignIn = () => {
	const dispatch = useDispatch()
	  React.useEffect(()=>{
	    dispatch(getAccountDetail())
	  }, [])
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
