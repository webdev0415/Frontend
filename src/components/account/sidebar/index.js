import React from "react"  
import { Menu, Button } from 'antd';
import { Badge } from 'antd';
import { Typography  } from 'antd';
import {
  InboxOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
 GiftOutlined,
 TagsOutlined 
} from '@ant-design/icons';
import {
	SidebarWrapper
} from "./styles"
 
const { Text  } = Typography;
const { SubMenu } = Menu;

const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  return (
    <SidebarWrapper>    <div style={{ width: 225 }}>
        <Button type="primary" onClick={toggleCollapsed} style={{ marginBotto: 16 }}>
        {
          collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
        }
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
         
          <SubMenu key="sub1" icon={<InboxOutlined />} title="Orders">
              <Menu.Item key="1">Order List</Menu.Item>
              <Menu.Item key="2">Order statuses</Menu.Item>
              <Menu.Item key="3">Statistic</Menu.Item>
              <Menu.Item key="4">Accounting</Menu.Item>
              <Menu.Item key="5">Payment</Menu.Item>
              <Menu.Item key="6">Transaction</Menu.Item>
              <Menu.Item key="7">Vendor Statistic</Menu.Item>
              <Menu.Item key="8">Vendor Transaction</Menu.Item>
              <Menu.Item key="9">Messages</Menu.Item>
          </SubMenu> 
          <SubMenu key="sub2" icon={<TagsOutlined />} title="Catalog">           
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" icon={<GiftOutlined />} title="Discount">           
            <Menu.Item key="13">Option 10</Menu.Item>
          </SubMenu>
        </Menu>
      </div>  
      </SidebarWrapper>
    )
}
 
export default Sidebar
 