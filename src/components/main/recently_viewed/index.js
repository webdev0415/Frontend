import React, { useState } from "react";
import {connect} from "react-redux"
import ProductItem from "../featured_products/product_item";
import {Title, Container} from "./styles"
import {getRecentProducts} from "../../../store/action"

const RecentlyView = ({recent, getRecentProducts}) => {
	React.useEffect(()=>{
		getRecentProducts()
	}, [])
	return (
		<><div class="container">
		<h2> 
		<Title>Revently Viewed</Title></h2> 
		<Container>
			{
				recent && recent.map((el, id)=> <ProductItem key={id} data={el} />)
			}
		</Container> </div>
		</>
		)
}
const mapStateToProps = state=> ({
  recent: state.products.recent,
})
const mapDispatchToProps = dispatch=>({
  getRecentProducts: getRecentProducts(dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(RecentlyView);
