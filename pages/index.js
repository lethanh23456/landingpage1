import "@glidejs/glide/dist/css/glide.core.min.css";
import axios from "axios";
import Banner from "components/Banner/Banner.tsx";
import Carousel from 'components/Carousel';
import TinTuc from "components/TinTuc";
import TinTucNgang from "components/TinTuc/TinTucNgang";
import { ip } from "data/ip";
import _ from "lodash";
import React from "react";
import "react-accessible-accordion/dist/fancy-example.css";

export default ({ data }) => {
  return (
    <div>
      <Carousel res={data} />
      <TinTuc
        title="TIN TỨC ĐÀO TẠO"
      // res={data}
      />
      <TinTucNgang
        title="THÔNG BÁO - SỰ KIỆN"
      //res={data}
      />
      <Banner />
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  let response = await axios.get(`${ip}/sliders/all`);
  const data = _.get(response, "data.data", {});

  // response = await axios.get(`${ip}/bai-viet/all`, {
  //   params: {
  //     page: 1,
  //     limit: 1,
  //     cond: {
  //       maLoaiBaiViet: "TIN_TUC_CHUNG",
  //     },
  //   },
  // });
  // const dataTintuc = _.get(response, "data.data", {});

  // response = await axios.get(`${ip}/he-dao-tao`, {
  //   params: {
  //     page: 1,
  //     limit: 1000,
  //     cond: {},
  //   },
  // });
  // const ctrDaotao = _.get(response, "data.data", {});

  // response = await axios.get(`${ip}/sotay/vanban`, {
  //   params: {
  //     page: 1,
  //     limit: 1000,
  //     cond: {},
  //   },
  // });
  // const ctrVBBM = _.get(response, "data.data", {});

  // response = await axios.get(`${ip}/can-bo`, {
  //   params: {
  //     page: 1,
  //     limit: 3,
  //     cond: {
  //       hienThi: "true",
  //     },
  //     sort: "thuTu",
  //     order: 1,
  //   },
  // });
  // const doingu = _.get(response, "data.data", {});

  // response = await axios.get(`${ip}/bai-viet`, {
  //   params: {
  //     page: 1,
  //     limit: 4,
  //     cond: {
  //       maLoaiBaiViet: "TIN_TUC_CHUNG",
  //     },
  //   },
  // });
  // const gocsinhvien = _.get(response, "data.data", {});

  // Pass data to the page via props
  return { props: { data } };
}
