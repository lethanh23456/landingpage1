import styled from 'styled-components';
import { Dropdown, Menu } from 'antd';

const { Item } = Menu;

const AWrapper = styled.a`
  color: #000000 !important;
  &:hover {
    color: #eb4d4b !important;
    background-color: #ffffff !important;
  }
`;

export const Wrapper = styled.div`
  & ul {
    border-bottom: none !important;
  }
  & .ant-menu-overflowed-submenu {
    border-color: #eb4d4b;
    font-size: 25px;
    font-weight: bold;
  }
`;

export const ItemAntd = styled(Item)`
  & li:hover {
    border-bottom: 1px solid #FF3D3B;
  }
`;

export const AntDropdown = styled(Dropdown)``;
export default AWrapper;
