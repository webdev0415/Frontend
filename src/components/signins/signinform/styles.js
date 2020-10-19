import styled from "styled-components";

export const SigInWrapper = styled.div.attrs({
  className: "col-md-4"
})`  
margin:0px auto;

&   .ant-form {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

&   .ant-form-horizontal .ant-form-item-control {
  width: 100%!important;
  -ms-flex: auto!important;
  flex: auto!important;
}

&   .ant-form-item-label > label{height:auto!important;}

&  .login-form-button {
  width: 100%!important;
}
&   .App-logo {
  width: 100px;
  margin-left: 40%;
  margin-bottom:5px;
}
& .ant-btn-primary {
  color: #fff;
  background: #fcca03;
  border-color: #fcca03;margin:10px 0;}
  & .ant-btn-primary:hover {background: #ecbe05;
    border-color: #eabc05;}
& .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before{content:"";}
& .ant-form-item{margin-bottom:10px;}
`;
export const Title = styled.h3.attrs({
  className: "font-weight-bold"
})``;
export const Para = styled.p.attrs({
  className: ""
})``;