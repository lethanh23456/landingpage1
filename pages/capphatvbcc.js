// eslint-disable-next-line react/prefer-stateless-function
import { Col, Row } from 'antd';
import axios from 'axios';
import Box from 'components/Box';
import CardTinTuc from 'components/TinTucHocVien/components/CardTinTuc';
// import srcImg1 from './diemmoi.jpg';
import {
  TinTucHover,
  TinTucWrapper,
  TitleUnderWrapper,
} from 'components/TinTucHocVien/TinTuc.style';
import Container from 'components/UI/Container';
import { ip } from 'data/ip';
import _ from 'lodash';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

const TinTucVBCC = ({}) => {
  const [relate, setRelate] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line wrap-iife
    (async function wrapFunc() {
      const response = await axios.get(`${ip}/bai-viet`, {
        params: {
          page: 1,
          //   limit: 4,
          cond: {
            maLoaiBaiViet: 'DAO_TAO_TIN_TUC_CAP_PHAT_VBCC',
          },
        },
      });
      const data = _.get(response, 'data.data', []);
      setRelate(data);
    })();
    // return () => {
    //   cleanup
    // }
  }, []);
  return (
    <>
      <Box style={{ marginTop: 120 }}>
        <Container>
          <TinTucWrapper>
            {/* <Button onClick={() => test()}>AAAAA</Button> */}
            <p style={{ marginTop: '25' }}>TIN TỨC CẤP PHÁT VBCC</p>
            {/* <Row>
            <p>Tin tức lịch thi Tiếng Anh</p>
        </Row> */}
            <TitleUnderWrapper />
            <Row
              style={{ margin: '0px auto', width: '80%', marginTop: 40 }}
              gutter={[15, 15]}
            >
              {relate.map((item, index) => (
                <Col key={index} xl={8} lg={8} xs={24} sm={12} md={12}>
                  <TinTucHover>
                    <CardTinTuc
                      href={_.get(item, 'slug', '')}
                      title={_.get(item, 'tieuDe', '')}
                      img={_.get(item, 'anhDaiDien', '')}
                      src={_.get(item, 'nguoiDang.hoTen', '')}
                      time={
                        _.get(item, 'ngayDang', '') !== ''
                          ? moment(_.get(item, 'ngayDang', '')).format(
                            'DD/MM/YYYY, h:mm',
                          )
                          : ''
                      }
                    />
                  </TinTucHover>
                </Col>
              ))}
            </Row>
          </TinTucWrapper>
        </Container>
      </Box>
    </>
  );
};

export default TinTucVBCC;
