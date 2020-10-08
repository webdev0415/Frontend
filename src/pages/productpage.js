import React from "react"
import styled from "styled-components"
import Logo from "../components/main/logo"
import Topmenu from "../components/main/topmenu"
import Menubar from "../components/main/menubar"
import Breadcrumb from "../components/product/breadcrumb"
import CarouselProduct from "../components/product/carouselproduct"
import LayoutPage from "../components/product/layoutpage"
import RecentlyViewed from "../components/main/recently_viewed" 
import Footer from "../components/main/footer"

const ProductPage = () => {
	return (
		<ProductPageWrapper>
			<Logo />
			<Menubar />
			<Topmenu />
			<Breadcrumb />
		    <CarouselProduct />
            <LayoutPage />
			<RecentlyViewed />
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