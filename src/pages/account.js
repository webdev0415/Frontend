import React from "react"
import styled from "styled-components" 
import Layout from "../components/account/layoutpage" 
import SearchMenu from "../components/main/topmenu/searchmenu"
import Menubar from "../components/main/menubar"
import {Row, Col} from "antd";
import Sidebar from "../components/account/sidebar";

const AccountPage = () => {
	return (
		<>
		<Menubar />
		<SearchMenu />
		<Row>      
			<Col span={4}>     
				<Sidebar />   
			</Col>
			<Col span={20}>
				<AccountPageWrapper> 	 
					<Layout />  
				</AccountPageWrapper>
			</Col>
		</Row>
		</>
		)
}
const AccountPageWrapper = styled.div.attrs({
  className: ""
})`
	background-color: #f9f9f9;
`
export default AccountPage