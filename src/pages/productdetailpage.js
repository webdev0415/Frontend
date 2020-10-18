import React from "react"
import styled from "styled-components";
import Topmenu from "../components/main/topmenu";
import Menubar from "../components/main/menubar";
import Breadcrumb from "../components/product/breadcrumb";
import ProductDetails from "../components/productdetails/productdetails";
import RecentlyViewed from "../components/main/recently_viewed"
import Footer from "../components/main/footer";

const ProductDetailPage = () => {
	return (
		<ProductDetailPageWrapper>
			<Menubar />
			<Topmenu />
			<Breadcrumb 
			items={[
		          { url: "/", text: "Home" },
		          { url: "/", text: "Categories" },
		          { url: "/", text: "Tablet & Laptops Acceccories" },
		        ]}
		    /> 
		    <ProductDetails />
		    <RecentlyViewed />
			<Footer />			
		</ProductDetailPageWrapper>
		)
}

const ProductDetailPageWrapper = styled.div.attrs({
  className: ""
})`
	background-color: #f9f9f9;
`
export default ProductDetailPage