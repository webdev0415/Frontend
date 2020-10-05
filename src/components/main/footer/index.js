import React from "react";

import { Container, ColContainer } from "./styles";

const Footer = (props) => {
  return (
    <>
      <div className="bg-gray-900 footer-uvs justify-center">
      <div className="container"><div class="row"><div class="col-md-3">
      <h4> Contact Us</h4>
          <p >
            <i class="fa fa-phone mr-2" aria-hidden="true"></i>{" "}
            (+01)123-456-7890
          </p>
          <p >
            <i class="fa fa-envelope mr-2" aria-hidden="true"></i>
            manager@shop.com
          </p>
          <p >
            <i class="fa fa-map-marker mr-2" aria-hidden="true"></i>Location
            store
          </p></div>
          <div class="col-md-2">
          <h4>Policies & Info</h4>
          <p >Terms Conditions</p>
          <p >Policy for Sellers</p>
          <p >Policy for Buyers</p>
          <p >Shipping & Refund</p>
          <p >Wholesale Policy</p>
          </div>
          <div class="col-md-2">
          <h4>Quick Links</h4>
          <p >Terms Conditions</p>
          <p >Policy for Sellers</p>
          <p >Policy for Buyers</p>
          <p >Shipping & Refund</p>
          <p >Wholesale Policy</p>
          </div>
          <div class="col-md-2">
          <h4>My account</h4>
          <p >Terms Conditions</p>
          <p >Policy for Sellers</p>
          <p >Policy for Buyers</p>
          <p >Shipping & Refund</p>
          <p >Wholesale Policy</p>
          </div>
          <div class="col-md-3">
          <h4>Subscribe Now</h4>
          <p className="text-gray-400 mt-3">Terms Conditions</p>
          <div className="row mt-4 search-uvs">
            <input
              className="form-control col-10"
              placeholder=" "
            />
            <button className="btn btn-primary uvs-btn col-2"> <i class="text-gray-400 mr-2 fa fa-search"></i></button>
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
          </div>  </div>  </div>  </div>
      <Container className="bg-black border-t justify-end footer-uvs-row">
      <div className="container"><div class="row"><div class="col-md-12">   <img src="https://img.icons8.com/plasticine/48/000000/google-wallet.png" />
        <img src="https://img.icons8.com/fluent/48/000000/bitcoin.png" />
        <img src="https://img.icons8.com/officel/48/000000/discover.png" />
        <img src="https://img.icons8.com/fluent/48/000000/mastercard.png" />
        <img src="https://img.icons8.com/fluent/48/000000/paypal.png" />
        <img src="https://img.icons8.com/color/48/000000/visa.png" />
        </div>  </div>  </div>   </Container>
    </>
  );
};

export default Footer;
