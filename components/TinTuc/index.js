import { Col, Row, Spin } from "antd";
import Container from "components/UI/Container";
import { get } from 'libs/fetchData';
import _ from "lodash";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CardTinTuc from "./components/CardTinTuc";
import {
  ButtonDetailWrapper, ContainerCardDN,
  TinTucHover,
  TinTucWrapper,
  TitleUnderWrapper
} from "./TinTuc.style";

const TinTuc = ({ title }) => {
  const [relate, setRelate] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    get(setRelate, setLoading, 'sotay/tintuc', {
      params: {
        page: 1,
        limit: 8,
        cond: {
          maLoaiTinTuc: "THÔNG TIN ĐÀO TẠO",
        },
      },
    });
    // Truyền vào setRelate để  lưu data
    // setLoading cập nhật trạng thái đang get hay không
    // url: đường dẫn api 
    // payload: tham số truyền vào api
  }, []);
  return (
    <div style={{ padding: '48px 30px' }}>
      <Container noGutter mobileGutter width="1170px">
        <TinTucWrapper>
          <p>{title}</p>
          <TitleUnderWrapper />
        </TinTucWrapper>
        <Spin spinning={loading}>
          <Row gutter={[24, 24]} style={{ minHeight: 400 }}>
            {relate
              //  Lấy 4 tin đầu
              ?.filter((val, i) => i < 4)
              ?.map((award, index) => (
                <Col lg={6} md={12}>
                  <TinTucHover>
                    <ContainerCardDN>
                      <CardTinTuc
                        href={_.get(award, "slug", "")}
                        title={_.get(award, "tieuDe", "")}
                        img={_.get(award, "anhDaiDien", "")}
                        // img={ftulogo}
                        src={_.get(award, "nguoiDang.hoTen", "")}
                        time={
                          _.get(award, "ngayDang", "") !== ""
                            ? moment(_.get(award, "ngayDang", "")).format(
                              "DD/MM/YYYY h:mm"
                            )
                            : ""
                        }
                      />
                    </ContainerCardDN>
                  </TinTucHover>
                </Col>
              ))}
          </Row>
        </Spin>
        <div
          style={{
            width: "135",
            marginTop: 25,
            textAlign: "center",
          }}
        >
          <Link href="tintucchung">
            <a
              style={{
                width: "135",
                display: "inline-flex",
              }}
              className="button-more"
              href="tintucchung"
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
}
export default TinTuc;
