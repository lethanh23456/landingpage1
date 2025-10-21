import { Row, Tabs } from "antd";
import axios from "axios";
import Container from "components/UI/Container";
import { ip } from "data/ip";
import _ from "lodash";
import PropTypes from "prop-types";
import "rc-tabs/assets/index.css";
import React from "react";
import TraCuuToeic from "./chungchi";
import TraCuuXacNhanNhapHoc from "./tracuunhaphoc";
import TraCuuXetTuyen from "./tracuutuyensinh";
import TraCuuVanBangChungChi from "./tracuuvbcc";

const VBChungChi = ({
  secTitleWrapper,
  secText,
  secHeading,
  dataBlock,
  dataToeic,
  dataNhapHoc,
}) => {
  const { TabPane } = Tabs;
  const [visible, setVisible] = React.useState(false);
  const data = dataBlock?.[0]?.value;
  const tieuDeKQ = dataBlock?.[0]?.description;

  const dataToeicText = dataToeic?.[0]?.value;
  const tieuDeToeic = dataToeic?.[0]?.description;

  const dataNhapHocText = dataNhapHoc?.[0]?.value;
  const tieuDeNhapHoc = dataNhapHoc?.[0]?.description;

  return (
    <Row>
      <Container>
        <Tabs defaultActiveKey="1" style={{ marginTop: 15 }}>
          <TabPane
            tab={
              <span style={{ fontWeight: "bold", fontSize: 18 }}>
                Tra cứu kết quả tuyển sinh
              </span>
            }
            key="1"
          >
            <TraCuuXetTuyen tieuDe={tieuDeKQ} />
            <div
              style={{
                marginTop: 20,
                fontSize: "calc(0.8em + 0.3vw)",
              }}
              dangerouslySetInnerHTML={{ __html: data }}
            />
          </TabPane>
          <TabPane
            tab={
              <span style={{ fontWeight: "bold", fontSize: 18 }}>
                Tra cứu xác nhận nhập học
              </span>
            }
            key="3"
          >
            <TraCuuXacNhanNhapHoc tieuDe={tieuDeNhapHoc} />
            <div
              style={{
                marginTop: 20,
                fontSize: "calc(0.8em + 0.3vw)",
              }}
              dangerouslySetInnerHTML={{ __html: dataNhapHocText }}
            />
          </TabPane>
          <TabPane
            tab={
              <span style={{ fontWeight: "bold", fontSize: 18 }}>
                Tra cứu kết quả thi Toeic
              </span>
            }
            key="2"
          >
            <TraCuuToeic tieuDe={tieuDeToeic} />
            <div
              style={{
                marginTop: 20,
                fontSize: "calc(0.8em + 0.3vw)",
              }}
              dangerouslySetInnerHTML={{ __html: dataToeicText }}
            />
          </TabPane>
          <TabPane
            tab={
              <span style={{ fontWeight: "bold", fontSize: 18 }}>
                Tra cứu văn bằng chứng chi
              </span>
            }
            key="4"
          >
            <TraCuuVanBangChungChi tieuDe="Tra cứu văn bằng chứng chỉ" />
          </TabPane>
        </Tabs>
      </Container>
    </Row>
  );
};

VBChungChi.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
};

VBChungChi.defaultProps = {
  secTitleWrapper: {
    mb: ["100px", "40px"],
  },
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#ff4362",
    mb: "12px",
  },
  secHeading: {
    fontStyle: "normal",
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold",
    color: "#202124",
    letterSpacing: "0.04em",
    mb: "0",
    ml: "auto",
    mr: "auto",
    lineHeight: "40px",
    width: "600px",
    maxWidth: "100%",
  },
};

export async function getServerSideProps() {
  // Fetch data from external API

  let block = await axios.get(`${ip}/setting`, {
    params: {
      page: 1,
      limit: 1000,
      cond: {
        key: "HUONG_DAN_NHAP_HOC_THEO_PTKH",
      },
    },
  });
  const dataBlock = _.get(block, "data.data", {});

  block = await axios.get(`${ip}/setting`, {
    params: {
      page: 1,
      limit: 1000,
      cond: {
        key: "HUONG_DAN_TRA_CUU_TOEIC",
      },
    },
  });
  const dataToeic = _.get(block, "data.data", {});

  block = await axios.get(`${ip}/setting`, {
    params: {
      page: 1,
      limit: 1000,
      cond: {
        key: "HUONG_DAN_TRA_CUU_XAC_NHAN_NHAP_HOC",
      },
    },
  });
  const dataNhapHoc = _.get(block, "data.data", {});

  // Pass data to the page via props
  return {
    props: {
      dataBlock,
      dataToeic,
      dataNhapHoc,
    },
  };
}

export default VBChungChi;
