import styled from 'styled-components';
import { Menu as MenuAntd } from 'antd';

export const Style = styled.div`
  background-color: #fff;
`;

export const MenuDiv = styled.div`
  & ul{
    border-bottom: none;
  }
`;

export const MenuItem = styled(MenuAntd.Item)`
  font-size: 16px;
  color: black;
`;
