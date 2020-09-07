import styled from "styled-components";

export const TinTucHover = styled.div`
  &:hover {
    /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.363); */
    box-shadow: rgba(39, 79, 117, 0.205) 0px 40px 90px -30px;
  }
`;

export const ContainerCardDN = styled.div`
  position: relative;
  border-radius: 20px;
  border: 1px solid #ededed;
  &:hover {
    border-color: #c01718;
    box-shadow: 0px 0px 6px rgb(204, 12, 34);
    .container-link {
      display: block;
    }
  }
`;

export const ContainerCardDNN = styled.div`
  position: relative;
  border: 1px solid #ededed;
  &:hover {
    border-color: #c01718;
    box-shadow: 0px 0px 6px rgb(204, 12, 34);
    .container-link {
      display: block;
    }
  }
`;

export const TinTucWrapper = styled.div`
  /* background-color: #f6f9fa; */
  /* padding: 64px 0px; */
  text-align: center;
  border-radius: 20px;
  width: 100%;
  & > p {
    font-size: 28px;
    line-height: 40px;
    font-weight: bold;
    color: black;
    margin: 0px;
    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }
`;

export const TitleUnderWrapper = styled.div`
  background-color: #940D0F;
  height: 4px;
  width: 64px;
  margin: 0px auto;
  margin-top: 12px;
  margin-bottom: 48px;
`;

export const ButtonDetailWrapper = styled.button`
  width: 135px;
  min-width: 30px;
  @media screen and (max-width: 300px) {
    margin-left: -45px;
  }
  height: 40px;
  border-radius: 4px;
  color: #ffffff;
  background-color: #940D0F;
  border-color: #940D0F;
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
