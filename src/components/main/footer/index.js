import React from "react";

import { Container, ColContainer } from "./styles";

const Footer = (props) => {
  return (
    <>
      <Container className="bg-gray-900 justify-center">
        <ColContainer>
          <p className="font-bold text-lg text-white"> Contact Us</p>
          <p className="text-gray-400 mt-3 text-sm">
            <i class="fa fa-phone mr-2" aria-hidden="true"></i>{" "}
            (+01)123-456-7890
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            <i class="fa fa-envelope mr-2" aria-hidden="true"></i>
            manager@shop.com
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            <i class="fa fa-map-marker mr-2" aria-hidden="true"></i>Location
            store
          </p>
        </ColContainer>
        <ColContainer>
          <p className="font-bold text-lg text-white">Policies & Info</p>
          <p className="text-gray-400 mt-3 text-sm">Terms Conditions</p>
          <p className="text-gray-400 mt-2 text-sm">Policy for Sellers</p>
          <p className="text-gray-400 mt-2 text-sm">Policy for Buyers</p>
          <p className="text-gray-400 mt-2 text-sm">Shipping & Refund</p>
          <p className="text-gray-400 mt-2 text-sm">Wholesale Policy</p>
        </ColContainer>
        <ColContainer>
          <p className="font-bold text-lg text-white">Quick Links</p>
          <p className="text-gray-400 mt-3 text-sm">Terms Conditions</p>
          <p className="text-gray-400 mt-2 text-sm">Policy for Sellers</p>
          <p className="text-gray-400 mt-2 text-sm">Policy for Buyers</p>
          <p className="text-gray-400 mt-2 text-sm">Shipping & Refund</p>
          <p className="text-gray-400 mt-2 text-sm">Wholesale Policy</p>
        </ColContainer>
        <ColContainer>
          <p className="font-bold text-lg text-white">My account</p>
          <p className="text-gray-400 mt-3 text-sm">Terms Conditions</p>
          <p className="text-gray-400 mt-2 text-sm">Policy for Sellers</p>
          <p className="text-gray-400 mt-2 text-sm">Policy for Buyers</p>
          <p className="text-gray-400 mt-2 text-sm">Shipping & Refund</p>
          <p className="text-gray-400 mt-2 text-sm">Wholesale Policy</p>
        </ColContainer>
        <ColContainer>
          <p className="font-bold text-lg text-white">Subscribe Now</p>
          <p className="text-gray-400 mt-3">Terms Conditions</p>
          <div className="flex flex-row mt-4">
            <input
              className="rounded-l-full h-8 w-4/5 px-4"
              placeholder="Search"
            />
            <button className="rounded-r-full w-1/5 bg-blue-600 h-8"></button>
          </div>
          <div className="flex flex-row mt-4">
            <i class="text-gray-400 mr-2 fa fa-facebook" aria-hidden="true"></i>
            <i class="text-gray-400 mr-2 fa fa-twitter" aria-hidden="true"></i>
            <i
              class="text-gray-400 mr-2 fa fa-youtube-play"
              aria-hidden="true"
            ></i>
            <i class="text-gray-400 mr-2 fa fa-rss" aria-hidden="true"></i>
          </div>
        </ColContainer>
      </Container>
      <Container className="bg-black border-t justify-end">
        <img src="https://img.icons8.com/plasticine/48/000000/google-wallet.png" />
        <img src="https://img.icons8.com/fluent/48/000000/bitcoin.png" />
        <img src="https://img.icons8.com/officel/48/000000/discover.png" />
        <img src="https://img.icons8.com/fluent/48/000000/mastercard.png" />
        <img src="https://img.icons8.com/fluent/48/000000/paypal.png" />
        <img src="https://img.icons8.com/color/48/000000/visa.png" />
      </Container>
    </>
  );
};

export default Footer;
