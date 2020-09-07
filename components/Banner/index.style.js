import backgroundImg from "./BannerImg.png";
import styled from "styled-components";

export const BaCongKhaiWrapper = styled.div`
  margin: 0 0;
`;


export const BackgroundImg = styled.div`
  height: 425px;
  background-image: url(${backgroundImg});
  width: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  @media (max-width: calc(1.78 * calc(100vh - 112px))) {
    background-size: auto 100%;
  }
`;
export const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: calc(1em + 0.9vw);
  letter-spacing: 0.06em;
  text-align: left;
`;
export const Description = styled.div`
  color: white;
  font-size: 16px;
  @media screen and (max-width: 300px) {
    font-size: 14px;
  }
  text-align: justify;
  width: 100%;
`;