/* eslint-disable arrow-parens */
import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const WrapperTienQuyet = styled.div`
  border-top: 1px solid #adadad;
  border-bottom: 1px solid #adadad;
  /* min-height: 52px; */
  padding: 24px;
`;

export const TitleTienQuyet = styled.span`
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  color: #000000;
  font-weight: 500;
`;

export const TextHocPhan = styled.div`
  vertical-align: middle;
  text-align: center;
  display: inline-block;

  font-size: 17px;
  line-height: 26px;
  /* or 153% */

  /* Color/ Primary */

  color: #c01718;
`;

export const CardGiaiThich = styled.div`
  /* White */

  background: #ffffff;
  /* Color/ Primary */
  height: 100%;
  border: 1px solid #c01718;
  box-sizing: border-box;
`;

export const TitleGiaiThich = styled.div`
  height: 48px;
  background: #c01718;
  display: flex;
  align-items: center;

  /* White */

  color: #ffffff;
  padding: 12px 30px;
`;

export const CardContentGiaiThich = styled.div`
  padding: 30px;
`;

export const ShapeNhanBiet = styled.div`
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

  width: 96px;
  height: 56px;
  /* Style */
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 6px;
`;

export const TextShapeNhanBiet = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  /* Dark/ 1 */
  color: #202124;

  min-height: 56px;
  width: inherit;
  text-align: center;
`;

export const InsideTitle = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  min-height: inherit;
`;

export const TextTuChon = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 137% */

  color: #202124;
`;
