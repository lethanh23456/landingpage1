import styled from "styled-components";

export const HeadingWrapper = styled.div`
  margin: 0px 0 50px 0;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #202124;
  @media (max-width: 994px) {
    // margin-top: 50px;
  }
  @media (max-width: 700px) {
    // margin-top: -20px;
    font-size: 18px;
  }
  @media (max-width: 500px) {
    margin-bottom: -75px;
    margin-top: -40px;
    font-size: 16px;
  }
  @media (max-width: 300px) {
    // margin-bottom: -100px;
    // margin-top: 80px;
    font-size: 18px;
  }
`;
