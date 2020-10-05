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
  className: "absolute left-0 w-64 bg-white z-10"
})`
  top: 2.5rem;
`;

export const CategoryMenuItem = styled.div.attrs({
  className:
    "flex flex-row justify-between py-2 px-3 text-black hover:bg-gray-300"
})``;

export const MenuItemContent = styled.div.attrs({
  className: "absolute bg-gray-300 flex flex-row p-10"
})`
  left: 16rem;
  top: 0;
`;

export const MenuItemContentCols = styled.div.attrs({
  className: "flex flex-col w-64 mr-6"
})``;
