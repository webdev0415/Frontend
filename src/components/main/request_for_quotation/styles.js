import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "flex flex-row border-solid border-b border-gray mx-10"
})`
  height: 400px;
`;

export const Title = styled.h2.attrs({
  className: "font-bold text-2xl my-5 mx-10"
})``;

export const SelectedContainer = styled.div.attrs({
  className: "w-full bg-black relative"
})`
  height: 400px;
`;

export const SelectedTitleContainer = styled.div.attrs({
  className: "absolute top-0 left-0 p-8 w-full"
})``;

export const SelectedDescContainer = styled.div.attrs({
  className: "absolute bottom-0 left-0 p-8 w-full"
})``;

export const SelectedTitle = styled.p.attrs({
  className: "text-2xl text-white mb-4"
})``;

export const DescHeader = styled.p.attrs({
  className: "text-xl text-white mb-3"
})``;

export const DescBody = styled.p.attrs({
  className: "text-sl text-gray-600 mb-3"
})``;

export const FormContainer = styled.div.attrs({
  className: "w-full overflow-y-auto mx-2 border border-gray-300 p-10"
})``;

export const FormTitle = styled.p.attrs({
  className: "font-bold text-xl text-black"
})``;

export const FormDesc = styled.p.attrs({
  className: "text-lg text-gray-700 mt-2"
})``;

export const RowContainer = styled.div.attrs({
  className: "w-full flex flex-row mt-8"
})``;

export const FormInput = styled.input.attrs({
  className: "flex-1 h-12 p-4 border"
})``;

export const SubmitButton = styled.button.attrs({
  className:
    "h-12 bg-blue-700 shadow-md hover:bg-blue-800 font-bold py-2 px-4 rounded-full text-white mt-8"
})``;
