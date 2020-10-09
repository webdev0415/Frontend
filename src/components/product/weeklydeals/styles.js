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
export const Title = styled.div.attrs({
  className: ""
})`
font-size:24px;padding:20px 0; 
& > a {
  font-size: 14px;color:orange;float:right;text-decoration:none;
}
`;
export const WeeklyDealsWrapper = styled.div.attrs({
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
    & .ant-card-bordered {
      border: 0px solid #f0f0f0;
       background:none;
  }
    & .ant-card-head {
      padding: 0;}
      & .ant-card-bordered img{border-radius:10px;
    }

`;