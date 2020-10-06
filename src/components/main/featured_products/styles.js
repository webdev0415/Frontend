import styled from "styled-components";

export const ProductContainer = styled.div.attrs({
  className: "w-1/6 p-2 bg-white m-1 my-2"
})``;

export const ImageContainer = styled.div.attrs({
  className: "bg-gray-300"
})``;
export const Container = styled.div.attrs({
  className:
    "col-md-12"
})``;

export const Title = styled.h2.attrs({
  className: "font-weight-bold text-2xl my-5 mx-10"
})``;

export const ShowMoreButton = styled.button.attrs({
  className:
    "w-full bg-white border rounded h-12 hover:bg-gray-200 flex-row flex justify-center items-center my-4 btn-default btn-block p-2"
})``;
export const FullContent = styled.div.attrs({
  className: "container"
})``;
export const Span = styled.span.attrs({
  className: "ml-4"
})``;
export const InnerContainer = styled.div.attrs({
  className: "row"
})``;
export const NavTabs = styled.ul.attrs({
  className: "nav nav-tabs"
})`
  border-bottom: 4px solid #212b46;
  margin-bottom:20px;
  padding-bottom: 5px;
`;
export const NavItem = styled.li.attrs({
  className: "nav-item"
})`
  cursor:pointer;
`;
export const NavTxt = styled.span.attrs({
})`
  background-color: ${(props)=>props.bgcolor};
`;