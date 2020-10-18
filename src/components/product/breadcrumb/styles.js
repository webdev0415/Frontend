import styled from "styled-components"
export const BreadcrumContainer = styled.div`
  background-color: ${({ theme }) => theme.breadcrumBackground};
  padding: 1.7rem;
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.span`
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.6rem;
  text-decoration: none;
  color: gray;
  padding: 0 1rem;
  cursor: pointer;
`;

export const Arrows = styled.span`
  color: gray;
`;


export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 111.6rem;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`;