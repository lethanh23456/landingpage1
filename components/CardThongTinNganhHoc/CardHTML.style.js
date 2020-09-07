/* eslint-disable no-confusing-arrow */
import styled, { css } from 'styled-components';

export const WrapperCard = styled.div`
  ${props =>
    props.type === 'grey'
      ? css`
          background: #e5e5e5 ;
        `
      : css`
          background: 'white';
        `}

  ${props =>
    props.order === 'first'
      ? css`
          padding: 0px 0px 40px 0px;
        `
      : css`
          padding: 40px 0px 40px 0px;
        `}
`;
export const TitleHTML = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 40px;
  /* identical to box height, or 133% */
  margin-bottom: 20px;
  letter-spacing: 0.04em;

  color: #000000;
`;

export const ContentHTML = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 26px;
  /* or 153% */
  color: #000000;
`;

export const VideoCard = styled.div`
  text-align: center;
`;

export const CardHocPhi = styled.div`
  min-height: 100px;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height, or 130% */

  display: flex;
  align-items: center;
  letter-spacing: 0.02em;

  /* Color/ Primary */
  /* padding: 24px; */
  color: #c01718;
  margin-bottom: 24px;
  /* White */

  background: ${props => (props.color === 'white' ? '#ffffff' : 'inherit')};
`;

export const STable = styled.table`
  /* border: 1px solid black; */
  /* border-collapse: collapse; */
  width: 100%;
`;

export const STh = styled.th`
  /* border: 1px solid black; */
  /* border-collapse: collapse; */
  padding: 24px;
  text-align: left;
`;

export const STd = styled.td`
  /* border: 1px solid black; */
  /* border-collapse: collapse; */
  padding: 24px;
`;

export const GoTo = styled.a`
  display: block;
  position: relative;
  top: -250px;
  visibility: hidden;
`;
