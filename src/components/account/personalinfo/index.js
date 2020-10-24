import React, { useState } from 'react';
import { Modal} from 'antd';
import { Row, Col } from 'antd';
import { Form, Input } from 'antd'; 
import { Button } from 'antd';

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
  const [visible, setVisible] = useState(false);

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
    <Input   addonAfter={<EditOutlined/>} />
      </Form.Item>
	  <Form.Item
        label="Address"
		name="username"  onClick={() => setVisible(true)}  
      >
      <Input addonAfter={<EditOutlined/>} />
      </Form.Item>

     
	  <Form.Item
        label="Phone"
        name="username" 
      >
 <Input   addonAfter={<EditOutlined/>} />
      </Form.Item>
 
 
    </Form>
    
    </Col>
  </Row>
  
	
      <Modal 
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)} 
      >  
         <Title level={2}> Change Primary Address</Title>
        <Form.Item  >
          <Input />
        </Form.Item> <br/>
     
        <Title level={2}> Add New Address</Title>
        <Form.Item  >
          <Input />
        </Form.Item>    
        <Button>Save Changes</Button>

      </Modal>
      </PersonalInfoWrapper>
     
		)
	
}
export default PersonalInfo
 