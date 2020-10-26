import React from "react";
import {Row, Col} from "antd"; 
import styled from "styled-components" 
import Sidebar from "../components/account/sidebar";
import Layout from "../components/account/layoutpage" 
const AccountPage = () => {
	return (
		<Row>      
		<Col span={4}>     <Sidebar />   </Col>
		<Col span={20}>  	<AccountPageWrapper> 	 
			<Layout />  
		</AccountPageWrapper></Col>    
        </Row> 
		)
}
const AccountPageWrapper = styled.div.attrs({
  className: ""
})`
	background-color: #fff;
`
export default AccountPage