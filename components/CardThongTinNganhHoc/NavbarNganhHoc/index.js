//
import { Menu } from 'antd';
import Box from 'components/Box';
import Container from 'components/UI/Container';
import Link from 'next/link';
import React from 'react';
import Sticky from 'react-stickynode';
import { MenuDiv, MenuItem, Style } from './navbarNganhHoc.style';

class Navbar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { maNganh } = this.props;
    const { SubMenu } = Menu;
    return (
      <Box>
        <Sticky top={114} bottomBoundary="#content" innerZ={999}>
          <Style>
            <Container>
              <MenuDiv>
                <Menu
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
                // style={{ fontSize: 'calc(0.6em + 0.4vw)', padding: '15px 0' }}
                >
                  {this.props?.data?.map(({ name, url }) => {
                    if (name === 'Cấu trúc chương trình') {
                      return (
                        <SubMenu title={'Cấu trúc chương trình'} style={{ backgroundColor: 'white' }}>
                          {this.props?.monTinChi.map(({ tenChuyenNganh, anchor }) => (
                            <Menu.Item key={tenChuyenNganh} style={{ fontSize: 14, padding: 8 }}>
                              <Link href={`/nganhhoc/[idMaNganh]#${anchor}`} as={`/nganhhoc/${maNganh}#${anchor}`}>
                                <a>
                                  {/* <Icon type="file-protect" /> */}
                                  {tenChuyenNganh}
                                </a>
                              </Link>
                            </Menu.Item>
                          ))}
                        </SubMenu>
                      )
                    }
                    else {
                      return (
                        <MenuItem key={name}>
                          <Link href={`/nganhhoc/[idMaNganh]${url}`} as={`/nganhhoc/${maNganh}${url}`}>
                            <a>
                              {/* <Icon type="file-protect" /> */}
                              {name}
                            </a>
                          </Link>
                        </MenuItem>
                      )
                    }
                  })}
                </Menu>
              </MenuDiv>
            </Container>
          </Style>
        </Sticky>
      </Box>
    );
  }
}

export default Navbar;
