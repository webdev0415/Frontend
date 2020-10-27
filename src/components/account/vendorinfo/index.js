import React from "react" 
import { Row, Col } from 'antd';
import {
	VendorInfoWrapper,
	Title 
} from "./styles"
import {useSelector} from "react-redux"

const VendorInfo = () => {
	
	let pv, psp, af, pq, pi, acb, ao, pl
	const data = useSelector(state=>state.auth.userprofile.vendor)
	console.log("vendor", data)
	if (data!==undefined && data.length>0) {
		pv = data[0].pv
		psp = data[0].psp
		af = data[0].af
		pq = data[0].pq
		pi = data[0].pi
		acb = data[0].acb
		ao = data[0].ao
		pl = data[0].pl
	}
	return (
		<VendorInfoWrapper>
			<Row>  
				<Col span={24}>  
					<Title>Vendor Information</Title> 
				</Col> 
			
			    <Col span={12}> 
					<p>Pricing Volume: {pv!==undefined && pv}</p>
					<p>Primary Sourcing Purpose: {psp!==undefined && psp}</p>
					<p>Average Frequency: {af!==undefined && af}</p>
					<p>Preferred Qualifications: {pq!==undefined && pq}</p>
					<p>Preferred Industries: {pi!==undefined && pi}</p>
			    </Col>
			    <Col span={12}>
				    <p>Average Cost Basis: {acb!==undefined && acb}</p>
					<p>Annual Overhead: {ao!==undefined && ao}</p>
					<p>Profit & Loss: {pl!==undefined && pl}</p>
			    </Col>
  			</Row>
		</VendorInfoWrapper>
		)
	
}
export default VendorInfo
 