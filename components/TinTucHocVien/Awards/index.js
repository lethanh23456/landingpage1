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

const AwardsSection = ({
  secTitleWrapper,
  secTitle,
  secDescription,
  awardLogoStyle,
  awardNameStyle,
  awardDetailsStyle,
  awardeeLogoStyle,
  awardeeNameStyle,
  awardDateStyle,
  data,
}) => {
  const maBlockTinTuc = _.get(data[0], "_id", []);
  const [relate, setRelate] = useState([]);
  const [loading, setLoading] = useState(true);
  // maBlock => maLoaiBaiViet => baiviet
  useEffect(() => {
    (async function wrapFunc() {
      // get loai bai viet theo maBLock
      const responseBlock = await axios.get(`${ip}/loai-bai-viet`, {
        params: {
          page: 1,
          limit: 1000,
          cond: {
            // maLoaiBaiViet: maBlock,
            maBlock: maBlockTinTuc,
          },
        },
      });
      const dataLoaiBaiViet = _.get(responseBlock, "data.data", []);
      setRelateBlock(dataLoaiBaiViet);
      // get bai viet theo maLoaiBaiViet
      const responseTinTuc = await axios.get(`${ip}/bai-viet`, {
        params: {
          page: 1,
          limit: 8,
          cond: {
            // maLoaiBaiViet: dataLoaiBaiViet,
          },
        },
      });
      const dataTinTuc = _.get(responseTinTuc, "data.data", []);
      setRelate(dataTinTuc);
    })();
    return () => {
      // cleanup
    };
    setRelate(dataTinTuc);
    setLoading(false);
  }, []);
  return (
    <AwardSectionWrapper id="awards_section">
      <Container noGutter mobileGutter width="1170px">
        {data.map((block) => (
          <TinTucWrapper>
            <p>{_.get(block, "ten", "")}</p>
            <TitleUnderWrapper />
          </TinTucWrapper>
          // <Row gutter={24} style={{ minHeight: 290 }}>
          //   {relate
          //     ?.filter((val, i) => i < 4)
          //     ?.map((award, index) => (
          //       <Col lg={6} md={12}>
          //         <TinTucHover>
          //           <ContainerCardDN>
          //             <CardTinTuc
          //               href={_.get(award, "slug", "")}
          //               title={_.get(award, "tieuDe", "")}
          //               img={_.get(award, "anhDaiDien", "")}
          //               src={_.get(award, "nguoiDang.hoTen", "")}
          //               time={
          //                 _.get(award, "ngayDang", "") !== ""
          //                   ? moment(_.get(award, "ngayDang", "")).format(
          //                       "DD/MM/YYYY, h:mm"
          //                     )
          //                   : ""
          //               }
          //             />
          //           </ContainerCardDN>
          //         </TinTucHover>
          //       </Col>
          //     ))}
          // </Row>;
        ))}
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
    </AwardSectionWrapper>
  );
};

AwardsSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  awardLogoStyle: PropTypes.object,
  awardNameStyle: PropTypes.object,
  awardDetailsStyle: PropTypes.object,
  awardeeLogoStyle: PropTypes.object,
  awardeeNameStyle: PropTypes.object,
  awardDateStyle: PropTypes.object,
};

AwardsSection.defaultProps = {
  secTitleWrapper: {
    width: ["100%", "100%", "60%", "50%", "50%"],
    mb: "90px",
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "30px"],
    fontWeight: "600",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "20px"],
  },
  secDescription: {
    fontSize: ["15px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "0",
  },
  awardLogoStyle: {
    ml: "auto",
    mr: "auto",
    mb: "25px",
  },
  awardNameStyle: {
    fontSize: ["16px", "16px", "18px", "20px"],
    fontWeight: "600",
    color: "#302b4e",
    lineHeight: "1.35",
    textAlign: "center",
    mb: "17px",
  },
  awardDetailsStyle: {
    fontSize: ["15px", "15px", "15px", "16px"],
    color: "#43414e",
    lineHeight: "1.5",
    textAlign: "center",
    mb: "0",
  },
  awardeeNameStyle: {
    fontSize: "16px",
    color: "#9391a5",
    lineHeight: "1.35",
    fontWeight: "600",
    mb: "4px",
  },
  awardDateStyle: {
    fontSize: "12px",
    color: "#9391a5",
    lineHeight: "1.35",
    mb: "0",
  },
};

export default AwardsSection;
