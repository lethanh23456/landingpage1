/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
/* eslint-disable indent */
// eslint-disable-next-line react/prefer-stateless-function
import { Card, Col, Row } from "antd";
import axios from "axios";
import Box from "components/Box";
import style from "components/DoiNguCanBo/doingu.less";
import {
  ContainerCardDN,
  TinTucWrapper,
  TitleUnderWrapper,
} from "components/DoiNguCanBo/TinTuc.style";
import Container from "components/UI/Container";
import { ip } from "data/ip";
import _ from "lodash";
import React, { useEffect, useState } from "react";

const DoiNgu = ({ button, buttonWrapper }) => {
  // Carousel Options

  const [relate, setRelate] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line wrap-iife
    (async function wrapFunc() {
      const response = await axios.get(`${ip}/can-bo`, {
        params: {
          page: 1,
          limit: 1000,
          cond: {
            // hienThi: 'true'
          },
          sort: "thuTu",
          order: 1,
        },
      });
      const data = _.get(response, "data.data", []);
      setRelate(data);
    })();
    return () => {};
  }, []);
  //   console.log(response, "path post");
  return (
    <Box style={{ marginTop: 0 }}>
      <TinTucWrapper>
        <Container>
          {/* <TitleContainer style={{ color: '#C13726', marginTop: '50' }}>
						<p style={{ marginTop: '50', fontSize: '30px', lineHeight: '20px' }}>
							HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG
						</p>
						<p style={{ color: '#1E1E1E', fontSize: '26px' }}>ĐỘI NGŨ CÁN BỘ - PHÒNG ĐÀO TẠO</p>
					</TitleContainer>
					<TitleUnderWrapper /> */}
          <Row>
            <p
              style={{
                marginTop: "60",
                fontSize: "30px",
                textAlign: "center",
                color: "#D13E32",
                margin: "0 0 10px",
              }}
            >
              HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG
            </p>
            <p
              style={{
                color: "#1E1E1E",
                fontSize: "26px",
                textAlign: "center",
                margin: "0 0 10px",
              }}
            >
              PHÒNG ĐÀO TẠO
            </p>
            <TitleUnderWrapper />
          </Row>
          <Row type="flex" justify="center">
            {relate.map((item, index) => {
              if (item.thuTu === 1) {
                return (
                  <ContainerCardDN>
                    <Col
                      className={style.cardd}
                      xl={8}
                      lg={8}
                      xs={24}
                      sm={12}
                      md={12}
                      style={{ width: "100%" }}
                    >
                      <Card
                        className={style.card}
                        style={{
                          textAlign: "center",
                          borderRadius: "20px",
                          // paddingTop: '20px',
                          // height: '340px',
                          // width: '280px',
                        }}
                        // hoverable
                        bodyStyle={{ width: "100%" }}
                      >
                        <Row style={{ marginBottom: "40px" }}>
                          <Col span={24} style={{ alignItems: "center" }}>
                            <img
                              alt=""
                              src={_.get(item, "anhDaiDien", "")}
                              height="150px"
                              width="150px"
                              style={{ borderRadius: "50%" }}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <p
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                            className={style.name}
                          >
                            {_.get(item, "hocHam", "")}{" "}
                            {_.get(item, "hocVi", "")}{" "}
                            {_.get(item, "hoTen", "")}
                          </p>
                          <p
                            style={{ marginTop: "20", fontSize: "16px" }}
                            className={style.khoa}
                          >
                            {_.get(item, "chucVu", "")}
                          </p>
                        </Row>
                      </Card>
                    </Col>
                  </ContainerCardDN>
                );
              }
            })}
          </Row>
          <Row
            type="flex"
            justify="center"
            gutter={[20, 20]}
            style={{ marginTop: 20 }}
          >
            {relate.map((item, index) => {
              if (item.thuTu !== 1) {
                return (
                  <Col
                    className={style.cardd}
                    xl={8}
                    lg={8}
                    xs={24}
                    sm={12}
                    md={12}
                    // style={{ padding: '10px 45px' }}
                  >
                    <ContainerCardDN>
                      <Card
                        className={style.card}
                        style={{
                          textAlign: "center",
                          borderRadius: "20px",
                          // paddingTop: '20px',
                          // height: '340px',
                          // width: '280px',
                        }}
                        // hoverable
                        bodyStyle={{ width: "100%" }}
                      >
                        <Row style={{ marginBottom: "40px" }}>
                          <Col span={24} style={{ alignItems: "center" }}>
                            <img
                              alt=""
                              src={_.get(item, "anhDaiDien", "")}
                              height="150px"
                              width="150px"
                              style={{ borderRadius: "50%" }}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <p
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                            className={style.name}
                          >
                            {_.get(item, "hocHam", "")}{" "}
                            {_.get(item, "hocVi", "")}{" "}
                            {_.get(item, "hoTen", "")}
                          </p>
                          <p
                            style={{ marginTop: "20", fontSize: "16px" }}
                            className={style.khoa}
                          >
                            {_.get(item, "chucVu", "")}
                          </p>
                        </Row>
                      </Card>
                    </ContainerCardDN>
                  </Col>
                );
              }
            })}
          </Row>
        </Container>
      </TinTucWrapper>
    </Box>
  );
};

export default DoiNgu;
