import styled from "styled-components";
import { Row } from "antd";
export const ContainerWrapper = styled.div`
  width: 100%;
  color: white;
`;
export const FooterTagA = styled.a`
  color: black;
  &:hover {
    color: #c01718;
  }
`;
export const Container1Wrapper = styled.div`
  padding: 5px 5% 0 5%;
  background-color: #0080c7;
`;

export const Container2Wrapper = styled.div`
  padding: 5px 5% 0 5%;
  background-color: #004c76;
`;

export const Row1Wrapper = styled.div`
  border-bottom: 2px solid white;
`;

export const Row2Wrapper = styled.div`
  line-height: 26px;
  padding-bottom: 10px;
`;

export const TextNorWrapper = styled.div`
  color: #fef146;
  font-size: 13px;
  font-weight: bold;
`;

export const TextDesWrapper = styled.div`
  color: white;
  font-size: 13px;
  font-weight: normal;
`;

export const TitleWrapper = styled.div`
  font-size: 15px;
  font-weight: bold;
  border-bottom: 2px solid #80c0e3;
  margin: 15px 0;
  padding-bottom: 10px;
`;

export const ItemLiWrapper = styled.div`
  font-size: 12px;
  font-weight: normal;
  list-style-type: none;
  margin-left: -2em;
  & > li {
    line-height: 20px;
    margin: 3px 0;
  }
  & > li::before {
    content: "•";
    color: #f26328;
    margin-left: -1em;
    width: 1em;
    margin-right: 0.5em;
  }
`;

export const NameWrapper = styled.div`
  height: 80px;
  /* font-family: 'Roboto' !important; */
  font-style: normal;
  margin-top: 20px;
  font-weight: bold;
  font-weight: 550 !important;
  font-size: 20px;
  line-height: 28px;
  background-color: white;
  margin-bottom: 72px;
  padding-left: 10px;
  width: 90%;
  /* identical to box height, or 140% */

  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  /* Color/ Primary */

  position: relative;

  color: #c01718;
`;

export const Text1Wrapper = styled.div`
  height: 24px;

  /* Footer */

  /* font-family: Roboto; */
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;
  letter-spacing: 0.02em;

  /* Color/ Primary */
  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
  color: #c01718;
`;

export const Text2Wrapper = styled.div`
  // height: 24px;

  /* font-family: Roboto; */
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;

  /* Dark/ 1 */
  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
  color: #202124;
`;

export const Text3Wrapper = styled.div`
  // height: 24px;

  /* Footer */

  /* font-family: Roboto; */
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;
  letter-spacing: 0.02em;

  /* Dark/ 2 */
  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
  color: #3d3d3f;
`;

export const ListWrapper = styled.div`
  height: 24px;

  /* Footer */

  /* font-family: Roboto; */
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;
  letter-spacing: 0.02em;

  /* Dark/ 2 */

  color: #3d3d3f;
`;

export const RowWrapper = styled(Row)`
  margin-bottom: 40px;
  margin-top: 40px;
  // max-width: 1200px;
  // margin: auto;
  @media screen and (min-width: "480px") {
    width: 92%;
    margin-left: 4%;
  }
  @media screen and (min-width: "576px") {
    width: 88%;
    margin-left: 16%;
  }
  @media screen and (min-width: "768px") {
    width: 84%;
    margin-left: 8%;
  }
  @media screen and (min-width: "992px") {
    width: 80%;
    margin-left: 10%;
  }
`;
