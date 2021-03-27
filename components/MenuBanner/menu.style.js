import styled from 'styled-components';
import Ic1 from 'assets/image/icon1.png';
import Ic2 from 'assets/image/icon2.png';
import Ic3 from 'assets/image/icon3.png';
import Ic4 from 'assets/image/icon4.png';
import Ic5 from 'assets/image/icon5.png';
import Divider from 'assets/image/Rectangle225.png';

export const TinTucHover = styled.div`
  &:hover {
    /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.363); */
    box-shadow: rgba(39, 79, 117, 0.205) 0px 40px 90px -30px;
  }
`;

export const WrapperContentBanner = styled.div``;

export const WrapperIcon = styled.div`
  display: block;
  float: left;
  height: 100%;
`;

export const WrapperTitle = styled.div`
  padding-left: 52px;
  height: 100%;
`;

export const WrapperMenuBanner = styled.div`
  @media screen and (max-width: 1023px) {
    padding: 12px 48px;
  }
`;
export const CenteredDiv = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`;
export const Title = styled.a`
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  color: #202124;
  margin: 0px;
  text-align: center;
`;

export const Icon1 = styled.div`
  background-image: url(${Ic1});
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
`;
export const Icon2 = styled.div`
  background-image: url(${Ic2});
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
`;
export const Icon3 = styled.div`
  background-image: url(${Ic3});
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
`;
export const Icon4 = styled.div`
  background-image: url(${Ic4});
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
`;
export const Icon5 = styled.div`
  background-image: url(${Ic5});
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
`;
export const TitleUnderWrapper = styled.div`
  background-image: url(${Divider});
  height: 56px;
  width: 1px;
  margin: 0 32px 0 16px;
`;
