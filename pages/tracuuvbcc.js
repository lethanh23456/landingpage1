import { Col, Modal, Row, Spin } from "antd";
import axios from "axios";
import FormTraCuu from "components/Table/FormTraCuuVBCC";
import TableTraCuuVBCC from "components/Table/TableTraCuuVBCC";
import Container from "components/UI/Container";
import { ipPTIT } from "data/ip";
import PropTypes from "prop-types";
import "rc-tabs/assets/index.css";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import SectionWrapper from "../styles/vanbangchungchi.style";
import bgtracuu from "assets/image/bgtracuu.png";

const TraCuuVanBangChungChi = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [ds, setds] = useState([]);
  const [loading, setloading] = useState(false);
  const traCuu = async (values) => {
    const filledFields = Object.entries(values).filter(
      ([key, value]) => key !== "mucDichTraCuuId" && !!value
    ).length;

    if (filledFields < 2) {
      Modal.warning({
        title: "Thông báo",
        content: "Vui lòng nhập ít nhất 2 thông tin để tra cứu",
      });
      return;
    }

    setloading(true);
    const data = await axios.post(
      `${ipPTIT}vbcc/phu-luc-van-bang/public/tra-cuu-phu-luc-van-bang`,
      values
    );
    const arr = data?.data?.data?.result ?? [];
    if (arr.length === 0) {
      Modal.error({
        title: "Thông báo",
        content:
          "Thông tin nhập sai hoặc không tồn tại thông tin văn bằng chứng chỉ",
        onOk() { },
      });
      setloading(false);
      setds([]);
      return;
    }
    setds(arr ?? []);
    setloading(false);
  };

  const tieuDeKQ = props.tieuDe;
  const heroBackgroundStyle = {
    background: `
      linear-gradient(98.21deg, rgba(255, 255, 255, 0.6) 3.66%, rgba(255, 210, 210, 0.6) 91.93%),
      linear-gradient(78.64deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 95.68%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.42) 30.19%, rgba(255, 255, 255, 0) 100%),
      url(${bgtracuu})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "0px",
    maxWidth: "none",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <Row>
      <Spin spinning={!!loading}>
        <SectionWrapper id="daotao">
          {isMobile && (
            <Container fullWidth noGutter>
              <div style={{ ...heroBackgroundStyle, padding: "24px 16px 24px" }}>
                <div style={{ width: "100%", margin: "0 auto" }}>
                  <div style={{ marginBottom: 12 }}>
                    {tieuDeKQ}
                  </div>
                  <div style={{ width: "100%" }}>
                    <FormTraCuu onSubmit={(values) => traCuu(values)} onReset={() => setds([])} />
                  </div>
                </div>
              </div>
              <TableTraCuuVBCC thongTinTraCuu={ds} />
            </Container>
          )}
          {!isMobile && (
            <Container fullWidth noGutter>
              <div style={{ ...heroBackgroundStyle, padding: "32px 24px 80px 24px" }}>
                <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto" }}>
                  <Col lg={24} style={{ marginBottom: 32 }}>
                    {tieuDeKQ}
                  </Col>
                  <div style={{ width: "100%" }}>
                    <FormTraCuu onSubmit={(values) => traCuu(values)} onReset={() => setds([])} />
                  </div>
                </div>
              </div>
              <TableTraCuuVBCC thongTinTraCuu={ds} />
            </Container>
          )}
        </SectionWrapper>
      </Spin>
    </Row>
  );
};

TraCuuVanBangChungChi.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
};

TraCuuVanBangChungChi.defaultProps = {
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

export default TraCuuVanBangChungChi;
