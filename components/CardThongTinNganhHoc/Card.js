import { Col, Row } from 'antd';
import dauThang from 'assets/image/nganhhoc/#.png';
import diaDiemImg from 'assets/image/nganhhoc/diadiem.png';
import dongHoImg from 'assets/image/nganhhoc/dongho.png';
import LichImg from 'assets/image/nganhhoc/Lich.png';
import Lich2Img from 'assets/image/nganhhoc/Lich2.png';
import Container from 'components/UI/Container';
import moment from 'moment';
import React from 'react';
import { BgCard, Content, MaNganhHoc, Title } from './Card.style';

export default function Card({ namO }) {
  const { maNganh, thoiGianDaoTao, kyNhapHoc, hanNopHoSo, coSo } = namO;
  console.log(namO);
  return (
    <BgCard>
      <Container>
        <Row type="flex" justify="space-between" align="middle">
          <Col xs={24} lg={4}>
            <MaNganhHoc>
              <img src={dauThang} alt="" />
              <Title>Mã ngành học</Title>
              <Content>{maNganh}</Content>
            </MaNganhHoc>
          </Col>
          <Col xs={24} lg={4}>
            <MaNganhHoc>
              <img src={dongHoImg} alt="" />
              <Title>Thời gian</Title>
              <Content>{thoiGianDaoTao}</Content>
            </MaNganhHoc>
          </Col>
          <Col xs={24} lg={4}>
            <MaNganhHoc>
              <img src={LichImg} alt="" />
              <Title>Kỳ nhập học</Title>
              <Content>{kyNhapHoc}</Content>
            </MaNganhHoc>
          </Col>
          <Col xs={24} lg={4}>
            <MaNganhHoc>
              <img src={Lich2Img} alt="" />
              <Title>Hạn nộp hồ sơ</Title>
              <Content>{hanNopHoSo !== '' ? moment(hanNopHoSo).format('DD/MM/YYYY') : ''}</Content>
            </MaNganhHoc>
          </Col>
          <Col xs={24} lg={4}>
            <MaNganhHoc>
              <img src={diaDiemImg} alt="" />
              <Title>Cơ sở</Title>
              <Content>{coSo}</Content>
            </MaNganhHoc>
          </Col>
        </Row>
      </Container>
    </BgCard>
  );
}
