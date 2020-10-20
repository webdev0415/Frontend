import React from "react";
import { Form, Input, Button, Checkbox } from 'antd'; 
import logo from "./logo.PNG"
import {Title,
  Para,
  SigInWrapper
} from "./styles";


const SigIn = () => {
  return (

    <SigInWrapper> 
       <img src={logo} className="App-logo" alt="logo" />
  <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      //onFinish={onFinish}
    >
  <Title>Login
</Title>
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
  
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
        Sign In
        </Button> <Para>
        By continuing, you agree to our    <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
       <br/><hr/>New User <a href="">Sign Up</a></Para>
      </Form.Item>
    </Form>
 
      </SigInWrapper>

  );
};

export default SigIn;