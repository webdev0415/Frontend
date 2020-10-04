import styled from "styled-components";

export const ProductContainer = styled.div.attrs({
  className: "w-1/6 p-2 bg-white my-2"
})``;

export const ImageContainer = styled.div.attrs({
  className: "bg-gray-300"
})``;
export const Container = styled.div.attrs({
  className:
    "flex flex-row border-solid border-b border-gray mx-10 h-screen flex-wrap"
})``;

export const Title = styled.h2.attrs({
  className: "font-bold text-2xl my-5 mx-10"
})``;

export const ShowMoreButton = styled.button.attrs({
  className:
    "w-full bg-white border rounded h-12 hover:bg-gray-200 flex-row flex justify-center items-center my-4"
})``;
