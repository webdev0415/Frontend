import React from "react" 
import { Row, Col } from 'antd';
import {SettingOutlined
  } from '@ant-design/icons'; 

import {
	VendorInfoWrapper,
	Title 
} from "./styles"


const VendorInfo = () => {
	return (
		<VendorInfoWrapper>
			<Row>  <Col span={23}>  <Title>Vendor Information</Title> </Col> <Col span={1}> <SettingOutlined /></Col>
  <Col span={12}> 
Pricing Volume<br/>
Primary Sourcing Purpose<br/>
Average Frequency<br/>
Preferred Qualifications<br/>
Preferred Industries<br/>
    </Col>
    <Col span={12}>
   Average Cost Basis<br/>
	Annual Overhead<br/>
	Profit & Loss
    </Col>
  </Row>
		</VendorInfoWrapper>
		)
	
}
export default VendorInfo
 