import { Row, Tabs } from "antd";
import Container from "components/UI/Container";
import PropTypes from "prop-types";
import "rc-tabs/assets/index.css";
import React from "react";
import TraCuuToeic from "./chungchi";
import TraCuuXetTuyen from "./tracuutuyensinh";

const VBChungChi = ({ secTitleWrapper, secText, secHeading }) => {
  const { TabPane } = Tabs;

  return (
    <Row>
      <Container>
        <Tabs defaultActiveKey="1" style={{ marginTop: 15 }}>
          <TabPane
            tab="Tra cứu kết quả xét tuyển theo phương thức kết hợp năm 2021"
            key="1"
          >
            <TraCuuXetTuyen />
          </TabPane>
          <TabPane tab="Tra cứu Toeic" key="2">
            <TraCuuToeic />
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

export default VBChungChi;
