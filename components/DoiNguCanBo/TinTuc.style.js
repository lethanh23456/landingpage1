import styled from "styled-components";
const index = 1;

export const TinTucHover = styled.div`
  &:hover {
    /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.363); */
    box-shadow: rgba(39, 79, 117, 0.205) 0px 40px 90px -30px;
  }
`;

export const ContainerCardDN = styled.div`
  margin: 0px auto;
  position: relative;
  /* padding: 4px; */
  /* padding:24px; */
  width: 280px;
  border-radius: 20px;
  &:hover {
    border-color: #c01718;
    box-shadow: 0px 0px 6px rgb(204, 12, 34);
    .container-link {
      display: block;
    }
  }
`;
export const TinTucWrapper = styled.div`
  background-color: #f6f9fa;
  /* padding: 64px 0px 0 0; */
`;

export const CardWrapper = styled.div`
/* padding: 10px 41px; */
  @media screen and (max-width: 1100px) {
    padding: 0px 0px;
`;

export const MiniCardWrapper = styled.div`
  height: 300px;
  width: 280px;
  @media screen and (max-width: 800px) {
    margin-left: 20%,
    width: 385px,
  }
  @media screen and (max-width: 400px) {
    /* margin-left: 20%, */
    width: 220px;
  }
`;

export const TitleContainer = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
    font-size: 28px;
    line-height: 40px;
    font-weight: bold;
    color: black;
    margin: 0px;
    @media screen and (max-width: 768px) {
      font-size: 22px;
      &>p{
        font-size: 20px !important;
      }
    }
  }
  & > .button-more {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const Title = styled.div`
  color: #202124;
  font-size: 20px;
  font-weight: bold;
  line-height: 26px;
  align-items: center;
  text-align: center;
`;

export const Mota = styled.span`
  font-size: 17px;
  line-height: 26px;
  color: #c01718;
  margin: 0px;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;
export const TitleUnderWrapper = styled.div`
  background-color: #d50000;
  height: 4px;
  width: 64px;
  margin: 0px auto;
  margin-top: 2px;
  margin-bottom: 48px;
`;
