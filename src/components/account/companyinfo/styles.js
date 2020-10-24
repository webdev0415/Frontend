import styled from "styled-components"

export const CompanyInfoWrapper = styled.div.attrs({
  className: "CompanyInfo-Wrapper"
})`
background: #c4c4c4; margin-bottom:30px;padding:20px;border-left:30px solid #fff;
  & .anticon {
    float:right;
  }
& .ant-col { color:#fff;}
& .ant-form-item{margin-bottom: 10px;}
& .ant-form-item-label,.ant-form-item-label > label{text-align:left;color:#fff;}

`
export const Title = styled.h5.attrs({
  className: ""
})`
 color:#fff;text-align:center;margin-bottom:30px;

`
 