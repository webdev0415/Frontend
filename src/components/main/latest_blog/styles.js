import styled from "styled-components";

export const ItemContainer = styled.div.attrs({
  className: ""
})``;

export const ImageContainer = styled.div.attrs({
  className: ""
})``;

export const ContentContainer = styled.div.attrs({
  className: "flex flex-col px-4 justify-center w-2/3"
})``;

export const ReadMoreButton = styled.button.attrs({
  className:
    "bg-blue-700 w-1/3 shadow-md hover:bg-blue-800 font-bold py-2 px-4 rounded-full text-white mt-2"
})``;
export const Container = styled.div.attrs({
  className: "flex flex-row border-solid border-b border-gray mx-10 relative"
})``;

export const Title = styled.h2.attrs({
  className: "font-bold text-2xl my-5 mx-10"
})``;

export const ArrowContainer = styled.div.attrs({
  className: "flex flex-row  absolute bottom-0 right-0 m-2"
})``;

export const Button = styled.a.attrs({
  className: "cursor-pointer bg-gray-500 z-50 text-center"
})`
  width: 20px;
`;