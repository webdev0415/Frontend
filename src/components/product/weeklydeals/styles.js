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
     margin-top:8px;
    }
    & .ant-card-bordered {padding:3px;
      border: 0px solid #f0f0f0;
      background: #fff; margin:0 3px;
  }
    & .ant-card-head {
      padding: 0;}
      & .ant-card-bordered img{border-radius:10px;
    }
& .leftimg{border-radius:10px;width:120%;}
`;
export const Colwraps = styled.div.attrs({
  className: ""
})`
  background: none;
     margin:0 6px;
  & .ant-card-head {font-size:14px;font-weight:bold;min-height: auto;
    padding: 0;}.ant-card-head-title{text-align:left;    padding: 0;}
    & .ant-card-bordered img{border-radius:0px;margin-right:10px;
      width:100%;height:120px;}
     & .ant-btn-round{height: 50px;font-size:18px;background-color:#ff8e0a;
        width: 50px;} 
        & .ant-card-body {
          padding: 5px;
      }
      &  
`;