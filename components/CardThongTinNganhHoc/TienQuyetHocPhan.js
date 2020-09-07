import { Col, Row } from 'antd';
import React from 'react';
import Container from '../UI/Container';
import {
  CardContentGiaiThich, CardGiaiThich,



  InsideTitle, ShapeNhanBiet,

  TextShapeNhanBiet,
  TextTuChon, TitleGiaiThich
} from './TienQuyetHocPhan.style';


export default function TienQuyetHocPhan({ hocPhanTuChon }) {
  console.log(hocPhanTuChon, 'hocPhanTuChon')
  return (
    <Container>
      {/* <div style={{ margin: 12 }}>
        <TitleTienQuyet>Tiên quyết học phần </TitleTienQuyet>
        <img src={editImg} alt="" />
      </div>
      <WrapperTienQuyet>
        <Row type="flex" justify="space-around" align="middle" gutter={[4, 12]}>
          <Col>
            <TextHocPhan>
              <div>NNLCB CN Mác-Lênin 1</div>
              <div> (2TC)</div>
            </TextHocPhan>
          </Col>
          <Col>
            <img src={arrowImg} alt="" />
          </Col>
          <Col>
            <TextHocPhan>
              <div>NNLCB CN Mác-Lênin 1</div>
              <div> (2TC)</div>
            </TextHocPhan>
          </Col>
          <Col>
            <img src={arrowImg} alt="" />
          </Col>
          <Col>
            <TextHocPhan>
              <div>NNLCB CN Mác-Lênin 1</div>
              <div> (2TC)</div>
            </TextHocPhan>
          </Col>
          <Col>
            <img src={arrowImg} alt="" />
          </Col>
          <Col>
            <TextHocPhan>
              <div>NNLCB CN Mác-Lênin 1</div>
              <div> (2TC)</div>
            </TextHocPhan>
          </Col>
        </Row>
      </WrapperTienQuyet> */}

      <Row
        gutter={4}
        type="flex"
        justify="space-around"
        align="middle"
        style={{
          alignItems: 'stretch',
        }}
      >
        <Col xs={24} lg={12}>
          <CardGiaiThich>
            <TitleGiaiThich>Chú giải</TitleGiaiThich>
            <CardContentGiaiThich>
              <Row gutter={[8, 12]}>
                <Col xs={24} lg={12} style={{ textAlign: 'center' }}>
                  <ShapeNhanBiet type="Bắt buộc chung" />
                  <TextShapeNhanBiet>
                    <InsideTitle> Bắt buộc chung</InsideTitle>
                  </TextShapeNhanBiet>
                </Col>

                <Col xs={24} lg={12} style={{ textAlign: 'center' }}>
                  <ShapeNhanBiet type="Bắt buộc chung nhóm ngành" />
                  <TextShapeNhanBiet>
                    <InsideTitle>Bắt buộc chung nhóm ngành</InsideTitle>
                  </TextShapeNhanBiet>
                </Col>

                <Col xs={24} lg={12} style={{ textAlign: 'center' }}>
                  <ShapeNhanBiet type="Bổ trợ ngành" />
                  <TextShapeNhanBiet>
                    <InsideTitle>Bổ trợ ngành</InsideTitle>
                  </TextShapeNhanBiet>
                </Col>

                <Col xs={24} lg={12} style={{ textAlign: 'center' }}>
                  <ShapeNhanBiet type="Cơ sở ngành" />
                  <TextShapeNhanBiet>
                    <InsideTitle>Cơ sở ngành</InsideTitle>
                  </TextShapeNhanBiet>
                </Col>

                <Col xs={24} lg={12} style={{ textAlign: 'center' }}>
                  <ShapeNhanBiet type="Chuyên ngành" />
                  <TextShapeNhanBiet>
                    <InsideTitle>Chuyên ngành</InsideTitle>
                  </TextShapeNhanBiet>
                </Col>

                <Col xs={24} lg={12} style={{ textAlign: 'center' }}>
                  <ShapeNhanBiet type="Thực tập" />
                  <TextShapeNhanBiet>
                    <InsideTitle>Thực tập</InsideTitle>
                  </TextShapeNhanBiet>
                </Col>
              </Row>
            </CardContentGiaiThich>
          </CardGiaiThich>
        </Col>

        <Col xs={24} lg={12}>
          <CardGiaiThich>
            <TitleGiaiThich>Các học phần tự chọn</TitleGiaiThich>
            <CardContentGiaiThich>
              {hocPhanTuChon.map((item, index) => (
                <TextTuChon>{index + 1}. {item.tenMonHoc} ({item.soTinChi}TC) </TextTuChon>
              ))}
              {/* 
              <TextTuChon>2. Kỹ thuật theo dõi, giám sát an toàn mạng (2TC) </TextTuChon>

              <TextTuChon>3. Phát triển phần mềm an toàn (2TC) </TextTuChon>

              <TextTuChon>4. Khoa học pháp lý số (2TC) </TextTuChon>

              <TextTuChon>5. Các kỹ thuật giấu tin (2TC) </TextTuChon> */}
            </CardContentGiaiThich>
          </CardGiaiThich>
        </Col>
      </Row>
    </Container >
  );
}
