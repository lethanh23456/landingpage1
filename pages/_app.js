import React, { Fragment } from 'react';
import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import 'antd/dist/antd.css';
import Layout from 'components/Layout/Layout';
import { DefaultSeo } from 'next-seo';

export default ({ Component, pageProps }) => (
  <Layout>
    <Modal />
    <DefaultSeo
      title="HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG CỔNG THÔNG TIN ĐÀO TẠO"
      description="Trang Web cung cấp thông tin về Học viện Công nghệ Bưu chính Viễn Thông"
      openGraph={{
        type: 'website',
        locale: 'vi_VN',
        url: 'https://tuyensinhptit.aisenote.com/',
        site_name: 'HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG CỔNG THÔNG TIN ĐÀO TẠO',
        images: [
          {
            url: 'https://portal.ptit.edu.vn/wp-content/uploads/2019/01/1-10.jpg',
            width: 800,
            height: 600,
            alt: 'Banner',
          },
        ],
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
    <Component {...pageProps} />
  </Layout>
);
