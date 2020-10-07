import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import ProductItem from "../featured_products/product_item";
import {
	Title, 
	Container,
	FullContainer
} from "./styles"
import {
	ShowMoreButton
} from "../featured_products/styles"
import {getRecentProducts} from "../../../store/action"

const RecentlyView = () => {
	const [displayIndex, setDisplayIndex] = React.useState(6)
	const [loading, setLoading] = React.useState(false)
	const dispatch = useDispatch()
	React.useEffect(()=>{
		dispatch(getRecentProducts())
	}, [])

	const recent = useSelector(state=> state.products.recent)
	const length = recent.length
	const handleClick = async () => {
		setLoading(true)
		await setDisplayIndex(displayIndex+6)
		setLoading(false)
	}
	return (
		<FullContainer>
		<Title>Revently Viewed</Title> <div className="col-md-12">
		<Container>
			{
				recent && recent.filter((el, id)=>id < displayIndex).map((el, id)=> <ProductItem key={id} data={el} />)
			}
		</Container> 
		{
			displayIndex < length && 
			<ShowMoreButton onClick={handleClick}>
				<ClipLoader size={24} loading={loading} />
				{!loading && <label>Show more</label> }
			</ShowMoreButton>
		}
		
		</div>
		</FullContainer>
		)
}
export default RecentlyView
