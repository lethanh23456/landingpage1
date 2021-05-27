/* eslint-disable semi */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import { useRouter } from "next/router";
import { Button, Col, Drawer, Icon, Menu, Row } from "antd";
// import { MENU_ITEMS_MOBILE } from 'common/src/data/Hosting/data';
import LogoImage from "assets/image/hosting/ptit-logo.png";
import axios from "axios";
import Box from "components/Box";
import ScrollSpyMenu from "components/ScrollSpyMenu";
import { ip } from "data/ip";
import Link from "next/link";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Container from "./ContainerMenu/index";
import NavbarWrapper from "./Navbar";
import { Image } from "./Navbar/navbar.style";

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
  &:hover a::before {
    color: #ff3d3b !important; /* border-bottom: 1.5px solid #FF3D3B; */
    content: "";
  }
`;
export function Format(str) {
  // xóa hết dấu + đưa về chữ thường
  if (!str) return "";
  return str
    .toString()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/đ/g, "d")
    .replace(/\s/g, "");
}

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const router = useRouter();
  const isDesktop = useMediaQuery({
    query: "(max-device-width: 767px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 500px)",
  });

  const [daotao, setDaotao] = useState([]);
  const [loaitintuc, setLoaiTinTuc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);
  useEffect(() => {
    (async function wrapFunc() {
      setLoading(false);
      const response = await axios.get(`${ip}/he-dao-tao`, {
        params: {
          page: 1,
          limit: 1000,
          // cond: {
          //   maLoaiBaiViet: 'THONG-DIEP'
          // }
        },
      });
      const ctrDaoTao = _.get(response, "data.data", []);
      setDaotao(ctrDaoTao);
    })();
  }, []);

  useEffect(() => {
    (async function wrapFunc() {
      setLoading(false);
      const response = await axios.get(`${ip}/loai-bai-viet`, {
        params: {
          page: 1,
          limit: 1000,
          cond: {
            $and: [
              { maLoai: { $regex: "DAO_TAO_TIN_TUC_" } },
              { maLoai: { $ne: "DAO_TAO_TIN_TUC_BA_CONG_KHAI" } },
              { maLoai: { $ne: "DAO_TAO_TIN_TUC_LICH_THI_TA" } },
              { maLoai: { $ne: "DAO_TAO_TIN_TUC_DINH_HUONG" } },
            ],
          },
        },
      });
      const list = _.get(response, "data.data", []);
      setLoaiTinTuc(list);
    })();
  }, []);

  const tintucDesk = () => {
    let tun = [];
    loaitintuc?.map((item) => {
      tun.push(
        <Item
          onClick={() => {
            router.replace(`/tintucchung#${Format(item?.maLoai)}`);
            if (router.pathname === "/tintucchung") {
              router.reload();
            }
          }}
        >
          {/* <Link href={`/tintucchung#${Format(item?.maLoai)}`}> */}
          <a style={{ fontSize: isDesktop ? 14 : 18 }}>{item?.tenLoai}</a>
          {/* </Link> */}
        </Item>
      );
    });
    return tun;
  };

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
            <Item>
              <Link href={`/nganhhoc/${e?.maNganh ?? ""}`}>
                <a style={{ fontSize: isDesktop ? 14 : 18 }}>
                  {e?.tenNganh ?? ""}
                </a>
              </Link>
            </Item>
          ))}
        </SubMenu>
      );
    });
    return res;
  };

  let MENU_ITEMS = [
    {
      label: "TRANG CHỦ",
      path: "#",
      offset: "70",
    },
    {
      hover: true,
      label: "GIỚI THIỆU CHUNG",
      path: "#",
      offset: "70",
      submenu: [
        <Item>
          <Link href="/doinguchitiet">
            <a style={{ fontSize: isDesktop ? 14 : 18 }}>Đội ngũ cán bộ</a>
          </Link>
        </Item>,
        <Item>
          <Link href="/chucnangnhiemvu">
            <a style={{ fontSize: isDesktop ? 14 : 18 }}>
              Chức năng - Nhiệm vụ
            </a>
          </Link>
        </Item>,
        <Item>
          <Link href="/quychequydinh">
            <a style={{ fontSize: isDesktop ? 14 : 18 }}>Quy chế - Quy định</a>
          </Link>
        </Item>,
      ],
    },
    {
      label: "TIN TỨC",
      path: "tintucchung",
    },
    {
      label: "ĐỀ ÁN TUYỂN SINH",
      path: "deantuyensinh",
    },
    {
      label: "TUYỂN SINH",
      path: "https://tuyensinh.ptit.edu.vn/",
      offset: "70",
      redirect: true,
      submenu: [
        <Item>
          {/* <Link href="/vanbangchungchi"> */}
          <a
            style={{ fontSize: isDesktop ? 14 : 18 }}
            onClick={() => window.open("https://tuyensinh.ptit.edu.vn/")}
          >
            Tin tức
          </a>

          {/* </Link> */}
        </Item>,
        <Item>
          <Link href="/chungchi">
            <a
              style={{ fontSize: isDesktop ? 14 : 18 }}
              onClick={() => window.open("https://tuyensinh.ptit.edu.vn/")}
            >
              Đề án tuyển sinh
            </a>
          </Link>
        </Item>,
      ],
    },
    {
      hover: true,
      label: "CHƯƠNG TRÌNH ĐÀO TẠO",
      path: "#",
      offset: "70",
      submenu: daotaoDesk(),
    },
    {
      label: "TRA CỨU",
      path: "#",
      offset: "70",
      submenu: [
        <Item>
          {/* <Link href="/vanbangchungchi"> */}
          <a
            style={{ fontSize: isDesktop ? 14 : 18 }}
            onClick={() => window.open("https://tracuuvanbang.ptit.edu.vn/")}
          >
            Tra cứu văn bằng
          </a>

          {/* </Link> */}
        </Item>,
        <Item>
          <Link href="/chungchi">
            <a style={{ fontSize: isDesktop ? 14 : 18 }}>
              Tra cứu chứng chỉ tiếng Anh
            </a>
          </Link>
        </Item>,
      ],
    },
    {
      label: "BA CÔNG KHAI",
      path: "bacongkhai",
      offset: "70",
    },
  ];

  console.log(isMobile, "test nav");

  const handleClick = () => {};

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  const openDrawer = () => {
    setShowDrawer(true);
  };

  return isMobile ? (
    <div
      id="nav-bar"
      style={{
        backgroundColor: "white",
        boxShadow: "rgba(43, 83, 135, 0.08) 0px 3px 8px 0px",
      }}
    >
      {/* <NavbarWrapper> */}
      <Container>
        <Row style={{ width: "100%" }}>
          <Col xl={2} lg={2} md={2} xs={2} sm={2}>
            <Link rel="prefetch" href={`/`}>
              <a>
                <Image style={{ width: "85px" }} src={LogoImage} alt="logo" />
              </a>
            </Link>
          </Col>
          <Col
            xl={19}
            lg={19}
            md={19}
            xs={0}
            sm={0}
            style={{
              paddingTop: 25,
            }}
          >
            {!loading && (
              <>
                <ScrollSpyMenu
                  menuItems={MENU_ITEMS}
                  offset={-60}
                  isDesktop={isDesktop}
                  onClose={closeDrawer}
                />
              </>
            )}
          </Col>
          <Col xl={0} lg={0} md={0} xs={20} sm={20}>
            <div
              style={{
                fontSize: "calc(1vw + 10px)",
                color: "red",
                fontWeight: "650",
                textAlign: "center",
                wordSpacing: "5px",
                textAlign: "center",
                marginTop: 11,
              }}
            >
              HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG
            </div>
            <div
              style={{
                fontSize: "calc(1vw + 6px)",
                color: "red",
                fontWeight: "550",
                textAlign: "center",
              }}
            >
              CỔNG THÔNG TIN ĐÀO TẠO
            </div>
          </Col>
          <Col xl={0} lg={0} md={0} xs={2} sm={2}>
            <Icon
              type="menu-fold"
              style={{ fontSize: 30, color: "red", marginTop: "11px" }}
              onClick={openDrawer}
            />
          </Col>
          <Drawer
            visible={showDrawer}
            width={!isMobile ? "50%" : "90%"}
            destroyOnClose
            closable
            onClose={closeDrawer}
            bodyStyle={{ padding: "10px 0px" }}
          >
            <ScrollSpyMenu
              className="main_menu"
              menuItems={MENU_ITEMS}
              offset={-60}
              isDesktop={true}
              onClose={closeDrawer}
            />
          </Drawer>
        </Row>
      </Container>
      {/* </NavbarWrapper> */}
    </div>
  ) : (
    <div
      id="nav-bar"
      style={{
        backgroundColor: "white",
        boxShadow: "rgba(43, 83, 135, 0.08) 0px 3px 8px 0px",
      }}
    >
      <NavbarWrapper>
        <Container>
          <div
            style={{
              fontSize: "calc(1vw + 10px)",
              color: "red",
              fontWeight: "650",
              textAlign: "center",
              wordSpacing: "5px",
              textAlign: "center",
              marginTop: 11,
            }}
          >
            HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG
          </div>
          <div
            style={{
              fontSize: "calc(1vw + 6px)",
              color: "red",
              fontWeight: "550",
              textAlign: "center",
            }}
          >
            CỔNG THÔNG TIN ĐÀO TẠO
          </div>

          <Row style={{ width: isDesktop ? "inherit" : "100%" }}>
            <Col xl={2} lg={2} md={2} xs={22} sm={22}>
              <Link rel="prefetch" href={`/`}>
                <a>
                  <Image style={{ width: "70px" }} src={LogoImage} alt="logo" />
                  {/* <img style={{ width: "70px" }} src={LogoImage} alt="logo" /> */}
                  {/* </Image> */}
                </a>
              </Link>
            </Col>
            <Col
              xl={22}
              lg={22}
              md={22}
              xs={0}
              sm={0}
              style={{ paddingTop: 25 }}
            >
              {!loading && (
                <ScrollSpyMenu
                  menuItems={MENU_ITEMS}
                  offset={-60}
                  isDesktop={isDesktop}
                  onClose={closeDrawer}
                />
              )}
            </Col>
            <Col xl={0} lg={0} md={0} xs={2} sm={2}>
              <Icon
                type="menu-fold"
                style={{ fontSize: 35, color: "#FF3D3B", marginTop: "35px" }}
                onClick={openDrawer}
              />
            </Col>
            <Drawer
              visible={showDrawer}
              width={!isMobile ? "50%" : "80%"}
              destroyOnClose
              closable
              onClose={closeDrawer}
              bodyStyle={{ padding: "10px 0px" }}
            >
              <ScrollSpyMenu
                className="main_menu"
                menuItems={MENU_ITEMS}
                offset={-60}
                isDesktop={true}
                onClose={closeDrawer}
              />
            </Drawer>
          </Row>
        </Container>
      </NavbarWrapper>
    </div>
  );
};

// Navbar.defaultProps = {
//   navbarStyle: {
//     backgroundColor: 'white',
//     // className: "hosting_navbar",
//     // minHeight: "70px",
//     display: "block",
//   },
// };

export default Navbar;
