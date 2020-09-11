import { Col, Row, Spin } from "antd";
import Container from "components/UI/Container";
import { get } from "libs/fetchData";
import _ from "lodash";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CardTinTucNgang from "./components/CardTinTucNgang";
import {
  ButtonDetailWrapper, ContainerCardDNN,
  TinTucHover,
  TinTucWrapper,
  TitleUnderWrapper
} from "./TinTuc.style";

const TinTucNgang = ({ title }) => {
  const [relate, setRelate] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    get(setRelate, setLoading, 'sotay/tintuc', {
      params: {
        page: 1,
        limit: 8,
        cond: {
          maLoaiTinTuc: "THÔNG BÁO",
        },
      },
    })
  }, []);
  return (
    <div style={{ padding: '48px 30px' }}>
      <Container noGutter mobileGutter width="1170px">
        <TinTucWrapper>
          <p>{title}</p>
          <TitleUnderWrapper />
        </TinTucWrapper>
        <Spin spinning={loading}>
          <Row gutter={[24, 24]} style={{ minHeight: 500 }}>
            {relate
              //  Lấy 4 tin đầu
              ?.filter((val, i) => i < 4)
              ?.map((award, index) => (
                <Col lg={12} md={12} xs={24} sm={24}>
                  <TinTucHover>
                    <ContainerCardDNN>
                      <CardTinTucNgang
                        type={_.get(award, "loaiTinTuc.chuDe", "")}
                        href={_.get(award, "slug", "")}
                        title={_.get(award, "tieuDe", "")}
                        moTa={_.get(award, "moTa", "")}
                        // img={ftulogo}
                        img={_.get(award, "anhDaiDien", "")}
                        src={_.get(award, "nguoiDang.hoTen", "")}
                        time={
                          _.get(award, "ngayDang", "") !== ""
                            ? moment(_.get(award, "ngayDang", "")).format(
                              "DD/MM/YYYY h:mm"
                            )
                            : ""
                        }
                      />
                    </ContainerCardDNN>
                  </TinTucHover>
                </Col>
              ))}
          </Row>
        </Spin>
        <div
          style={{
            width: 135,
            margin: "0px auto",
            textAlign: "center",
          }}
        >
          <Link href="tintucchung#thongbao">
            <a
              style={{
                width: 135,
                display: "inline-flex",
              }}
              className="button-more"
              href="tintucchung#thongbao"
            >
              <ButtonDetailWrapper
                type="button"
                style={{
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    margin: "0 auto",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                >
                  XEM CHI TIẾT
                </div>
              </ButtonDetailWrapper>
            </a>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default TinTucNgang;
