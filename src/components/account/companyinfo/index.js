import React from "react" 
import { Row, Col } from 'antd';
import { Form, Input, Button, notification } from 'antd';
import {SettingOutlined, CloseOutlined
  } from '@ant-design/icons'; 
import {
	CompanyInfoWrapper,
	Title
} from "./styles"
import {useSelector} from "react-redux"

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
  };

const CompanyInfo = () => {
  const [status, setStatus] = React.useState(true)
  let name, website, type, address, ticker
  let initList = []
  const data = useSelector(state=>state.auth.userprofile.company)
  if (data!==undefined && data.length>0) {
    name = data[0].name
    website = data[0].website
    type = data[0].type
    address = data[0].address
    ticker = data[0].ticker
    initList = [
    {
      name: ['company_name'],
      value: name,
    },
    {
      name: ['website'],
      value: website,
    },
    {
      name: ['business_type'],
      value: type,
    },
    {
      name: ['address'],
      value: address,
    },
    {
      name: ['ticker'],
      value: ticker,
    }
    ]
  }
  const [fields, setFields] = React.useState(initList);
  const inputEl = React.useRef(null);

  const handleGearClick = () => {
    setStatus(false)
    inputEl.current.focus();
  }
  const handleClearClick = () => {
    setStatus(true)
  }
  const openNotification = () => {
    notification.success({
      message: 'Pending Approval',
      description:
        "Your request is submited exactly. Waiting for the admin's approval.",
      style: {
        width: 600,
      },
    });
  };
  const handleSubmitClick = () => {
    openNotification()
  }
  
	return (
		<CompanyInfoWrapper>
		<Row> 
      <Col span={23}>
      {
         status && <Title>Company Information</Title> 
      }
      {
        !status &&  <Button onClick={handleSubmitClick}>Submit</Button>
      }
      </Col> 
      <Col span={1}> 
        {
          status && <SettingOutlined onClick={handleGearClick} />
        }
        {
          !status && <CloseOutlined onClick={handleClearClick} />
        }
      </Col>
    <Col span={24}>
	<Form
      {...layout}
      name="basic"
      fields={fields}
      onFieldsChange={(newFields) => {
          setFields(newFields);
        }} 
    >
      <Form.Item
        label="Comapny Name"
        name="company_name" 
      >
         <Input ref={inputEl} readOnly={status} />
      </Form.Item>
	  <Form.Item
        label="Website"
        name="website" 
      >
         <Input readOnly={status} />
      </Form.Item>
	  <Form.Item
        label="Business Type"
        name="business_type" 
      >
         <Input readOnly={status} />
      </Form.Item>
	  <Form.Item
        label="Registered Address"
        name="address" 
      >
         <Input readOnly={status} />
      </Form.Item>
	  <Form.Item
        label="Stock Ticker"
        name="ticker" 
      >
         <Input readOnly={status} />
      </Form.Item>
 
 
    </Form>
    
    </Col>
  </Row>
		</CompanyInfoWrapper>
		)
	
}
export default CompanyInfo
 