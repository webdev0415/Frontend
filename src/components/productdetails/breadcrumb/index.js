import React from "react"; 
import {Row, Col} from "antd";
import { 
	InnerContainer,
} from "./styles";

const  Breadcrumb = () => {
  return (
    <>  <InnerContainer>
	<Row>
    Home / Categories / Apparels 
	</Row>  
            </InnerContainer>      </>
  );
};

export default Breadcrumb;
