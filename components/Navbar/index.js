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
    query: "(max-width: 767px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
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

  const handleClick = () => { };

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  const openDrawer = () => {
    setShowDrawer(true);
  };

  return isMobile ? (
    <header>
      <div
        style={{
          backgroundColor: "#b9191c",
          color: "white",
          padding: "4px 0",
          fontSize: "12px",
        }}
      >
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <a
                href="https://ptit.edu.vn"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white", textDecoration: "underline", whiteSpace: "nowrap" }}
              >
                Cổng thông tin điện tử PTIT
              </a>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              Tiếng Việt
            </div>
          </div>
        </Container>
      </div>

      <div
        id="nav-bar-mobile"
        style={{
          backgroundColor: "white",
          boxShadow: "rgba(43, 83, 135, 0.08) 0px 3px 8px 0px",
          padding: "10px 0",
        }}
      >
        <Container>
          <Row style={{ width: "100%", alignItems: "center" }}>
            <Col
              xl={19} lg={19} md={19} xs={0} sm={0}
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

            <Col xl={0} lg={0} md={0} xs={24} sm={24}>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "10px" }}>
                <div
                  style={{
                    color: "#b9191c",
                    fontSize: "calc(1vw + 10px)",
                    fontWeight: "600",
                    textAlign: "center",
                    marginBottom: "2px",
                  }}
                >
                  Học viện Công nghệ Bưu chính Viễn thông
                </div>

                <div
                  style={{
                    color: "#002060",
                    fontSize: "calc(1vw + 12px)",
                    fontWeight: "750",
                    textAlign: "center",
                    textTransform: "uppercase",
                  }}
                >
                  Hệ thống tra cứu PTIT
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  ) : (
    <header>
      <div
        style={{
          backgroundColor: "#b9191c",
          color: "white",
          padding: "12px 40px",
          fontSize: "14px",
        }}
      >
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>

              <a
                href="https://ptit.edu.vn"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white", textDecoration: "underline", fontSize: 'clamp(10px, 2vw, 14px)' }}
              >
                Cổng thông tin điện tử Học viện Công nghệ Bưu chính Viễn thông
              </a>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "4px", cursor: "pointer", fontSize: 'clamp(10px, 2vw, 14px)' }}>
              Tiếng Việt
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </Container>
      </div>

      <div
        id="nav-bar-desktop"
        style={{
          backgroundColor: "white",
          boxShadow: "rgba(43, 83, 135, 0.08) 0px 3px 8px 0px",
          padding: "15px 0",
        }}
      >
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Link rel="prefetch" href={`/`}>
              <a style={{ display: "flex", alignItems: "center" }}>
                <Image
                  style={{ height: "65px", width: "auto" }}
                  src={LogoImage}
                  alt="logo"
                />
              </a>
            </Link>

            <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
              <div
                style={{
                  color: "#b9191c",
                  fontSize: "clamp(12px, 2vw, 20px)",
                  fontWeight: "600",
                  marginBottom: "4px",
                }}
              >
                Học viện Công nghệ Bưu chính Viễn thông
              </div>

              <div
                style={{
                  color: "#002060",
                  fontSize: "clamp(16px, 2vw, 26px)",
                  fontWeight: "750",
                  textTransform: "uppercase",
                }}
              >
                HỆ THỐNG TRA CỨU VĂN BẰNG CHỨNG CHỈ PTIT
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
