import { Col, Row } from "antd";
import Link from "next/link";
import React, { PureComponent } from "react";

class CardTinTuc extends PureComponent {
  render() {
    const {
      title,
      img,
      time,
      styles,
      src,
      play,
      href,
      type,
      moTa,
    } = this.props;
    console.log(this.props, "thong bao su kien");
    const ellipse = (text) => {
      let s = "";
      for (let i = 0; i < 50; i++) {
        s += text[i];
      }
      s += "...";
      return s;
    };
    return (
      <Link href="/tintuc/[pid]" as={"/tintuc/" + href}>
        <a>
          <Row style={{ width: "inherit", minHeight: 280, padding: 20 }}>
            <Col lg={8} xl={8}>
              <div
                style={{
                  //   width: "180px",
                  minHeight: 160,
                  background: `url('${img}') center center`,
                  backgroundSize: "contain",
                  backgroundRepeat: 'no-repeat',
                  border: "1px solid #ededed",
                }}
              />
            </Col>
            <Col
              lg={16}
              xl={16}
              style={{
                minHeight: 160,
                textAlign: "justify",
                padding: "20px 10px",
                backgroundColor: "white",
              }}
            >
              <p
                style={{
                  color: "#940D0F",
                  fontSize: 16,
                  marginBottom: 6,
                  fontWeight: "bold",
                }}
              >
                {type}
              </p>
              <p
                style={{
                  color: "#000000",
                  fontSize: 18,
                  marginBottom: 6,
                  fontWeight: "bold",
                }}
              >
                {title.length < 50 ? title : ellipse(title)}
              </p>
              <p>
                <i>
                  <span style={{ color: "#940D0F", fontSize: 15 }}>{src}</span>{" "}
                  -{" "}
                  <span style={{ color: "#940D0F", fontSize: 15 }}>{time}</span>
                </i>
              </p>
            </Col>
            <Col span={24} style={{ color: "#3D3D3F", fontSize: 16 }}>
              {moTa.length < 120 ? moTa : ellipse(moTa)}
            </Col>
          </Row>
        </a>
      </Link>
    );
  }
}

export default CardTinTuc;
