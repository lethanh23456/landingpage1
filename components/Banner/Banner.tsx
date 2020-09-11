/* eslint-disable react/prefer-stateless-function */
import { Button, Row, Spin } from "antd";
import Box from "components/Box";
import { get } from 'libs/fetchData';
import _ from "lodash";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  BackgroundImg, BaCongKhaiWrapper,
  Description,
  Title
} from "./index.style.js";
import Goto from 'components/Goto';

const Banner = ({ }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [relate, setRelate] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    get(setRelate, setLoading, 'sotay/tintuc', {
      params: {
        page: 1,
        limit: 1,
        cond: {
          maLoaiTinTuc: "TUYỂN DỤNG",
        },
      },
    });
  }, []);
  return (
    <Box>
      <BaCongKhaiWrapper>
        <Spin spinning={loading}>
          <Row style={{ minHeight: 425 }}>
            {relate?.map((award, index) => (
              <div>
                <BackgroundImg />
                <div
                  style={{
                    position: "absolute",
                    textAlign: "justify",
                    left: "10%",
                    width: !isMobile ? "50%" : "80%",
                    top: "15%",
                  }}
                >
                  <Title style={{ color: "white", fontWeight: "bold" }}>
                    {_.get(award, "tieuDe", "")}
                  </Title>
                  <br />
                  <Description>{_.get(award, "moTa", "")}</Description>
                  <br />
                  <Link href="tintucchung#tuyendung">
                    <a href="tintucchung#tuyendung">
                      <Button
                        style={{
                          textAlign: "center",
                          backgroundColor: "#940D0F",
                          color: "white",
                          border: "none",
                        }}
                      >
                        TÌM HIỂU THÊM
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </Row>
        </Spin>
      </BaCongKhaiWrapper>
    </Box>
  );
};

export default Banner;
