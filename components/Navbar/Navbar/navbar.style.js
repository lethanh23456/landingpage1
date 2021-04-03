import styled from "styled-components";
import {
  display,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  boxShadow,
  color,
  space,
  borderRadius,
  width,
  height,
} from "styled-system";

const NavbarStyle = styled.nav`
  /* Navbar default style goes here */
  background-color: white;
  display: flex;
  align-items: center;
  /* width: 100%; */
  min-height: 56px;
  padding: 10px 16px;
  
  /* Style system supported prop */
  ${display}
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
  ${width}
  ${height}
  ${color}
  ${space}
  ${boxShadow}
  ${borderRadius}
`;

NavbarStyle.displayName = "NavbarStyle";

export const Image = styled.img`
  width: 70px;
  @media screen and (max-width: 1200px) {
    margin-top: 20px;
    width: 43px !important;
    height: 50px;
  }
`;

export default NavbarStyle;
