import { Col, Icon, Row } from "antd";
import React from "react";
import Box from "components/Box";
import logo from "assets/image/hosting/rsz_22logo.jpg";
import { NameWrapper, RowWrapper } from "./index.style";

const GlobalFooter = () => {
  const coSo = (title, add) => (
    <>
      <p style={{ fontWeight: "bold", fontSize: 16, margin: "0 0 8px" }}>
        {title}:
      </p>
      <p style={{ fontSize: 16 }}>{add}</p>
    </>
  );

  return (
    <Box
      style={{ marginTop: 12, backgroundColor: "#940D0F", padding: "0px 6%" }}
    >
      {/* <Container> */}
      <div style={{ paddingTop: 50 }}>
        <RowWrapper gutter={[16, 16]} type="flex" justify="center">
          <Col xs={24} lg={12} style={{ color: "white" }}>
            <NameWrapper>
              <img src={logo} alt="FTU" style={{ marginRight: 20 }} /> Trường
              Đại học Ngoại Thương
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderBottom: "40px solid #940D0F",
                  borderLeft: "40px solid transparent",
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                }}
              />
            </NameWrapper>
            {coSo(
              "Cơ sở Hà Nội",
              "91 Phố Chùa Láng - Láng Thượng - Đống Đa - Hà Nội."
            )}
            {coSo(
              "Cơ sở Quảng Ninh",
              "260 Bạch Đằng, Nam Khê - Uông Bí - Quảng Ninh."
            )}
            {coSo(
              "Cơ sở Hồ  Chí Minh",
              "Số 15, Đường D5, Khu Văn Thánh Bắc, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh."
            )}
          </Col>
          <Col xs={24} lg={12} style={{ color: "white", fontSize: 16 }}>
            <p style={{ fontSize: 18, fontWeight: "bold" }}>
              PHÒNG QUẢN LÝ ĐÀO TẠO - TRƯỜNG ĐẠI HỌC NGOẠI THƯƠNG
            </p>
            <p style={{ margin: "0 0 8px" }}>
              <Icon type="phone" /> Hotline: 02432595160 - 02432595161
            </p>
            <p style={{ margin: "0 0 8px" }}>
              <Icon type="customer-service" /> Tổng đài: (04) 32 595158 (Máy lẻ:
              202, 205, 207)
            </p>
            <p>
              <Icon type="mail" /> Email: qldt@ftu.edu.vn
            </p>
            <Row>
              <Col xl={12} lg={12} style={{ padding: 20 }}>
                <ul>
                  <li style={{ listStyleType: "circle", marginBottom: 15 }}>
                    ĐÀO TẠO
                  </li>
                  <li style={{ listStyleType: "circle", marginBottom: 15 }}>
                    E-LEARNING
                  </li>
                  <li style={{ listStyleType: "circle", marginBottom: 15 }}>
                    QUY ĐỊNH
                  </li>
                  <li style={{ listStyleType: "circle", marginBottom: 15 }}>
                    KẾT NỐI
                  </li>
                </ul>
              </Col>
              <Col xl={12} lg={12}>
                <div
                  style={{ marginTop: 10 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.241072190762!2d105.80324831533207!3d21.023037993348662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab5d5161f909%3A0x4dafaf500ce22be3!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOZ2_huqFpIHRoxrDGoW5nIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1597736425568!5m2!1svi!2s" width="100%" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
                  }}
                />
              </Col>
            </Row>
          </Col>
        </RowWrapper>
        <Row>
          <br />
          <b>
            <a href="https://aisoftech.vn/" target="_blank" rel="noreferrer">
              <div style={{ textAlign: "center", color: "white" }}>
                © 2020 Designed and Developed by A.I-SOFT
              </div>
            </a>
          </b>
          <br />
        </Row>
      </div>
      {/* </Container> */}
    </Box>
  );
};

export default GlobalFooter;
// calc(0.8em + 0.9vw)
