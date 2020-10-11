import React from "react";  
 import { Tabs } from 'antd'; 
import { Image, Avatar } from 'antd';
import {  
  InnerContainer
} from "./styles";

const { TabPane } = Tabs; 
class ProductGallery extends React.Component {
  state = {
    tabPosition: 'left',
  };  

  render() {
    return (
       <InnerContainer>  <div>     
       <div className="card-container">
    <Tabs type="card" tabPosition={this.state.tabPosition}>
          <TabPane  tab={
        <Avatar 
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      /> 
      } key="1">
          <Image 
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    /> 
          </TabPane>
          <TabPane  tab={
        <Avatar
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      /> 
      } key="2">
          <Image 
      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    /> 
          </TabPane>
          <TabPane  tab={
        <Avatar 
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      /> 
      } key="3">
          <Image 
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    /> 
          </TabPane>
          <TabPane  tab={
        <Avatar
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      /> 
      } key="4">
          <Image 
      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    /> 
          </TabPane>
        </Tabs>  </div>
      </div> </InnerContainer>  
    );
  }
}

export default ProductGallery;
