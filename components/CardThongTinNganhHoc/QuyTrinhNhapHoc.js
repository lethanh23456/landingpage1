import { Button, Col, Row } from 'antd';
import checklistImg from 'assets/image/Checklist.png';
import findImg from 'assets/image/find.png';
import searchImg from 'assets/image/Search.png';
import submitImg from 'assets/image/Submit.png';
import React from 'react';
import Container from '../UI/Container';
import { GoTo, TitleHTML, WrapperCard } from './CardHTML.style';
import { CardQuyTrinh, TitleQuyTrinh } from './QuyTrinhNhapHoc.style';


export default function QuyTrinhNhapHoc() {
  const tuyenSinh = () => {
    window.open('https://tuyensinh.ftu.edu.vn/');
  };
  return (
    <WrapperCard type="grey" style={{ marginBottom: '32px' }}>
      <GoTo id="quytrinhnhaphoc" />

      <Container>
        <TitleHTML>Quy trình nhập học</TitleHTML>
        <Row type="flex" justify="space-around" align="middle">
          <Col xs={24} lg={6}>
            <CardQuyTrinh>
              <img alt="" src={searchImg} />
              <TitleQuyTrinh>1. Chọn chương trình</TitleQuyTrinh>
            </CardQuyTrinh>
          </Col>
          <Col xs={24} lg={6}>
            <CardQuyTrinh>
              <img alt="" src={checklistImg} />
              <TitleQuyTrinh>2. Kiểm tra điều kiện tuyển sinh</TitleQuyTrinh>
            </CardQuyTrinh>
          </Col>
          <Col xs={24} lg={6}>
            <CardQuyTrinh>
              <img alt="" src={findImg} />
              <TitleQuyTrinh>3. Chuẩn bị hồ sơ</TitleQuyTrinh>
            </CardQuyTrinh>
          </Col>
          <Col xs={24} lg={6}>
            <CardQuyTrinh>
              <img alt="" src={submitImg} />
              <TitleQuyTrinh>4. Nộp hồ sơ</TitleQuyTrinh>
            </CardQuyTrinh>
          </Col>
        </Row>
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Button size="large" type="danger" onClick={tuyenSinh}>
            Xem chi tiết tại đây
          </Button>
        </div>
      </Container>
    </WrapperCard>
  );
}
