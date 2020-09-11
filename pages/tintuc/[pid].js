import {
  Avatar,
  Breadcrumb, Card,
  Col,
  Divider, List,
  Row
} from "antd";
import axios from "axios";
import Container from "components/UI/Container";
import { ip } from "data/ip";
import _ from "lodash";
import moment from "moment";
import { NextSeo } from "next-seo";
import Link from "next/link";
import React, { useEffect } from "react";
import Sticky from "react-stickynode";
import Box from "components/Box";
import { TitleLinkWrapper } from "../../styles/baiviet.style";

const TinTuc = ({ data, relate }) => {
  useEffect(() => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });

  const ngayDang = _.get(data, "ngayDang", "");
  const tieuDe = _.get(data, "tieuDe", "");
  const moTa = _.get(data, "moTa", "");
  const noiDung = _.get(data, "noiDung", "");
  const nguoiDang = _.get(data, "nguoiDang.hoTen", "");
  const anhDaiDien = _.get(data, "anhDaiDien", "");
  const maLoaiTinTuc = _.get(data, "maLoaiTinTuc", "");
  const slug = _.get(data, "slug", "");
  const renderTitle = (title) => {
    if (title <= 105) {
      return title;
    }
    let s = "";
    const len = title.length >= 105 ? 105 : title.length;
    for (let i = 0; i < len; i++) {
      s += title[i];
    }
    if (title.length > 105) {
      s += "...";
    }
    return s;
  };
  return (
    <>
      <NextSeo
        title={tieuDe}
        description={moTa}
        canonical="https://ftudev.aisenote.com/"
        openGraph={{
          url: `https://ftudev.aisenote.com/tintuc/${slug}`,
          title: tieuDe,
          description: moTa,
          images: [
            {
              url: anhDaiDien,
              width: 800,
              height: 600,
              alt: "Tin tức",
            },
          ],
          site_name: "Phòng Quản lý Đào tạo Trường Đại học Ngoại Thương",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Box style={{ marginTop: 120 }}>
        <Container>
          {/* <Button onClick={() => test()}>AAAAA</Button> */}
          <Row
            gutter={15}
            style={{
              width: "90%",
              margin: "0px auto",
              padding: "30px 0",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            <Col lg={17} xl={17} md={24} xs={24} sm={24}>
              <div id="content">
                <div>
                  <Breadcrumb>
                    <Breadcrumb.Item>
                      <Link href="/">Trang chủ</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <Link href="/tintucchung">Tin tức</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      {maLoaiTinTuc}
                    </Breadcrumb.Item>
                  </Breadcrumb>
                  <Divider />
                </div>
                <h4 style={{ fontSize: "24px", color: "#D10000" }}>
                  {tieuDe !== "" ? tieuDe : null}
                </h4>
                <p
                  style={{
                    color: "#727b88",
                    fontSize: "14px",
                    marginBottom: "12px",
                    marginTop: "-10px",
                    textTransform: "capitalize",
                  }}
                >
                  {ngayDang !== ""
                    ? moment(ngayDang)
                      .lang("vi")
                      .format("DD MMMM YYYY, HH:MM ")
                    : ""}
                </p>
                {moTa !== "" ? (
                  <p style={{ fontSize: "18px", fontWeight: "bold" }}>{moTa}</p>
                ) : null}
                <div
                  style={{
                    marginTop: 20,
                    textAlign: "justify",
                    fontSize: "calc(0.8em + 0.4vw)",
                  }}
                  dangerouslySetInnerHTML={{ __html: noiDung }}
                />
                {nguoiDang !== "" ? (
                  <p
                    style={{
                      color: "##940D0F",
                      textAlign: "right",
                      fontWeight: "bold",
                    }}
                  >
                    {nguoiDang}
                  </p>
                ) : null}
              </div>
            </Col>
            <Col lg={7} xl={7} md={24} xs={24} sm={24}>
              <Sticky top={130} bottomBoundary="#content">
                <Card
                  title={
                    <p
                      style={{
                        color: "#D10000",
                        margin: 0,
                        fontSize: 22,
                        fontWeight: "bold",
                      }}
                    >
                      Liên quan
                    </p>
                  }
                  bordered={false}
                >
                  <List
                    dataSource={relate}
                    renderItem={(item) => (
                      <List.Item
                        key={item._id}
                        style={{ height: "100%", textAlign: "justify" }}
                      >
                        <List.Item.Meta
                          avatar={
                            <Avatar src={_.get(item, "anhDaiDien", "")} />
                          }
                          title={
                            <TitleLinkWrapper
                              href={`/tintuc/${_.get(item, "slug", "")}`}
                              style={{ textAlign: "justify" }}
                            >
                              {renderTitle(_.get(item, "tieuDe", ""))}
                            </TitleLinkWrapper>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </Card>
              </Sticky>
            </Col>
          </Row>
        </Container>
      </Box>
    </>
  );
};

export async function getServerSideProps({ params }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // chi tiết bài viết
  // params có trường pid (giống với tên file [pid] được 
  // get theo id truyền vào)
  let response = await axios.get(`${ip}/sotay/tintuc/${params.pid}`);
  // console.log(response, 'tin tuc bai viet');
  const data = _.get(response, "data.data", {});
  const maLoaiTinTuc = _.get(data, "maLoaiTinTuc", "");
  // relate
  response = await axios.get(`${ip}/sotay/tintuc`, {
    params: {
      page: 1,
      limit: 4,
      cond: {
        maLoaiTinTuc
      },
    },
  });
  const relate = _.get(response, "data.data", []);
  // By returning { props: data }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
      relate,
    },
  };
}

export default TinTuc;
