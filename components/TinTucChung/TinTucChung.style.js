/* eslint-disable import/prefer-default-export */
import { Col } from "antd";
import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export

export const CardTinTuc = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 10px 12px;
  height: ${(props) => (props.first ? "100%" : "auto")};
  box-shadow: 0 2px 6px rgba(163, 177, 191, 0.35);
  &:hover {
    box-shadow: 0 6px 12px rgba(163, 177, 191, 0.55);
    cursor: pointer;
  }
`;

export const ContentLargeCard = styled.div`
  width: 100%;
  height: 150px;
`;

export const CenterCol = styled(Col)`
  display: flex;
  justify-items: center;
  align-content: center;
  height: "100%";
`;
