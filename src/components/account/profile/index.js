import React from "react" 
import { Row, Col } from 'antd';
import {SettingOutlined, CheckOutlined
  } from '@ant-design/icons';
import { Avatar } from 'antd';  


import {
	ProfileWrapper,
	Title,
	Text 
} from "./styles"


const Profile = () => {
	return (
		<ProfileWrapper>
		<Row> <Col span={24}><SettingOutlined /></Col>
    <Col span={1}> </Col>  <Col span={4}>
    <Avatar src="https://via.placeholder.com/150" />
	</Col>  <Col span={6}><br/>
    <Title>Michael Brown <Avatar size={40} src="https://via.placeholder.com/150" /></Title>
	<Text>mike@jinglebell.com     <Avatar size={20} src="https://via.placeholder.com/150" />
</Text>
	</Col>  <Col span={4}>   </Col>
    <Col span={8}><br/>
     Member Since: 10/06/2020<br/>
	 Account Type: Buyer<br/>
	 Verification Status: Verified
    </Col>
  </Row>
		</ProfileWrapper>
		)
	
}
export default Profile
 