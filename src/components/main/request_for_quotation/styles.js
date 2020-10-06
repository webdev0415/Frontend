import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "mx-10"
})`
  height: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Title = styled.h2.attrs({
  className: "font-weight-bold text-2xl my-3 mx-10"
})``;

export const SelectedContainer = styled.div.attrs({
  className: ""
})`
  height:  auto;
  background: url('./11.png') no-repeat;
  position: relative;padding: 30px 60px 30px 30px;
`;

export const SelectedTitleContainer = styled.div.attrs({
  className: "p-8"
})``;

export const SelectedDescContainer = styled.div.attrs({
  className: "p-4"
})`

  position: absolute;
  bottom: 0;
  display: grid;
  grid-template-areas:
  'row1 row1'
  'row21 row22';
  grid-gap: 15px;
  `;

export const SelectedTitle = styled.h3.attrs({
  className: "text-2xl text-white mt-4 ml-3"
})``;

export const DescHeader = styled.p.attrs({
  className: "text-xl text-white mb-3"
})``;

export const DescBody = styled.p.attrs({
  className: "text-sl mb-3"
})`
  color: lightgray;
`;

export const FormContainer = styled.div.attrs({
  className: "uvs-form"
})``;

export const FormTitle = styled.h3.attrs({
  className: "font-weight-bold text-xl text-black"
})``;

export const FormDesc = styled.p.attrs({
  className: "text-lg text-gray-700 mt-2"
})``;

export const RowContainer = styled.div.attrs({
  className: "w-full flex flex-row mt-8"
})``;

export const FormInput = styled.input.attrs({
  className: "my-2 h-12 p-4 border form-control"
})``;
export const FormSelect = styled.select.attrs({
  className: "my-2   border form-control  form-select"
})``;
export const SubmitButton = styled.button.attrs({
  className:
    " btn  py-3 px-5 rounded-full text-white mt-8"
})`
  margin-top:30px;
  background:#212b46;
  color:#fff;
  padding:20px 30px;
  font-weight:normal;
  border-radius: 30px;margin-bottom:10px;
`; 
export const Row = styled.div.attrs({
  className: "row"
})``;
export const Col2 = styled.div.attrs({
  className: "col-md-6"
})``;
export const FullContainer = styled.div.attrs({
  className: "container"
})``;
export const DescItem = styled.div`

`