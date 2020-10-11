import styled from "styled-components"
 export const  ShortDescriptionWrapper = styled.div.attrs({
  className: "py-2"
})`
& .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) { 
  color: #F44336; 
  border-color: #F44336;
} & .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child {
border-right-color: #F44336;
}
& .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
  background-color: #F44336;
}
` 
export const Shorttopinfo = styled.div.attrs({
  className: "mb-3"
})` 
& .ant-row{font-size:12px;    line-height: 40px; } 
`  
export const Rates = styled.div.attrs({
  className: ""
})` 
& .ant-rate-star{font-size:12px;}
`  
export const Shortcolor = styled.div.attrs({
  className: "my-3"
})`
& .ant-radio-button-wrapper{margin-left:10px;padding:0;font-size: 1px;  height: 33px;}
.ant-avatar{
  width: 32px;
  height: 31px;border-radius:0;} 
 
`  
export const Shortsize = styled.div.attrs({
  className: ""
})`
& .ant-radio-button-wrapper{margin-left:10px;}
`
export const Shortprice = styled.div.attrs({
  className: "px-3 py-1"
})`
& .ant-row { text-align:center;
  border-radius: 12px;
  padding: 10px;
  background: #fff;
  border: 2px solid #eee;
} 
`    