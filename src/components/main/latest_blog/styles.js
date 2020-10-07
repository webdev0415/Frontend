import styled from "styled-components";

export const ItemContainer = styled.div.attrs({
  className: ""
})``;

export const ImageContainer = styled.div.attrs({
  className: ""
})``;

export const ContentContainer = styled.div.attrs({
  className: "flex flex-col px-4 justify-center w-2/3 py-1"
})``;

export const ReadMoreButton = styled.button.attrs({
  className:
    "bg-blue-700 w-1/3 shadow-md hover:bg-blue-800 font-weight-bold py-2 px-4 rounded-full text-white mt-2"
})``;
export const Container = styled.div.attrs({
  className: "flex flex-row border-solid border-b border-gray mx-10 relative"
})``;

export const Title = styled.h2.attrs({
  className: "font-weight-bold text-2xl my-5 mx-10"
})``;
export const FullContainer = styled.div.attrs({
  className: "container"
})``;
export const BlogImg = styled.img.attrs({
  className: "w-full h-full object-cover"
})`
  width: 100%;
`;
export const ArrowContainer = styled.div.attrs({
  className: "flex flex-row  absolute bottom-0 right-0 m-2 text-right"
})``;

export const Button = styled.a.attrs({
  className: "cursor-pointer btn btn-default text-center"
})`
  width: 20px;
  background: #eee;
  padding:6px 20px;
  border-right:1px solid #f9f9f9;
`;
export const Row = styled.div.attrs({
  className: "row"
})``;
export const Col = styled.div.attrs({

})``;