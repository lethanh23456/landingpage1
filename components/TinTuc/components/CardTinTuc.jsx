import Link from "next/link";
import React, { PureComponent } from "react";

class CardTinTuc extends PureComponent {
  render() {
    const { title, img, time, styles, src, play, href } = this.props;
    const ellipse = (text) => {
      let s = "";
      for (let i = 0; i < 55; i++) {
        s += text[i];
      }
      s += "...";
      return s;
    };
    return (
      <Link href="/tintuc/[pid]" as={"/tintuc/" + href}>
        <a>
          <div
            style={{
              ...styles,
              backgroundColor: "white",
              borderRadius: "20px",
              borderColor: "grey",
              minHeight: 300,
              padding: 10,
            }}
          >
            <div
              style={{
                borderRadius: 20,
                borderBlockColor: "grey",
                width: "100%",
                minHeight: '200px',
                cursor: "pointer",
                backgroundImage: `url('${img}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "container",
                backgroundPosition: "center center",
              }}
            />
            <div
              style={{
                width: "inherit",
                height: "100px",
                textAlign: "left",
                padding: 20,
                backgroundColor: "white",
                borderRadius: "0 0 20px 20px",
              }}
            >
              <h6
                style={{
                  fontSize: 16,
                  color: "black",
                  overflow: "hidden",
                  fontWeight: 400,
                }}
              >
                {title.length < 55 ? title : ellipse(title)}
              </h6>
            </div>
            <div>
              <p
                style={{
                  fontSize: 14,
                  color: "#940D0F",
                  padding: "10px 20px",
                  margin: 0,
                }}
              >
                <i>
                  {src}-{time}
                </i>
              </p>
            </div>
          </div>
        </a>
      </Link >
    );
  }
}

export default CardTinTuc;
