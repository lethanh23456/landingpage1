import React, { Fragment } from "react";
import { Modal } from "@redq/reuse-modal";
import "@redq/reuse-modal/es/index.css";
import Layout from "components/Layout/Layout";
import { DefaultSeo } from "next-seo";

export default ({ Component, pageProps }) => (
  <Layout>
    <Modal />
    <DefaultSeo
      title="Phòng Quản lý Đào tạo Trường Đại học Ngoại Thương 2020"
      description="Trang Web cung cấp thông tin về  Trường Đại học Ngoại thương"
      openGraph={{
        type: "website",
        locale: "vi_VN",
        url: "https://tuyensinhptit.aisenote.com/",
        site_name: "Phòng Quản lý Đào tạo Trường Đại học Ngoại Thương 2020",
        images: [
          {
            url: "http://www.ftu.edu.vn/images/stories/joomlart/logo.png",
            width: 800,
            height: 600,
            alt: "Banner",
          },
        ],
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
    <Component {...pageProps} />
  </Layout>
);
