import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "w-full flex flex-row justify-between"
})``;

export const LogoContainer = styled.div.attrs({
  className: "w-32 bg-gray-600 h-12"
})``;

export const ControllerContainer = styled.div.attrs({
  className: "flex-1 h-12 flex flex-row justify-end items-center"
})``;

export const BadgeContainer = styled.div.attrs({
  className:
    "absolute w-5 h-5 bg-black bg-blue-900 rounded-full flex justify-center items-center"
})`
  right: -8px;
`;

export const MenuItem = styled.div.attrs({
  className: "relative inline-block py-2 px-3 cursor-pointer z-20 text-black"
})``;

export const MenuContent = styled.div.attrs({
  className: "absolute left-0 w-64 bg-white-uvs z-10"
})`
  top: 2.5rem;
`;

export const CategoryMenuItem = styled.div.attrs({
  className:
    "flex flex-row justify-between py-2 px-3 text-black hover:bg-gray-300 uvs-menu-b"
})``;

export const MenuItemContent = styled.div.attrs({
  className: "absolute bg-gray-300 flex flex-row p-10 uvs-menu-b-sub"
})`
  left: 17.3rem;
  top: 0;
`;

export const MenuItemContentCols = styled.div.attrs({
  className: "flex flex-col w-64 mr-6"
})``;
export const TopMenuWrapper = styled.div.attrs({
  className: ""
})`
  padding: 15px 0;
  font-size:12px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06);
  margin-bottom:0px;
`;
export const Row = styled.div.attrs({
  className: "row"
})``;
export const Col = styled.div.attrs({

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
  `;
export const Navbar = styled.div.attrs({
  className: "navbar"
})``;