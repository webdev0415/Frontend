import React from "react";
import {Link} from "react-router-dom"
import {
	BreadcrumContainer,
	Items,
	Item,
	Arrows,
	Wrapper
} from "./styles"

const Breadcrum = ({ items }) => {
  return (
    <BreadcrumContainer>
      <Wrapper style={{ alignItems: "center", justifyContent: "flex-start" }}>
        <Items>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <Link to={item.url}>
                <Item active={index === items.length - 1}>{item.text}</Item>
              </Link>
              {index !== items.length - 1 && <Arrows>/</Arrows>}
            </React.Fragment>
          ))}
        </Items>
      </Wrapper>
    </BreadcrumContainer>
  );
};

export default Breadcrum;


