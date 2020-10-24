import styled from "styled-components"

export const ProfileWrapper = styled.div.attrs({
  className: "Profile-Wrapper"
})`
background: #c4c4c4;border:2px solid #4eabe9;color:#fff;margin-bottom:30px;padding:10px;padding-bottom:30px;
  & .anticon {
    float:right;
  }
  & .ant-avatar{width:120px;height:120px;  }
& .ant-col {padding:10px;color:#fff;}
`
export const Title = styled.h4.attrs({
  className: ""
})`
 color:#fff;    margin-bottom: 0;

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