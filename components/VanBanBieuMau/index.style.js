import styled from "styled-components";
import VBBMimg from 'assets/image/ImageVBBM.png';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    background-color: #F7F9FA;
    padding: 20px 0 30px 0;
    @media screen and (max-width: 425px){
        display: inline;
    }
`;

export const ContainerWrapperFirst = styled.div`
    background-color: #fff;
    margin: 0 30px 0 0;
    width: calc(100% - 270px);
    @media screen and (max-width: 768px){
        width: calc(100%-250px);
    }
    @media screen and (max-width: 425px){
        width: 100%;
    }
`;

export const ContainerWrapperSecond = styled.div`
    width: 270px;
    background-color: #fff;
    @media screen and (max-width: 768px){
        width: 250px;
    }
    @media screen and (max-width: 425px){
        width: 100%;
    }

`;

export const WrapperFirst = styled.div`
    display: flex;
    margin: 30px 30px;
    /* width: calc(100% - 162px); */
`;

export const WrapperFirstTitle = styled.div`
    text-align: justify;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #000000;
    font-weight: 500;
    font-size: 1.5em;
    line-height: 28px;
    @media screen and (max-width: 768px){
        font-size: 22px;
    }
    @media screen and (max-width: 425px){
        text-align: center;
    }
`;

export const WrapperFirstTitleNext = styled.div`
    align-items: center;
    text-align: center;
    font-size: 15px;
    line-height: 22px;
    color: #000000;
`;

export const WrapperSecond = styled.div`
    width: 100%;
`;

export const Topp = styled.div`
    background-color: #CC0000;
    height: 60px;
`;

export const TopTitle = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    align-items: center;
    text-align: center;
    padding-top: 17px;
    letter-spacing: 0.02em;
    color: #fff;
`;

export const CardTinTuc = styled.div`
    background-color: #fff;
    height: auto;
    width: calc(100%-60px);
    margin: 20px;
    @media screen and (max-width: 425px){
        padding-bottom: 30px;
    }
`;

export const CardTinTucIamge = styled.div`
    width: 100%;
    height: 156px;
    background-image: url(${VBBMimg});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const CardTinTucTitle = styled.div`
    align-items: center;
    letter-spacing: 0.02em;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    padding: 10px 0 6px 0;
    text-align: justify;
`;

export const TableWrapper = styled.div`
    padding: 0 20px 30px 30px;
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

export const StandForWrapper = styled.div`
    width: 100%;
    text-align: justify;
    font-style: italic;
    display: flex;
`;

export const StandForTitle = styled.div`
    color: #C00000;
    font-size: 13px;
    line-height: 20px;
`;

export const StandForDate = styled.div`
    font-size: 13px;
    line-height: 20px;
    color: #202124;
`;

