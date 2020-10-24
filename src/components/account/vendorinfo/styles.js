import styled from "styled-components"

export const VendorInfoWrapper = styled.div.attrs({
  className: "VendorInfo-Wrapper"
})`
background: #c4c4c4;  padding:20px;
  & .anticon {
    float:right;
  }
& .ant-col {padding:10px;color:#fff;}
`
export const Title = styled.h5.attrs({
  className: "m-t-0"
})`
 color:#fff;text-align:center;

`
export const Text = styled.p.attrs({
  className: ""
})`
 

`
export const Avatar = styled.img.attrs({
  className: ""
})`
 width:100px;margin:0 auto;

`