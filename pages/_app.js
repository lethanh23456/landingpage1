import React, { Fragment } from 'react';
import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import Layout from 'components/Layout/Layout';
import { DefaultSeo } from 'next-seo';

export default ({ Component, pageProps }) => (
  <Layout>
    <Modal />
    <DefaultSeo
      title="Phòng Đào tạo Học viện Công nghệ Bưu chính Viễn Thông 2020"
      description="Trang Web cung cấp thông tin về Học viện Công nghệ Bưu chính Viễn Thông"
      openGraph={{
        type: 'website',
        locale: 'vi_VN',
        url: 'https://tuyensinhptit.aisenote.com/',
        site_name: 'Phòng Đào tạo Học viện Công nghệ Bưu chính Viễn Thông 2020',
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
