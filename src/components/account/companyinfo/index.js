import React from "react" 
import { Row, Col } from 'antd';
import { Form, Input } from 'antd';
import {SettingOutlined
  } from '@ant-design/icons'; 

import {
	CompanyInfoWrapper,
	Title,
	Text 
} from "./styles"
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
  };
  const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
  };

const CompanyInfo = () => {
	return (
		<CompanyInfoWrapper>
		<Row> <Col span={23}>  <Title>Company Information</Title> </Col> <Col span={1}> <SettingOutlined /></Col>
    <Col span={24}>
	<Form
      {...layout}
      name="basic" 
    >
      <Form.Item
        label="Comapny Name"
        name="username" 
      >
        <Input />
      </Form.Item>
	  <Form.Item
        label="Website"
        name="username" 
      >
        <Input />
      </Form.Item>
	  <Form.Item
        label="Business Type"
        name="username" 
      >
        <Input />
      </Form.Item>
	  <Form.Item
        label="Registered Address"
        name="username" 
      >
        <Input />
      </Form.Item>
	  <Form.Item
        label="Stock Ticker"
        name="username" 
      >
        <Input />
      </Form.Item>
 
 
    </Form>
    
    </Col>
  </Row>
		</CompanyInfoWrapper>
		)
	
}
export default CompanyInfo
 