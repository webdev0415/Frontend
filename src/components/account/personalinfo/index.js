import React, { useState } from 'react';
import { Modal} from 'antd';
import { Row, Col } from 'antd';
import { Form, Input } from 'antd'; 
import { Button } from 'antd';
import {useSelector} from "react-redux"
import {SettingOutlined,EditOutlined
  } from '@ant-design/icons'; 
import Autocomplete from 'react-google-autocomplete';
// import GoogleAutoComplete from 'react-google-autocomplete-address-fields';
import {
	PersonalInfoWrapper,
  Title 
} from "./styles"

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
  };
const PersonalInfo = () => {
  const [visible, setVisible] = useState(false);
  const userinfo = useSelector(state=>state.auth.userprofile.user)
  const addresses = useSelector(state=>state.auth.userprofile.addresses)
  let primary_address
  if (addresses && addresses.length>0) {
    primary_address = addresses.filter(el=>el.primary===true)[0]
  }
  let useremail, userphone
  if (userinfo) {
    useremail = userinfo.email
    userphone = userinfo.phone
  }
  const handleSubmit = () => {
    console.log("submit request")
  }
  const handleClick = () => {

  }
  const handleCancel = e => {
    console.log(e);
    setVisible(false)
  };
	return (
		<PersonalInfoWrapper>
		<Row>  <Col span={23}>  <Title>Personal Information</Title> </Col> <Col span={1}> <SettingOutlined /></Col>
		<Col span={24}>
	<Form
      {...layout}
      name="basic"
      fields={[
        {
          name: ['address'],
          value: primary_address,
        },
        {
          name: ['email'],
          value: useremail,
        },
        {
          name: ['phone'],
          value: userphone,
        },
      ]} 
    >
      <Form.Item
        label="Email"
        name="email" 
      >
    <Input />
      </Form.Item>
	  <Form.Item
      label="Address"
		  name="address"
      >
      <Input addonAfter={<EditOutlined onClick={() => setVisible(true)}/>} />
      </Form.Item>

     
	  <Form.Item
        label="Phone"
        name="phone" 
      >
 <Input />
      </Form.Item>
 
 
    </Form>
    
    </Col>
  </Row>
  
	
      <Modal 
        centered
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleSubmit}>
              Save Changes
            </Button>,
          ]}
      >  
         <Title level={2}> Change Primary Address</Title>
         {
           addresses && addresses.length>0 && addresses.map((el, id)=>
             <Button block key={id} style={{margin: '10px auto'}} onClick={handleClick}>{`${el.first_name} ${el.last_name} ${el.line1} ${el.line2} ${el.city} ${el.state} ${el.country}`}</Button>
             )
         }   
        <Title level={2}> Add New Address</Title>
        <Autocomplete
            style={{width: '100%'}}
            onPlaceSelected={(place) => {
              console.log(place);
            }}
            componentRestrictions={{country: "ru"}}
        />

      </Modal>
      </PersonalInfoWrapper>
     
		)
	
}
export default PersonalInfo
 