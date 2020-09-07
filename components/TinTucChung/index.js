import { Typography } from "antd";
import TinTucChung from 'components/TinTucChung/TinTucChung';
import React from "react";

const TinTuc = ({ loaiTinTuc }) => {

  return (
    <TinTucChung loaiTinTuc={loaiTinTuc} />
  );
};

export default TinTuc;
