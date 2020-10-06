import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../featured_products/product_item";
import {
	Title, 
	Container,
	FullContainer
} from "./styles"
import {getRecentProducts} from "../../../store/action"

const RecentlyView = () => {
	const dispatch = useDispatch()
	React.useEffect(()=>{
		dispatch(getRecentProducts())
	}, [])

	const recent = useSelector(state=> state.products.recent)
	return (
		<FullContainer>
		<Title>Revently Viewed</Title> <div className="col-md-12">
		<Container>
			{
				recent && recent.map((el, id)=> <ProductItem key={id} data={el} />)
			}
		</Container> </div>
		</FullContainer>
		)
}
export default RecentlyView
