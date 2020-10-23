import React, { useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import {signupUser} from "../../../store/action"
import {message} from 'antd'
import { useHistory } from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {Link} from "react-router-dom"

import {
  Form,
  Input,
  Button,
} from 'antd';
//import isEmail from "validator/lib/isEmail";
import logo from "./logo.PNG"
import {Title,
  Para,
  SignUpWrapper
} from "./styles";



const SignUp = () => {
  const [signupParam, setSignupParam] = React.useState({})
  const [phone, setPhone] = React.useState()
  const dispatch = useDispatch();
  const history = useHistory()
  // const msg = useSelector(state=>state.auth.message)
  // React.useEffect(()=>{
  //   message.success(msg)
  // }, [msg])
  const handleChange = e => {
    setSignupParam({
      ...signupParam,
      [e.target.id]: e.target.value
    })
  }
  const onFinish = () => {
    const postData = {
      ...signupParam,
      phone
    }
    dispatch(signupUser(postData, history))
  }
  return (

    <SignUpWrapper> 
       <img src={logo} className="App-logo" alt="logo" />
  <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    > <Title>Create Account
    </Title>
      <Form.Item
        name="username"
        label="User Name"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input placeholder="Username" id="username" onChange={handleChange} />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input placeholder="E-mail" id="email" onChange={handleChange} />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Password" id="password" onChange={handleChange} />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item 
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <PhoneInput
          inputClass="phoneinput"
          country={'us'}
          inputProps={{
            name: 'phone',
            required: true,
          }}
          value={phone}
          onChange={phone=>setPhone(phone)}
        />
      </Form.Item>
     
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
        Sign Up
        </Button> <Para>
        By creating an account, you agree to our    <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
      </Para>
      <hr/> Already have an account? <Link to="/login">Sign In</Link>
      </Form.Item>
    </Form>
 
      </SignUpWrapper>

  );
};

export default SignUp;
