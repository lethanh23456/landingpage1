/* eslint-disable arrow-parens */
import styled, { css } from 'styled-components';
import Container from '../UI/Container';

// eslint-disable-next-line import/prefer-default-export
export const RowHocKy = styled.div`
  height: 80px;
  margin: 8px 0;
`;

export const ContainerWrapper = styled(Container)`
  overflow: auto;
  white-space: nowrap;
`;

export const WrapperCard = styled.div`
  vertical-align: middle;
  display: inline-block;
`;
export const CardHocKy = styled.div`
  white-space: normal;

  height: 56px;
  width: 95px;
  margin: 0px 16px;
  background-color: #c01718;
  padding: 8px 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  /* or 133% */
  letter-spacing: 0.02em;

  /* White */

  color: #ffffff;
`;

export const CardMon = styled.div`
  white-space: normal;

  display: inline-block;
  border-radius: 4px;
  margin: 0px 16px;

  height: 70px;
  width: 136px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  font-size: 14px;
  line-height: 18px; /* or 133% */
  letter-spacing: 0.02em;
  ${props => {
    let ret;
    switch (props.type) {
      case 'Bắt buộc chung':
        ret = css`
          background: #b1e0fc;
          color: black;
        `;
        break;
      case 'Bắt buộc chung nhóm ngành':
        ret = css`
          background: #dad2f9;
          color: black;
        `;
        break;
      case 'Bổ trợ ngành':
        ret = css`
          background: #ffeee6;
          color: black;
        `;
        break;
      case 'Cơ sở ngành':
        ret = css`
          background: #facccc;
          color: black;
        `;
        break;
      case 'Chuyên ngành':
        ret = css`
          background: #f2c946;
          color: black;
        `;
        break;
      case 'Thực tập':
        ret = css`
          background: #1f61d2;
          color: white;
          width: 100%;
        `;
        break;
      default:
        ret = css`
          background: #c01718;
          color: white;
        `;
        break;
    }
    return ret;
  }}
`;

export const TitleCauTruc = styled.div`
  text-align: center;
`;
