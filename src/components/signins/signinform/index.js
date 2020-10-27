import React from "react";
import { Form, Input, Button, Checkbox } from 'antd'; 
import {Link} from "react-router-dom"
import logo from "./logo.PNG"
import {useDispatch} from "react-redux"
import {loginUser} from "../../../store/action"
import {Title,
  Para,
  SigInWrapper
} from "./styles";
import {useHistory} from "react-router-dom"


const SigIn = () => {

  const [loginParam, setLoginParam] = React.useState({})
  const dispatch = useDispatch()
  const history = useHistory()
  const handleChange = e => {
    setLoginParam({
      ...loginParam,
      [e.target.id]: e.target.value
    })
  }
  const onFinish = () => {
    dispatch(loginUser(loginParam, history))
  }
  return (

    <SigInWrapper> 
       <img src={logo} className="App-logo" alt="logo" />
  <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
  <Title>Login
</Title>
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
  
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link className="login-form-forgot">
          Forgot password
        </Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
        Sign In
        </Button> <Para>
        By continuing, you agree to our    <Link>Conditions of Use</Link> and <Link>Privacy Notice</Link>.
       <br/></Para>
       <hr/>New User <Link to="/signup">Sign Up</Link>
      </Form.Item>
    </Form>
 
      </SigInWrapper>

  );
};

export default SigIn;
