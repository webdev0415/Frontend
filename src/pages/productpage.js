import React from "react"
import styled from "styled-components"
import Topmenu from "../components/main/topmenu"
import Menubar from "../components/main/menubar"
import BreadCrumb from "../components/product/breadcrumb"
import CarouselProduct from "../components/product/carouselproduct"
import Layout from "../components/product/layoutpage"
import Footer from "../components/main/footer"
const ProductPage = () => {
	return (
		<ProductPageWrapper>
			<Menubar />
			<Topmenu />
			<BreadCrumb
			items={[
		          { url: "/", text: "Home" },
		          { url: "/", text: "Categories" },
		          { url: "/", text: "Apparels" },
		        ]}
			 />
			<CarouselProduct />
			<Layout />
			<Footer />

		</ProductPageWrapper>
		)
}
const ProductPageWrapper = styled.div.attrs({
  className: ""
})`
	background-color: #f9f9f9;
`
export default ProductPage