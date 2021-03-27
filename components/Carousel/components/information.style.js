import styled from "styled-components";
import { Row } from "antd";

export const ContainerInformation = styled.div`
  position: absolute;
  top: 0%;
  right: 0;
  left: 0;
  padding-top: 100%;
  margin-top: -50%;
`;

export const Space = styled.div`
  position: relative;
  width: 100%;
  /* padding: 25%; */
  margin-bottom: 20px;
  @media screen and (max-width: 744px) {
    padding: 0;
    margin-bottom: 0px;
  }
`;

export const ContentInformation = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const InformationSV = styled.div`
  background-color: #19b85c;
  width: 100%;
  height: 100%;
  padding: 10%;
`;

export const InformationDT = styled.div`
  background-color: #f34243;
  width: 100%;
  height: 100%;
  padding: 10%;
`;

export const InformationCN = styled.div`
  background-color: #1f61d2;
  width: 100%;
  height: 100%;
  padding: 10%;
`;

export const InformationHP = styled.div`
  background-color: #b92081;
  width: 100%;
  height: 100%;
  padding: 10%;
`;

export const RowInformation = styled(Row)`
  position: absolute;
  top: -50%;
`;

export const ImageWrapper = styled.div`
  width: 64px;
  height: 64px;
  flex-basis: 50px;
  display: block;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
  @media screen and (max-width: 1219px) {
    width: 48px;
    height: 48px;
  }
  @media screen and (max-width: 991px) {
    width: 32px;
    height: 32px;
  }
`;

export const TitleInformation = styled.div`
  font-size: 22px;
  margin-top: 6px;
  margin-bottom: 8px;
  line-height: 32px;
  font-weight: bold;
  color: white;
  @media screen and (max-width: 1219px) {
    font-size: 19px;
    margin-bottom: 2px;
    margin-top: 0px;
    line-height: 30px;
  }
  @media screen and (max-width: 991px) {
    font-size: 14px;
    margin-bottom: 0px;
    line-height: 26px;
  }
`;

export const DescriptionInformation = styled.div`
  font-size: 15px;
  line-height: 22px;
  text-align: justify;
  color: white;
  @media screen and (max-width: 1219px) {
    font-size: 12px;
    line-height: 18px;
  }
  @media screen and (max-width: 991px) {
    font-size: 11px;
    line-height: 14px;
  }
`;
