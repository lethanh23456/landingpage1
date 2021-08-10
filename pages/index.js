import { Row, Tabs } from "antd";
import Container from "components/UI/Container";
import PropTypes from "prop-types";
import "rc-tabs/assets/index.css";
import React from "react";
import TraCuuToeic from "./chungchi";
import TraCuuXetTuyen from "./tracuutuyensinh";
import TraCuuXacNhanNhapHoc from "./tracuunhaphoc";
import axios from "axios";
import _ from "lodash";
import { ip } from "data/ip";

const VBChungChi = ({ secTitleWrapper, secText, secHeading, dataBlock }) => {
  const { TabPane } = Tabs;
  const [visible, setVisible] = React.useState(false);
  const data = dataBlock?.[0]?.value;

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
            <TraCuuXetTuyen />
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
                Tra cứu kết quả thi Toeic
              </span>
            }
            key="2"
          >
            <TraCuuToeic />
          </TabPane>

          <TabPane
            tab={
              <span style={{ fontWeight: "bold", fontSize: 18 }}>
                Tra cứu xác nhận nhập học
              </span>
            }
            key="3"
          >
            <TraCuuXacNhanNhapHoc />
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

  // Pass data to the page via props
  return {
    props: {
      dataBlock,
    },
  };
}

export default VBChungChi;
