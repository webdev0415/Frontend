import React from "react" 
import { Row, Col } from 'antd';
import { Form, Input } from 'antd';

import {SettingOutlined,EditOutlined
  } from '@ant-design/icons'; 

import {
	PersonalInfoWrapper,
	Title 
} from "./styles"

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
  };
  const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
  };
const PersonalInfo = () => {
	return (
		<PersonalInfoWrapper>
		<Row>  <Col span={23}>  <Title>Personal Information</Title> </Col> <Col span={1}> <SettingOutlined /></Col>
		<Col span={24}>
	<Form
      {...layout}
      name="basic" 
    >
      <Form.Item
        label="Email"
        name="username" 
      >
        <Input />
      </Form.Item>
	  <Form.Item
        label="Address"
		name="username"  
      >
      <Input  prefix={<EditOutlined/>} />
      </Form.Item>
	  <Form.Item
        label="Phone"
        name="username" 
      >
        <Input />
      </Form.Item>
 
 
    </Form>
    
    </Col>
  </Row>
		</PersonalInfoWrapper>
		)
	
}
export default PersonalInfo
 