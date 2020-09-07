import styled, { css } from "styled-components";

const Wrapper = styled.div`
  padding-bottom: 10px;
  background-color: white;
  & ul {
    border-bottom: none !important;
    ${props => {
    if (!props.isDesktop) {
      return css`
          /* text-align: center; */
          display: flex;
          justify-content: space-around;
        `;
    }
    return css`
        text-align: justify;
      `;
  }}
  }
`;
export default Wrapper;
