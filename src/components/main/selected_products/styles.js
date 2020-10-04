import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "row"
})`
  height: 400px;
`;

export const Title = styled.h2.attrs({
  className: "font-bold text-2xl my-5 mx-10"
})``;

export const SelectedContainer = styled.div.attrs({
  className: "w-full bg-gray-400 relative"
})`
  height: 400px;
`;

export const SelectedTitleContainer = styled.div.attrs({
  className: "absolute top-0 left-0 p-8"
})``;

export const SelectedTitle = styled.p.attrs({
  className: "text-2xl text-white mb-4"
})``;

export const GridContainer = styled.div.attrs({
  className: "row"
})`
  display:block; 
 `;

export const ShopButton = styled.button.attrs({
  className:
    "btn btn-uvs-show-white"
})``;
export const ArrivalContainer = styled.div.attrs({
  className: "p-2 flex-column bg-white"
})`
  background-color: ${(props) => props.backColor};
  height: ${(props) => props.height}px;
`;

export const ImageContainer = styled.div.attrs({
  className: "w-full mt-2 bg-gray-400"
})`
  height: ${(props) => props.height}px;
`;

export const ArrivalTitle = styled.p.attrs({
  className: "w-full text-center font-bold mt-2"
})``;

export const Description = styled.p.attrs({
  className: "w-full text-center mt-2"
})``;
export const ImageItem = styled.img`
`