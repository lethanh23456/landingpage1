import { Col, Modal, Row, Spin } from "antd";
import axios from "axios";
import Container from "components/UI/Container";
import SectionWrapper from "../styles/vanbangchungchi.style";
import { ip } from "data/ip";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import "rc-tabs/assets/index.css";
import React, { useEffect, useState } from "react";
import Box from "components/Box";
import Heading from "components/Heading";
import FormTraCuu from "components/Table/FormTraCuuVB";
import { HeadingWrapper } from "../components/Table/Heading.style";
// import { VBCC } from '../components/Data';
import VanBangTable from "components/Table/VanBang";
import { TitleUnderWrapper } from "components/DoiNguCanBo/TinTuc.style";

const VBChungChi = ({ secTitleWrapper, secText, secHeading }) => {
  const isValue = (val) => {
    // check xem nếu bị undefined, null, xâu rỗng -> false
    if (!val && val !== 0) return false; // undefined, null
    if (val && val.length === 0) return false; // ""
    return true;
  };
  const [ds, setds] = useState([]);
  const [loading, setloading] = useState(false);
  const [id, setid] = useState(false);
  const traCuu = async ({ hoTen, ngaySinh, soHieuVB }) => {
    if (!isValue(hoTen) && !isValue(ngaySinh) && !isValue(soHieuVB)) {
      // notification.info({
      //   message: 'Chưa nhập thông tin tra cứu',
      //   placement: 'bottomRight',
      //   icon: <Icon type="close-circle" style={{ color: 'red' }} />,
      // });
      Modal.warning({
        title: "Thông báo",
        content: "Chưa nhập thông tin tra cứu",
      });
      return;
    }
    if (isValue(soHieuVB) && (isValue(hoTen) || isValue(ngaySinh))) {
      // notification.info({
      //   message: 'Chỉ tìm kiếm theo họ tên, ngày sinh hoặc theo số hiệu văn bằng',
      //   placement: 'bottomRight',
      //   icon: <Icon type="close-circle" style={{ color: 'red' }} />,
      // });
      Modal.warning({
        title: "Thông báo",
        content:
          "Chỉ tìm kiếm theo họ tên, ngày sinh hoặc theo số hiệu văn bằng",
        onOk() {},
      });
      return;
    } else if (
      (isValue(hoTen) && !isValue(ngaySinh)) ||
      (!isValue(hoTen) && isValue(ngaySinh))
    ) {
      // notification.info({
      //   message: 'Nhập cả họ tên và ngày sinh',
      //   placement: 'bottomRight',
      //   icon: <Icon type="close-circle" style={{ color: 'red' }} />,
      // });
      Modal.error({
        title: "Thông báo",
        content: "Phải nhập cả họ tên và ngày sinh",
        onOk() {},
      });
      return;
    }
    setloading(true);
    const data = await axios.get(`${ip}/phu-luc-van-bang/tra-cuu`, {
      params: { hoTen, ngaySinh, soHieuVB },
    });
    // console.log(data.data.data, 'tra cuu vb')
    const arr = data?.data?.data ?? [];
    if (arr.length === 0) {
      Modal.error({
        title: "Thông báo",
        content: "Thông tin nhập sai hoặc không tồn tại văn bằng",
        onOk() {},
      });
      setloading(false);
      setds([]);
      return;
    }
    setds(data?.data?.data ?? []);
    setloading(false);
  };

  const traCuuTheoId = async (id) => {
    setloading(true);
    const data = await axios.get(`${ip}/phu-luc-van-bang/tra-cuu/${id}`, {});
    // console.log('data', data);
    let tmp = data?.data?.data ?? [];

    if (typeof tmp === "object") tmp = [tmp];
    setds(tmp);
    setid(id);
    setloading(false);
  };
  const router = useRouter();

  useEffect(() => {
    // console.log('router.query', router.query);
    // traCuu('Syamphay Sataphone', '1992-08-04T17:00:00.000Z');
    const id = router.query?.id;
    if (id) traCuuTheoId(id);
    return () => {
      setid(false);
    };
  }, [router.query]);

  return (
    <Row>
      <Spin spinning={!!loading}>
        <SectionWrapper id="daotao">
          <Container>
            <Box style={{ padding: 0 }}>
              {/* <Row> */}
              <Col lg={24} style={{}}>
                <Box {...secTitleWrapper}>
                  <HeadingWrapper>
                    <Heading content="Tra cứu văn bằng - chứng chỉ " />
                    <TitleUnderWrapper />
                  </HeadingWrapper>
                </Box>
              </Col>
              {/* </Row> */}
            </Box>
            {/* <div> */}
            <FormTraCuu onSubmit={(values) => traCuu(values)} />
            {/* </div> */}
            <VanBangTable data={ds} id={id} />
          </Container>
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
