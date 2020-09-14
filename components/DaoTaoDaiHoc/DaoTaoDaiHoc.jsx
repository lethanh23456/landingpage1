// eslint-disable-next-line react/prefer-stateless-function
import { Col, Row } from "antd";
import axios from "axios";
import Container from "components/UI/Container";
import _ from "lodash";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Box from "components/Box";
import { ip } from "data/ip";
import CardTinTuc from "./components/CardTinTuc";
// import srcImg1 from './diemmoi.jpg';
import {
  ContainerCardDN, ImageUnderWrapper, TinTucHover,
  TinTucWrapper,
  TitleUnderWrapper
} from "./TinTuc.style";

const TinTuc = ({ }) => {
  const [relate, setRelate] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line wrap-iife
    (async function wrapFunc() {
      const response = await axios.get(`${ip}/bai-viet`, {
        params: {
          page: 1,
          limit: 4,
          cond: {
            maLoaiBaiViet: "DAO_TAO_TIN_TUC_HOC_VIEN",
          },
        },
      });
      const data = _.get(response, "data.data", []);
      setRelate(data);
    })();
    // return () => {
    //   cleanup
    // }
  }, []);
  return (
    <>
      <Box>
        <TinTucWrapper>
          {/* <Button onClick={() => test()}>AAAAA</Button> */}
          <p>Đào tạo đại học</p>
          <TitleUnderWrapper>
            <ImageUnderWrapper />
          </TitleUnderWrapper>
          <Container>
            <Row
              style={{ margin: "0px auto", marginTop: 40 }}
              gutter={[15, 15]}
            >
              {relate.map((item, index) => (
                <Col key={index} xl={6} lg={6} xs={24} sm={12} md={12}>
                  <TinTucHover>
                    <ContainerCardDN>
                      <CardTinTuc
                        href={_.get(item, "slug", "")}
                        title={_.get(item, "tieuDe", "")}
                        img={_.get(item, "anhDaiDien", "")}
                        src={_.get(item, "nguoiDang.hoTen", "")}
                        time={
                          _.get(item, "ngayDang", "") !== ""
                            ? moment(_.get(item, "ngayDang", "")).format(
                              "DD/MM/YYYY, h:mm"
                            )
                            : ""
                        }
                      />
                    </ContainerCardDN>
                  </TinTucHover>
                </Col>
              ))}
            </Row>
          </Container>
        </TinTucWrapper>
        {/* <Carousel /> */}
        {/* </Container> */}
      </Box>
    </>
  );
};

export default TinTuc;
