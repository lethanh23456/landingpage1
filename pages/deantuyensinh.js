import { Breadcrumb, Card, Col, Divider, List, Row } from "antd";
import Box from "components/Box";
import { fetchAPI } from "components/lib/api";
import Container from "components/UI/Container";
import moment from "moment";
import Link from "next/link";
import React from "react";
import Sticky from "react-stickynode";
import { TitleLinkWrapper } from "styles/baiviet.style";

// moment().locale('vi');

const TinTuc = ({ dataDeAn, tenThuMuc }) => {
  console.log("dean", dataDeAn);
  console.log("mucluc", tenThuMuc);

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
      <Box style={{ marginTop: 0 }}>
        <Container>
          {/* <Button onClick={() => test()}>AAAAA</Button> */}
          <Row
            gutter={15}
            style={{
              width: "90%",
              margin: "0px auto",
              padding: "30px 0",
              fontFamily: "Roboto, sans-serif",
              //   scrollBehavior: "smooth",
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
                      <Link href="">Đề án tuyển sinh</Link>
                    </Breadcrumb.Item>
                  </Breadcrumb>
                  <Divider />
                </div>
                <h4 style={{ fontSize: "calc(1vw + 10px)", color: "#D10000" }}>
                  "Đề án tuyển sinh Học viện Công nghệ bưu chính viễn thông năm
                  2021"
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
                  {dataDeAn?.[0]?.updatedAt !== ""
                    ? moment(dataDeAn?.[0]?.updatedAt)
                        .lang("vi")
                        .format("DD MMMM YYYY, HH:MM ")
                    : ""}
                </p>
                {dataDeAn?.map((item) => (
                  <>
                    <div
                      id={item?.tenMucLuc?._id}
                      style={{ scrollMarginBlockStart: "220px" }}
                    >
                      <p
                        style={{
                          fontSize: "calc(0.8em + 0.4vw)",
                          fontWeight: "bold",
                        }}
                      >
                        {item?.tenMucLuc?.tenMucLuc}
                      </p>

                      <div
                        style={{
                          marginTop: 20,
                          textAlign: "justify",
                          fontSize: "calc(0.8em + 0.4vw)",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: item?.noiDung,
                        }}
                      />
                    </div>
                  </>
                ))}
              </div>
            </Col>
            <Col lg={7} xl={7} md={24} xs={24} sm={24}>
              <Sticky top={250} bottomBoundary="#content">
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
                      Mục lục
                    </p>
                  }
                  bordered={false}
                >
                  <List
                    dataSource={dataDeAn}
                    renderItem={(item) => (
                      //     <a href={`#${item?._id}`}>
                      <List.Item
                        key={item._id}
                        style={{ height: "100%", textAlign: "justify" }}
                        onClick={() => {
                          const itemScroll = document.getElementById(
                            item?.tenMucLuc?._id
                          );
                          itemScroll.scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                      >
                        <List.Item.Meta
                          title={
                            <TitleLinkWrapper style={{ textAlign: "justify" }}>
                              {item?.tenMucLuc?.tenMucLuc}
                            </TitleLinkWrapper>
                          }
                        />
                      </List.Item>
                      //     </a>
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
  const dataDeAn = await fetchAPI("/deans");
  const tenThuMuc = await fetchAPI("/muclucs");
  return {
    props: {
      dataDeAn,
      tenThuMuc,
    },
  };
}

export default TinTuc;
