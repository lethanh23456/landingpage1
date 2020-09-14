import styled from "styled-components";
import BaCongkhaiLogo from "../../assets/image/bacongkhai-logo.png";
import VectorLogo from "../../assets/image/Vector.png";
import Group94 from "../../assets/image/Group 94.png";
import Group96 from "../../assets/image/Group 96.png";

export const BaCongKhaiWrapper = styled.div`
  padding: 64px 0 32px 0;
  background-color: #f6f9fa;
  display: flex;
  margin: 64px 0;
`;

export const BoxCard = styled.div`
  width: 100%;
  // margin-left: 25%;
`;

// export const ContentNButtonWrapper = styled.div`
//   @media (max-width: 766px) {
//     margin-right: 49px;
//   }
// `;

export const BckLogoWrapper = styled.div`
  background-image: url(${BaCongkhaiLogo});
  /* min-width: 30.67px; */
  width: 60.67px;
  height: 70px;
  /* margin-right: 40px; */
  @media (max-width: 715px) {
    margin-right: 30px;
  }
  @media screen and (max-width: 330px) {
    margin-right: 40px;
  }
`;
export const Title = styled.div`
  font-size: 22px;
  margin-bottom: 12px;
  @media screen and (max-width: 400px) {
    font-size: 18px;
    margin-left: 10px;
  }
`;
export const ButtonWrapper = styled.button`
  &:hover {
    cursor: pointer;
  }
`;

export const XetTuyenWrapper = styled.div`
  padding: 48px 0;
  background-color: #ededed;
  display: flex;
  margintop: 60px;
`;

export const XTLogoWrapper = styled.div`
  background-image: url(${VectorLogo});
  min-width: 58px;
  width: 58px;
  height: 76.67px;
  margin-right: 30px;
  @media (max-width: 715px) {
    margin-right: 17px;
  }
`;

export const ContentButtonWrapper = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;
  @media (max-width: 767px) {
    display: block;
    margin-right: 49px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin-top: 12px;
  margin-right: 43px;
  text-align: justify;
  font-weight: normal;
  font-size: 17px;
  line-height: 26px;
  color: #202124;
  align-items: center;
  @media (max-width: 715px) {
    margin-right: 0;
    width: calc(100% - 78px);
  }
  @media (max-width: 766px) {
    width: 130%;
    margin-bottom: 25px;
  }
  @media screen and (max-width: 450px) {
    font-size: 14px;
    margin-left: -75px;
    width: 190%;
  }
  @media screen and (max-width: 400px) {
    margin-left: -60px;
  }
  @media screen and (max-width: 350px) {
    width: 210%;
  }
  
`;

export const ButtonDetailWrapper = styled.button`
  width: 135px;
  min-width: 135px;
  @media screen and (max-width: 300px) {
    margin-left: -45px;
  }
  height: 40px;
  border-radius: 4px;
  color: #ffffff;
  background-color: #eb4d4b;
  border-color: #eb4d4b;
  display: flex;
  align-items: center;
  margin-left: 115px;
  outline: none;
  border: hidden;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 920px) {
    margin-left: 70px;
  }
  @media (max-width: 820px) {
    margin-left: 35px;
  }
  @media (max-width: 767px) {
    /* width: calc(100%-78);
    margin-left: 0px; */
    margin-top: 12px;
  }
  @media screen and (max-width: 400px) {
    margin-left: 10px;
  }
  @media screen and (max-width: 300px) {
    margin-left: -17px;
  }
`;

export const Group94Wrapper = styled.div`
  position: absolute;
  background-image: url(${Group94});
  width: 237.4px;
  height: 199.16px;
  left: -46px;
  top: -94px;
  @media (max-width: 920px) {
    display: none;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Group96Wrapper = styled.div`
  position: absolute;
  background-image: url(${Group96});
  width: 277.67px;
  height: 191.8px;
  left: -22px;
  top: -94px;
  @media (max-width: 920px) {
    display: none;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
