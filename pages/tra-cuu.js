import { Row, Tabs } from "antd";
import Container from "components/UI/Container";
import PropTypes from "prop-types";
import "rc-tabs/assets/index.css";
import React from "react";
import TraCuuToeic from "./chungchi";
import TraCuuXetTuyen from "./tracuutuyensinh";
import axios from "axios";
import _ from "lodash";

const VBChungChi = ({ secTitleWrapper, secText, secHeading, dataBlock }) => {
  console.log(dataBlock);
  debugger;
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
          </TabPane>
          <TabPane
            tab={
              <span style={{ fontWeight: "bold", fontSize: 18 }}>
                Tra cứu Toeic
              </span>
            }
            key="2"
          >
            <TraCuuToeic />
          </TabPane>
        </Tabs>
        <div
          style={{
            marginTop: 20,
            fontSize: "calc(0.8em + 0.3vw)",
          }}
          dangerouslySetInnerHTML={{ __html: data }}
        />
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

  let block = await axios.get(`https://apiquanlydaotao.ptit.edu.vn/setting`, {
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
