import React from "react"
import styled from "styled-components"
import Logo from "../components/main/logo"
import Topmenu from "../components/main/topmenu"
import Menubar from "../components/main/menubar"
import Header from "../components/main/header"
import CategoryBar from "../components/main/categorybar"
import CarouselAds from "../components/main/carouselads"
import ShorticonBar from "../components/main/shorticonbar"
import SelectedProducts from "../components/main/selected_products"
import RequestForQuotation from "../components/main/request_for_quotation"
import FeaturedProduct from "../components/main/featured_products"
import RecentlyViewed from "../components/main/recently_viewed"
import LatestBlog from "../components/main/latest_blog"
import ContactUs from "../components/main/contactus"
import Footer from "../components/main/footer"

const MainPage = () => {
	return (
		<MainPageWrapper>
			<Topmenu />
			<CarouselAds />
		 	<ShorticonBar /> 
			<SelectedProducts />
			<RequestForQuotation />
			<FeaturedProduct />
			<RecentlyViewed />
			<LatestBlog />
			<Footer />
			
		</MainPageWrapper>
		)
}
const MainPageWrapper = styled.div.attrs({
  className: ""
})`
	background-color: #f9f9f9;
`

export default MainPage;
