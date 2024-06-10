import { Col, Modal, Row, Spin } from "antd";
import axios from "axios";
import Container from "components/UI/Container";
import SectionWrapper from "../styles/vanbangchungchi.style";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import "rc-tabs/assets/index.css";
import React, { useEffect, useState } from "react";
import Box from "components/Box";
import Heading from "components/Heading";
import FormTraCuu from "components/Table/FormTraCuuTuyenSinh";
import { HeadingWrapper } from "../components/Table/Heading.style";
import { useMediaQuery } from "react-responsive";
import VanBangTable from "components/Table/TableXetTuyen";
import { TitleUnderWrapper } from "components/DoiNguCanBo/TinTuc.style";
import moment from "moment";
import { ip } from "data/ip";

const VBChungChi = (props) => {
  const { secTitleWrapper, secText, secHeading, dataBlock } = props;
  const isValue = (val) => {
    // check xem nếu bị undefined, null, xâu rỗng -> false
    if (!val && val !== 0) return false; // undefined, null
    if (val && val.length === 0) return false; // ""
    return true;
  };
  const [ds, setds] = useState([]);
  const [loading, setloading] = useState(false);
  const [id, setid] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const traCuu = async ({ hoTen, ngaySinh, cmtCccd }) => {
    debugger;
    if (!isValue(hoTen) && !isValue(ngaySinh) && !isValue(cmtCccd)) {
      Modal.warning({
        title: "Thông báo",
        content: "Chưa nhập thông tin tra cứu",
      });
      return;
    }
    if (isValue(hoTen) && isValue(ngaySinh) && isValue(cmtCccd)) {
      Modal.warning({
        title: "Thông báo",
        content:
          "Bạn chỉ có thể tra cứu theo tên và ngày sinh hoặc tra cứu theo cccd/cmt",
        onOk() {},
      });
      return;
    }
    if (
      (isValue(cmtCccd) && isValue(ngaySinh)) ||
      (isValue(cmtCccd) && isValue(hoTen))
    ) {
      Modal.warning({
        title: "Thông báo",
        content:
          "Bạn chỉ có thể tra cứu theo tên và ngày sinh hoặc tra cứu theo cccd/cmt",
      });
      return;
    }
    setloading(true);
    let path = "";
    if (cmtCccd) {
      path = `cmtCccd=${cmtCccd}`;
    }
    if (ngaySinh && hoTen) {
      const ngaySinhNew = moment(ngaySinh).toISOString();
      const hoTenNew = hoTen.trim();
      path = `hoTen=${hoTenNew}&ngaySinh=${ngaySinhNew}`;
    }
    const data = await axios.get(`${ip}tra-cuu-ho-so/nhap-hoc/2021?${path}`);
    // console.log(data.data.data, 'tra cuu vb')
    const arr = data?.data?.data ?? [];
    if (arr.length === 0) {
      Modal.error({
        title: "Thông báo",
        content: "Không tìm thấy kết quả tuyển sinh",
        onOk() {},
      });
      setloading(false);
      setds([]);
      return;
    }
    setds(data?.data?.data ?? []);
    setloading(false);
  };

  const tieuDeKQ = props.tieuDe;

  return (
    <Row>
      <Spin spinning={!!loading}>
        <SectionWrapper id="daotao">
          {isMobile && (
            <>
              <Box style={{ padding: 0 }}>
                <Col lg={24} style={{}}>
                  <Box {...secTitleWrapper}>
                    <HeadingWrapper>
                      <Heading content={tieuDeKQ} />
                      <TitleUnderWrapper />
                    </HeadingWrapper>
                  </Box>
                </Col>
              </Box>
              <div>
                <FormTraCuu onSubmit={(values) => traCuu(values)} />
              </div>
              <VanBangTable data={ds} id={id} type="nhaphoc" />
            </>
          )}
          {!isMobile && (
            <Container>
              <Box style={{ padding: 0 }}>
                <Col lg={24} style={{}}>
                  <Box {...secTitleWrapper}>
                    <HeadingWrapper>
                      <Heading content={tieuDeKQ} />
                      <TitleUnderWrapper />
                    </HeadingWrapper>
                  </Box>
                </Col>
              </Box>
              <div>
                <FormTraCuu onSubmit={(values) => traCuu(values)} />
              </div>
              <VanBangTable data={ds} id={id} type="nhaphoc" />
            </Container>
          )}
        </SectionWrapper>
      </Spin>
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
