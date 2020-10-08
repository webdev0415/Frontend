import React from "react";  
import { Card } from 'antd';
 

function ProductSider() {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title=" Apparels" bordered={false} style={{ width: 300 }}>
        <ul><li>
          Apparels </li><li>Health & Medical</li><li>Consumer Electronics</li><li>Vehicle Accessories</li><li>
    Sports & Entertainment</li><li>Office Electronics</li><li>Laptops</li><li>MobilesTools & Hardwares</li><li>
      Video Games</li><li>Home & GardenOther

          </li></ul>
      </Card>
      <Card title="Fashion Accessories" bordered={false} style={{ width: 300 }}>
        <ul><li>
          Apparels </li><li>Health & Medical</li><li>Consumer Electronics</li><li>Vehicle Accessories</li><li>
    Sports & Entertainment</li><li>Office Electronics</li><li>Laptops</li><li>MobilesTools & Hardwares</li><li>
      Video Games</li><li>Home & GardenOther

          </li></ul>
      </Card>
      <Card title="Timepieces Jewellery" bordered={false} style={{ width: 300 }}>
        <ul><li>
          Apparels </li><li>Health & Medical</li><li>Consumer Electronics</li><li>Vehicle Accessories</li><li>
    Sports & Entertainment</li><li>Office Electronics</li><li>Laptops</li><li>MobilesTools & Hardwares</li><li>
      Video Games</li><li>Home & GardenOther

          </li></ul>
      </Card>
    </div>
  );
}

export default ProductSider;
