import React from "react";  
import { Tabs, Image, Avatar } from 'antd';
import {useSelector} from "react-redux"
import {  
  InnerContainer
} from "./styles";

const { TabPane } = Tabs; 
const ProductGallery = () => {
  // const [tabIndex, setTabIndex] = React.useState('left')
  const details = useSelector(state=>state.products.productdetail)
  let image_gallery = []
  if (details!==undefined && details.length > 0) {
    image_gallery = [details[0].image,]
    details[0].colors.forEach(item=>{
      image_gallery.push(item.image)
    })
  }

  return (
    <InnerContainer>  <div>     
       <div className="card-container">
        <Tabs type="card" tabPosition='left'>
        {
          image_gallery && image_gallery.length > 0 && image_gallery.map((el, index)=>
            <TabPane  tab={
              <Avatar 
                  src={el}
              /> 
              } key={index}>
              <Image src={el}
              /> 
            </TabPane>
            )
        }
        </Tabs>  
      </div>
      </div> 
    </InnerContainer> 
    )
}

export default ProductGallery;
