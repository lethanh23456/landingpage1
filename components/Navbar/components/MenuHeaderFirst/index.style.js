import LogoFTU from "assets/image/logo.png";
import ImgLogo from "assets/image/imgHeader.png";
import styled from "styled-components";

export const ContainerLogo = styled.div`
  width: calc(100% - 466px);
  @media screen and (max-width: 1220px) {
    width: 100%;
  }
`;

export const LogoWrapper = styled.div`
  background-image: url(${ImgLogo});
  background-repeat: no-repeat;
  width: 100%;
  height: 104px;
  margin-top: 24px;
  /* @media screen and (max-width: 640px) {
    display: none;
  } */
  @media screen and (max-width: 590px) {
    background-image: url(${LogoFTU});
    background-repeat: no-repeat;
    width: 100px;
    height: 104px;
    margin-top: 6px;
    margin-bottom: 9px;
  }
`;
