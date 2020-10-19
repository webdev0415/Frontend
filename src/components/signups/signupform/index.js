import React from "react";
import { Form, Input, Button, Checkbox } from 'antd'; 
import logo from "./logo.PNG"
import {Title,
  Para,
  SignUpWrapper
} from "./styles";


const SignUp = () => {
  return (

    <SignUpWrapper> 
       <img src={logo} className="App-logo" alt="logo" />
  <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      //onFinish={onFinish}
    > <Title>Create Account
    </Title>
      <Form.Item
        name="username"
        label="User Name"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input   placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="useremail"
        label=" Email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input   placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"

        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
         
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="confirmpassword"
        label="Confirm Password"

        rules={[{ required: true, message: 'Please input your Confirm Password!' }]}
      >
        <Input
         
          type="password"
          placeholder="Confirm Password"
        />
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
