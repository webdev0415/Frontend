import styled from "styled-components"

export const PersonalInfoWrapper = styled.div.attrs({
  className: "PersonalInfo-Wrapper"
})`
background: #c4c4c4; margin-bottom:30px;padding:20px;height: 345px;

  & .anticon {
    float:right;
  }
& .ant-col {color:#fff;}
& .ant-form-item{margin-bottom: 10px;} 
& .ant-form-item-label,.ant-form-item-label > label{text-align:left;color:#fff;}

`
export const Title = styled.h5.attrs({
  className: ""
})`
 text-align:center;margin-bottom:30px;

`
 