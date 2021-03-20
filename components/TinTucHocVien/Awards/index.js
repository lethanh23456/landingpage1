import { Col, Row, Spin } from "antd";
import Container from "components/UI/Container";
import axios from "axios";
import _ from "lodash";
import { ip } from "data/ip";
import moment from "moment";
import Link from "next/link";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import CardTinTuc from "../components/CardTinTuc";
import {
  ButtonDetailWrapper,
  ContainerCardDN,
  TinTucHover,
  TinTucWrapper,
  TitleUnderWrapper,
} from "../TinTuc.style";
import { AwardSectionWrapper } from "./awards.style";

const AwardsSection = ({ data }) => {
  const [relate, setRelate] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async function wrapFunc() {
      const maBlock = data?.maBlock ?? "";
      const response = await axios.get(`${ip}/bai-viet`, {
        params: {
          page: 1,
          limit: 4,
          cond: {
            maLoaiBaiViet: maBlock,
            hienThi: true,
          },
        },
      });
      const dataBaiViet = _.get(response, "data.data", []);
      setRelate(dataBaiViet);
      setLoading(false);
    })();
  }, [data]);
  // console.log(data, "sungao");
  console.log(relate, "TuanBui");
  return (
    <AwardSectionWrapper
      id="awards_section"
      style={{ backgroundColor: "#F9F9F9" }}
    >
      <Container noGutter mobileGutter width="1170px">
        <TinTucWrapper>
          <p>{_.get(data, "ten", "")}</p>
          <TitleUnderWrapper />
        </TinTucWrapper>
        <Row gutter={24} style={{ minHeight: 290 }}>
          <Spin spinning={loading}>
            {relate
              ?.filter((val, i) => i < 4)
              ?.map((award, index) => (
                <Col lg={6} md={12}>
                  <TinTucHover>
                    <ContainerCardDN>
                      <CardTinTuc
                        href={_.get(award, "slug", "")}
                        title={_.get(award, "tieuDe", "")}
                        img={_.get(award, "anhDaiDien", "")}
                        src={_.get(award, "nguoiDang.hoTen", "")}
                        time={
                          _.get(award, "ngayDang", "") !== ""
                            ? moment(_.get(award, "ngayDang", "")).format(
                                "DD/MM/YYYY, h:mm"
                              )
                            : ""
                        }
                      />
                    </ContainerCardDN>
                  </TinTucHover>
                </Col>
              ))}
          </Spin>
        </Row>
        {relate.length !== 0 && (
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
        )}
      </Container>
    </AwardSectionWrapper>
  );
};

export default AwardsSection;
