import styled, { css } from 'styled-components';

const ContainerWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      max-width: none !important;
    `};
  ${props =>
    props.fullHeight &&
    css`
      height: 100%;
      max-height: none !important;
    `};
  ${props =>
    (props.noGutter &&
      css`
        padding-left: 0;
        padding-right: 0;
      `) ||
    css`
      width: 100%;
      padding-left: 30px;
      padding-right: 30px;
    `};
  @media (min-width: 768px) {
    max-width: 750px;
    width: 100%;
  }
  @media (min-width: 992px) {
    max-width: 970px;
    width: 100%;
  }
  @media (min-width: 1220px) {
    max-width: ${props => props.width || '1650px'};
    width: 100%;
  }
  @media (max-width: 768px) {
    ${props =>
    props.mobileGutter &&
    css`
        width: 100%;
        padding-left: 30px;
        padding-right: 30px;
      `};
  }
`;

export default ContainerWrapper;
