/* eslint-disable semi */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import { Button, Drawer, Icon, Menu } from 'antd';
// import { MENU_ITEMS_MOBILE } from 'common/src/data/Hosting/data';
import LogoImage from 'assets/image/hosting/logo.png';
import axios from 'axios';
import Box from 'components/Box';
import ScrollSpyMenu from 'components/ScrollSpyMenu';
import { ip } from 'data/ip';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import Container from './ContainerMenu/index';
import NavbarWrapper from './Navbar';



const { Item, SubMenu } = Menu;
export const AWrapper = styled.a`
  color: #000000 !important;
  height: 80px !important;
  padding: 10px 20px !important;
  &:hover {
    color: #eb4d4b !important;
    background-color: yellow !important;
  }
`;

export const ItemAntd = styled(Item)`
  & li {
    padding-left: 40px !important;
  }
  & a {
    color: rgb(52, 61, 72);
  }
  &:hover a::before{
    /* border-bottom: 1.5px solid #FF3D3B; */
    content: '';
    color: #FF3D3B !important;
  }
`;

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const isDesktop = useMediaQuery({
    query: '(max-device-width: 1380px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-device-width: 768px)',
  });

  const [daotao, setDaotao] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);
  useEffect(() => {
    (async function wrapFunc() {
      setLoading(false)
      const response = await axios.get(`${ip}/he-dao-tao`, {
        params: {
          page: 1,
          limit: 1000,
          // cond: {
          //   maLoaiBaiViet: 'THONG-DIEP'
          // }
        },
      });
      const ctrDaoTao = _.get(response, 'data.data', []);
      setDaotao(ctrDaoTao);
    })();
  }, []);

  const daotaoDesk = () => {
    let res = [];
    daotao.map(item => {
      res.push(
        <SubMenu
          title={
            <span style={{ fontSize: isDesktop ? 14 : 18 }}>
              {item?.tenHeDaoTao ?? ''}
            </span>
          }
        >
          {item.nganhDaoTao.map((e, ind) => (
            <ItemAntd>
              <Link href={`/nganhhoc/${e?.maNganh ?? ''}`}>
                <a style={{ fontSize: isDesktop ? 14 : 18 }}>
                  {e?.tenNganh ?? ''}
                </a>
              </Link>
            </ItemAntd>
          ))}
        </SubMenu>,
      );
    });
    return res;
  };

  let MENU_ITEMS = [
    {
      label: 'TRANG CHỦ',
      path: '#',
      offset: '70',
    },
    {
      hover: true,
      label: 'GIỚI THIỆU CHUNG',
      path: '#',
      offset: '70',
      submenu: [
        <ItemAntd>
          <Link href="/doinguchitiet">
            <a style={{ fontSize: isDesktop ? 14 : 18 }}>
              Đội ngũ cán bộ
            </a>
          </Link>
        </ItemAntd>,
        <ItemAntd>
          <Link href="/chucnangnhiemvu">
            <a style={{ fontSize: isDesktop ? 14 : 18 }}>
              Chức năng - Nhiệm vụ
            </a>
          </Link>
        </ItemAntd>,
      ],
    },
    {
      label: 'TIN TỨC',
      path: 'tintucchung',
      offset: '70',
    },
    {
      hover: true,
      label: 'CHƯƠNG TRÌNH ĐÀO TẠO',
      path: '#',
      offset: '70',
      // </Menu >
      submenu: daotaoDesk(),
    },
    {
      label: 'TRA CỨU VĂN BẰNG',
      path: 'vanbangchungchi',
      offset: '70',
    },
    {
      label: 'CƠ HỘI VIỆC LÀM',
      path: 'tintucchung#dao_tao_tin_tuc_co_hoi_viec_lam',
      offset: '70',
    },
  ];

  console.log(isMobile, 'test nav');

  const handleClick = () => { };

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  const openDrawer = () => {
    setShowDrawer(true);
  };

  return (
    <div id="nav-bar">
      <NavbarWrapper {...navbarStyle}>
        <Container>
          <Box {...row}>
            {/* <Logo href="/" logoSrc={LogoImage} title="PTIT" logoStyle={logoStyle} /> */}
            <Link href={`/`}>
              <a ><img src={LogoImage} alt="logo" /></a>
            </Link>
            <Box {...menuWrapper}>
              {!isDesktop && !loading && <ScrollSpyMenu menuItems={MENU_ITEMS} offset={-60} isDesktop={isDesktop} onClose={closeDrawer} />}
              {/* {!isDesktop &&
                <Button
                  // {...button}
                  onClick={CNDPT}
                  style={{
                    backgroundColor: '#E50303',
                    color: 'white',

                    fontSize: 'calc(0.5em + 0.3vw)',
                    fontWeight: 'bold',
                    height: 40,
                    marginRight: 10,
                    marginLeft: 10,
                  }}
                ><span style={{ fontFamily: "'Roboto', sans- serif" }}>THI TIẾNG ANH</span></Button>
              } */}
              {!isDesktop && !loading && (
                <Button
                  // {...button}
                  onClick={() => window.open('https://tuyensinh2.ptit.edu.vn/')}
                  style={{
                    backgroundColor: '#E50303',
                    color: 'white',
                    fontFamily: "'Roboto', sans- serif",
                    fontSize: 'calc(0.5em + 0.3vw)',
                    fontWeight: 'bold',
                    height: 40,
                    marginLeft: 10,
                  }}
                >
                  <span style={{ fontFamily: "'Roboto', sans- serif" }}>TUYỂN SINH</span>
                </Button>
              )}
              {isDesktop && (
                <Icon
                  type="menu-fold"
                  style={{ fontSize: 35, color: '#FF3D3B' }}
                  onClick={openDrawer}
                />
              )}
              <Drawer
                visible={showDrawer}
                width={!isMobile ? '40%' : '90%'}
                destroyOnClose
                closable
                onClose={closeDrawer}
                bodyStyle={{ padding: '10px 0px' }}
              >
                {/* <p>aaaaaaaaaaaa</p> */}
                <ScrollSpyMenu className="main_menu" menuItems={MENU_ITEMS} offset={-60} isDesktop={isDesktop} onClose={closeDrawer} />
              </Drawer>
              {/* <Drawer
                width="420px"
                placement="right"
                drawerHandler={<HamburgMenu barColor="#eb4d4b" />}
                open={state.isOpen}
                toggleHandler={toggleHandler}
              >
                <Menu
                  onClick={handleClick}
                  style={{ width: 296 }}
                  // defaultSelectedKeys={['1']}
                  mode="inline"
                >
                  {MENU_ITEMS_MOBILE.map((menu, index) => {
                    if (menu.label === 'THI TIẾNG ANH' || menu.label === 'TUYỂN SINH') {
                      return (
                        <Menu.Item
                          key={index}
                          onClick={
                            menu.label === 'TUYỂN SINH'
                              ? () => window.open('https://tuyensinh2.ptit.edu.vn/', '_blank')
                              : thiTA()
                          }
                        >
                          {menu.label}
                        </Menu.Item>
                      );
                    }
                    if (menu.children.length === 0) {
                      return (
                        <Menu.Item key={index}>
                          <Link href={menu.path}>
                            <a>{menu.label}</a>
                          </Link>
                        </Menu.Item>
                      );
                    }
                    return (
                      <SubMenu key={index} title={menu.label}>
                        {menu.children.map((e, ind) => {
                          if (e.children.length === 0) {
                            return (
                              <Menu.Item key={`sub${ind}-${index}`}>
                                <Link href={e.path}>
                                  <a>{e.label}</a>
                                </Link>
                              </Menu.Item>
                            );
                          }
                          return (
                            <SubMenu key={`sub${ind}-${index}`} title={e.label}>
                              {e.children.map((ex, indd) => (
                                <Menu.Item key={`subs${indd}-${ind}`}>
                                  <Link href={ex.path}>
                                    <a>{ex.label}</a>
                                  </Link>
                                </Menu.Item>
                              ))}
                            </SubMenu>
                          );
                        })}
                      </SubMenu>
                    );
                  })}
                </Menu>
              </Drawer> */}
            </Box>
          </Box>
        </Container>
      </NavbarWrapper>
    </div>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    className: 'hosting_navbar',
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['120px', '130px'],
  },
  button: {
    type: 'button',
    fontSize: 'calc(0.5em + 0.3vw)',
    fontWeight: '500',
    color: 'white',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'primaryWithBg',
    minHeight: 'auto',
    // height: `${2}`,
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
    // width: '40%',
  },
};

export default Navbar;
