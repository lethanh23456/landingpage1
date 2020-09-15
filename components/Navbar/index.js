import { Drawer, Icon, Menu, Row, Spin } from "antd";
import axios from "axios";
import { ip } from "data/ip";
import Link from "next/link";
import _ from 'lodash';
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import {
  ContainerLogo,
  LogoWrapper
} from "./components/MenuHeaderFirst/index.style";
import MenuHeaderSecond from "./components/MenuHeaderSecond";

const { Item, SubMenu } = Menu;
export const AWrapper = styled.a`
  color: #000000 !important;
  height: 80px !important;
  padding: 10px 20px !important;
  &:hover {
    color: #940d0f !important;
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
  &:hover a::before {
    /* border-bottom: 1.5px solid #FF3D3B; */
    content: "";
    color: #ff3d3b !important;
  }
`;

const Navbar = ({ }) => {
  const isDesktop = useMediaQuery({
    query: "(max-device-width: 768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 768px)",
  });

  const [daotao, setDaotao] = useState([]);
  const [vbbm, setVBBM] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    (async function wrapFunc() {
      setLoading(false);
      const response = await axios.get(`${ip}/he-dao-tao`, {
        params: {
          page: 1,
          limit: 1000,
        },
      });
      const ctrDaoTao = _.get(response, "data.data", []);
      setDaotao(ctrDaoTao);
      const responseVB = await axios.get(`${ip}/sotay/vanban/web`, {
        params: {
          page: 1,
          limit: 1000,
        },
      });
      const ctrVBBM = _.get(responseVB, 'data.data', []);
      setVBBM(ctrVBBM);
    })();
  }, []);

  const daotaoDesk = () => {
    let res = [];
    daotao.map((item) => {
      res.push(
        <SubMenu
          title={
            <span style={{ fontSize: isDesktop ? 14 : 18 }}>
              {item?.tenHeDaoTao ?? ""}
            </span>
          }
        >
          {item.nganhDaoTao.map((e, ind) => (
            <ItemAntd>
              <Link href={`/nganhhoc/${e?.maNganh ?? ""}`}>
                <a style={{ fontSize: isDesktop ? 14 : 18 }}>
                  {e?.tenNganh ?? ""}
                </a>
              </Link>
            </ItemAntd>
          ))}
        </SubMenu>
      );
    });
    return res;
  };

  const vbbmDesk = () => {
    let res = [];
    vbbm.map((item) => {
      res.push(
        <ItemAntd>
          <Link href={`/vanbangbieumau/${item?._id ?? ""}`}>
            <a style={{ fontSize: isDesktop ? 14 : 18 }}>
              {item?.tenThuMuc ?? ""}
            </a>
          </Link>
        </ItemAntd >,
      );
    });
    return res;
  };

  let MENU_ITEMS = [
    {
      label: "TRANG CHỦ",
      path: "/#",
    },
    {
      hover: true,
      label: "TIN TỨC",
      path: "/tintucchung",
    },
    {
      hover: true,
      label: "CHƯƠNG TRÌNH ĐÀO TẠO",
      path: "/#",
      submenu: daotaoDesk(),
    },
    {
      label: "VĂN BẢN BIỂU MẪU",
      path: "/#",
      submenu: vbbmDesk(),
    },
    {
      label: "TRA CỨU VĂN BẰNG",
      path: "/vanbangchungchi",
    },
  ];

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  const openDrawer = () => {
    setShowDrawer(true);
  };

  return (
    <>
      <Row style={{ backgroundColor: 'white' }}>
        <div id="nav-bar">
          {/* <NavbarWrapper {...navbarStyle}> */}
          <div style={{ padding: "0px 10px" }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Link href="/" style={{ cursor: 'pointer' }}>
                <ContainerLogo>
                  <LogoWrapper />
                </ContainerLogo>
              </Link>
              {isDesktop && (
                <Icon
                  type="menu-fold"
                  style={{
                    fontSize: 35,
                    color: "#FF3D3B",
                    marginTop: "34px",
                  }}
                  onClick={openDrawer}
                />
              )}
            </div>
          </div>
          {!isDesktop && !loading && (
            <Spin spinning={loading}>
              <MenuHeaderSecond
                menuItems={MENU_ITEMS}
                offset={-60}
                isDesktop={isDesktop}
                onClose={closeDrawer}
              />
            </Spin>
          )}
          <Drawer
            visible={showDrawer}
            width={!isMobile ? "40%" : "90%"}
            destroyOnClose
            closable
            onClose={closeDrawer}
            bodyStyle={{ padding: "10px 0px" }}
          >
            <MenuHeaderSecond
              className="main_menu"
              menuItems={MENU_ITEMS}
              offset={-60}
              isDesktop={isDesktop}
              onClose={closeDrawer}
            />
          </Drawer>
          {/* </NavbarWrapper> */}
        </div>
      </Row>
    </>
  );
};

export default Navbar;
