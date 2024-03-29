import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "w-full px-32 flex flex-row"
})``;
export const InnerContainer = styled.div.attrs({
  className: "container"
})``
 
export const ColContainer = styled.div.attrs({
  className: "w-1/6 mx-2 my-8"
})``;

export const Row = styled.div.attrs({
  className: "row"
})``;
 
export const LayoutPageWrapper = styled.div.attrs({
  className: ""
})`
	background: none;
    
    & > h4 {
    	font-size: 16px;
    }
    & p {
    	font-weight:400;
    	font-size: 12px;
    	color:#bbb9b9;
    }
    & .ant-col-18 {padding-left:40px;}
`;