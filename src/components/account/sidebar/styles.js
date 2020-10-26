import styled from "styled-components"

export const SidebarWrapper = styled.div.attrs({
  className: ""
})`
background: #000c17;  height: 900px;
& .ant-btn-primary{display:none;}
& .ant-menu-item .anticon, .ant-menu-submenu-title .anticon {font-size:18px;}
& .ant-badge-status-dot {
  position: relative;
  top: -29px;
  left: 40px;}
  & .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #000c17;
  }
  & i.ant-menu-submenu-arrow {
    display: none;
}
& .ant-typography.ant-typography-warning {
  float: right;
  color: #faad14;
  margin-right: 15px;
  margin-top: -25px;
}
& .ant-menu-dark .ant-menu-item:hover, .ant-menu-dark .ant-menu-item-active, .ant-menu-dark .ant-menu-submenu-active, .ant-menu-dark .ant-menu-submenu-open, .ant-menu-dark .ant-menu-submenu-selected, .ant-menu-dark .ant-menu-submenu-title:hover {
  color: #fff;
  background-color: #000c17;
}
& .ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark .ant-menu-sub {
  color: rgba(255, 255, 255, 0.65);
  background: #000c17;
}
& .ant-menu-sub.ant-menu-inline > .ant-menu-item, .ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
  height: 30px;
  line-height: 30px;
`


 
 