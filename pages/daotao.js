/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
// import { navigate } from "@reach/router";
import axios from "axios";
import { ip } from "data/ip";
import TinTucChungComponent from "components/TinTucChung";
import _ from "lodash";
import React from "react";


const TinTucVBCC = ({ loaiTinTuc }) => {
  return (
    <TinTucChungComponent loaiTinTuc={loaiTinTuc} />
  )
};

export default TinTucVBCC;

export async function getServerSideProps() {
  // Fetch data from external API
  let response = await axios.get(`${ip}/sotay/loaitintuc`);
  const loaiTinTuc = _.get(response, "data.data", {});
  return { props: { loaiTinTuc } };
}
