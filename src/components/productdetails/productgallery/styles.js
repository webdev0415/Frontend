import styled from "styled-components"
export const InnerContainer = styled.div.attrs({
  className: "container pt-4"
})` 
& .ant-tabs-left > .ant-tabs-nav .ant-tabs-tab, .ant-tabs-right > .ant-tabs-nav .ant-tabs-tab, .ant-tabs-left > div > .ant-tabs-nav .ant-tabs-tab, .ant-tabs-right > div > .ant-tabs-nav .ant-tabs-tab
{margin:0;padding:0;margin-bottom:10px;}
& .ant-tabs-left > .ant-tabs-content-holder > .ant-tabs-content > .ant-tabs-tabpane, .ant-tabs-left > div > .ant-tabs-content-holder > .ant-tabs-content > .ant-tabs-tabpane {
  padding-left: 10px;
}
& .ant-tabs-tab-btn .ant-avatar{ 
  width: 80px;
  height: 80px;border-radius:0;
}
& .ant-tabs-tab-btn {
  border: 1px solid #eee; background:none;   }
& .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  border: 1px solid #F44336;background:none;}
  & .ant-tabs-tab{margin-bottom: 10px!important;}
`