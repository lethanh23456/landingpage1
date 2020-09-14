import styled from "styled-components";

export const HeadingWrapper = styled.div`
  margin: 0px 0 50px 0;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
    color: #202124;
  @media (max-width: 994px) {
    margin-top: 50px;
  }
  @media (max-width: 700px) {
    margin-bottom: -60px;
    margin-top: 60px;
    font-size: 18px;
  }
  @media (max-width: 500px) {
    margin-bottom: -100px;
    margin-top: 50px;
    font-size: 16px;
  }
  @media (max-width: 300px) {
    margin-bottom: -100px;
    margin-top: 80px;
    font-size: 18px;
  }
`;
