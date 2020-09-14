import styled from 'styled-components';
import LogoPtit from './logo.png';

export const TinTucHover = styled.div`
  &:hover {
    /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.363); */
    box-shadow: rgba(39, 79, 117, 0.205) 0px 40px 90px -30px;
  }
`;

export const ContainerCardDN = styled.div`
	position: relative;
  padding: 4px;
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
  padding: 64px 0px;
  text-align: center;
  border-radius: 20px;
  width: 100%;
  & > p {
    font-size: 30px;
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
  background-color: #d50000;
  height: 4px;
  width: 64px;
  margin: 0px auto;
  margin-top: 12px;
  margin-bottom: 48px;
`;

export const ImageUnderWrapper = styled.div`
  background-image: url(${LogoPtit});
  height: 4px;
  width: 4px;
  margin: 0px auto;
  margin-top: 12px;
  margin-bottom: 48px;
`;
