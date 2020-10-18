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
export const Verified = styled.div.attrs({
  className: "" 
})`
font-size:12px;color:#5ea81f;line-height:18px;margin-bottom:20px;
& > .fa {
  font-size:18px;margin-right:10px;
}
`;
export const TopSuppliersWrapper = styled.div.attrs({
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
`;
export const Colwraps = styled.div.attrs({
  className: ""
})`
  background: none;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06);padding:15px;border-radius:10px;      margin: 5px;
  & .ant-card-head {font-size:12px;
    padding: 0;}.ant-card-head-title{text-align:center;}
    & .ant-card-bordered img{border-radius:0px;margin-right:10px;
      width: 92%;}
     & .ant-btn-round{height: 50px;font-size:18px;background-color:#ff8e0a;
        width: 50px;}
`;