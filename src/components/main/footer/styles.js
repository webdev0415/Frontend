import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "w-full px-32 flex flex-row"
})``;
export const InnerContainer = styled.div.attrs({
  className: "container"
})``
export const FooterContainer = styled.div.attrs({
  className: "w-full bg-dark border-t"
})``
export const ColContainer = styled.div.attrs({
  className: "w-1/6 mx-2 my-8"
})``;

export const Row = styled.div.attrs({
  className: "row"
})``;

export const Col = styled.div.attrs({
})``;
export const ColTitle = styled.h4.attrs({
})``;
export const ColText = styled.p.attrs({
})``;
export const SearchForm = styled.div.attrs({
    className: "row mt-4"
})``;
export const SearchInput = styled.input.attrs({
    className: "form-control col-10"
})`
  border-radius: 20px 0px 0px 20px;  
`;
export const SearchBtn = styled.button.attrs({
    className: "btn btn-primary col-2"
})`
  border-radius: 0px 20px 20px 0px;
  border:0; 
  background: #212b46;  
`;
export const FooterWrapper = styled.div.attrs({
  className: ""
})`
	background: #232323;
    color: #fff;
    padding-top: 40px;
    padding-bottom: 40px;
    & > h4 {
    	font-size: 16px;
    }
    & p {
    	font-weight:400;
    	font-size: 12px;
    	color:#bbb9b9;
    }
`;