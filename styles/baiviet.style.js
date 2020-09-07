import styled from 'styled-components';

export const ContentWrapper = styled.div`
  & > h2 {
    font-size: 30px;
    margin-top: 30px;
    color: #d10000;
    font-weight: bold;
    @media screen and (max-width: 769px) {
      font-size: 25px;
    }
  }
  & > h4 {
    font-size: 20px;
    color: #d10000;
    font-weight: bold;
    text-align: center;
    @media screen and (max-width: 769px) {
      font-size: 15px;
    }
  }
  & > p {
    text-align: justify;
  }
  & > p:nth-child(3) {
    font-weight: bold;
  }
`;

export const TitleLinkWrapper = styled.a`
  font-weight: bold;
  text-align: justify;
  &:hover {
    color: black !important;
  }
`;
