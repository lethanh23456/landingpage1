import styled, { css } from "styled-components";

export const LayoutWrapper = styled.div`
  ${props => {
    if (props && props.marginTop) {
      return css`margin-top: ${props.marginTop}px;`;
    } else {
      return css`margin-top: 0px;`;
    }
  }}
  @media screen and (max-width: 768px) {
  ${props => {
    if (props && props.marginTop) {
      return css`margin-top: ${props.Table}px;`;
    } else {
      return css`margin-top: 0px;`;
    }
  }}
  }
  @media screen and (max-width: 480px) {
  ${props => {
    if (props && props.Mobile) {
      return css`margin-top: ${props.Mobile}px;`;
    } else {
      return css`margin-top: 0px;`;
    }
  }}
  }
  @media screen and (max-width: 360px) {
  ${props => {
    if (props && props.Mobile) {
      return css`margin-top: ${props.Mobile}px;`;
    } else {
      return css`margin-top: 0px;`;
    }
  }}
  }
`;
