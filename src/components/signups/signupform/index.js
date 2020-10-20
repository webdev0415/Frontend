import React, { useState } from 'react';
import {
  Form,
  Input, 
  Select, 
  Button, 
  AutoComplete,
} from 'antd';
//import isEmail from "validator/lib/isEmail";
import logo from "./logo.PNG"
import {Title,
  Para,
  SignUpWrapper
} from "./styles";
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);
const SignUp = () => {
  const [signupParam, setSignupParam] = React.useState({})
  const handleChange = e => {
    setSignupParam({
      ...signupParam,
      [e.target.id]: e.target.value
    })
  }
  const onFinish = () => {
    console.log("hahah", signupParam)
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
        label="User E-mail"
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
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
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
        label="Phone"
        rules={[
          {
            required: true,
            message: 'Please input your Phone Number'
          },
          ]}
      >
      <Input.Password placeholder="Phone Number" id="phone" onChange={handleChange} />
      </Form.Item>
     

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
        Sign Up
        </Button> <Para>
        By creating an account, you agree to our    <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
      </Para>
      <hr/> Already have an account? <a href="">Sign In</a>
      </Form.Item>
    </Form>
 
      </SignUpWrapper>

  );
};

export default SignUp;
