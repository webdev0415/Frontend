import styled from "styled-components"
export const InnerContainer = styled.div.attrs({
  className: "container pt-5"
})`
background:none;
& .ant-tabs-content {margin-top: -15px;
  background: #fff;
  width: 70%;
  padding: 30px;}
  .ant-tabs-content img{margin-bottom:30px;}
  & .ant-descriptions-bordered .ant-descriptions-item-label{width: 50%;background:none;} 
  & td{font-weight:500;}
  & .ant-tabs > .ant-tabs-nav, .ant-tabs > div > .ant-tabs-nav {border-bottom:4px solid #212b46;}
  & .ant-tabs-tab-btn {padding: 5px 15px;    font-weight: 500;}
 & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #fff;background:#212b46;
}
& .ant-comment-content p {
  font-weight: 400;
  font-size: 13px;
  color: #232323;
}
& .ant-tabs-tab {padding:0;margin:0;}
& .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab, .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab{padding: 0;border: 0;}
`