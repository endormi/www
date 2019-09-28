import styled from "styled-components";
import { Card as CardRebass } from "rebass";

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 15px;

  grid-template-columns: repeat(
    auto-fill,
    minmax(
      ${props => {
        return props.minWidth;
      }},
      1fr
    )
  );
  justify-items: center;

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export const Card = styled(CardRebass).attrs({
  bg: "white",
  boxShadow: 0,
  borderRadius: 8
})`
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  border: 1px solid #d3d3d3;
  transition: all 0.1s;
  top: 0;
  height: 100%;
  cursor: ${props => {
    return props.onClick ? "pointer" : "default";
  }};

  &:hover {
    top: -5px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`;

export default Card;
