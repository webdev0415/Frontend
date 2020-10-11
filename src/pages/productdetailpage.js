import React from "react";
import styled from "styled-components";
import Logo from "../components/main/logo";
import Topmenu from "../components/main/topmenu";
import Menubar from "../components/main/menubar";
import Breadcrumb from "../components/product/breadcrumb";
import ProductDetails from "../components/productdetails/productdetails";
import Footer from "../components/main/footer";

const ProductDetailPage = () => {
	return (
		<ProductDetailPageWrapper>
			<Logo />
			<Menubar />
			<Topmenu />
			<Breadcrumb /> 
			 <ProductDetails />   
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