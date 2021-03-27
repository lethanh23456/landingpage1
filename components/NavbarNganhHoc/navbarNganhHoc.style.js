import { Menu as MenuAntd } from 'antd';
import styled from 'styled-components';

export const Style = styled.div`
  background-color: red;
`;

export const MenuDiv = styled.div`
  & ul{
    border-bottom: none;
  }
`;

export const MenuItem = styled(MenuAntd.Item)`
  font-size: 16px;
  color: white;
`;
