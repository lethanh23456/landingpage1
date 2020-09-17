import "@glidejs/glide/dist/css/glide.core.min.css";
import axios from "axios";
import Carousel from "components/Carousel";
import DoiNgu from "components/DoiNguCanBo/DoiNgu";
import GocSinhVien from "components/GocSinhVien/GocSinhVien";
import LichThiTiengAnhDauRa from "components/LichThiTiengAnhDauRa/LichThi.tsx";
import MenuBanner from "components/MenuBanner/MenuBanner";
import CacNganhDaoTao from "components/UpdateScreen";
import AwardsSection from "components/TinTucHocVien/Awards/index";
import { ip } from "data/ip";
import _ from "lodash";
import React from "react";
import "react-accessible-accordion/dist/fancy-example.css";

export default ({
  data,
  dataTintuc,
  ctrDaotao,
  doingu,
  gocsinhvien,
  dataBlock,
  dataBlockTinTuc,
}) => {
  console.log(dataBlock, "trang chu relate");
  // ;
  const renderModules = (modules) => {
    switch (modules.loaiComponent) {
      case "CAROUSEL":
        return (
          <div style={{ position: "relative" }}>
            <Carousel res={data} />
          </div>
        );
      case "CHUONG_TRINH_DAO_TAO":
        return (
          <div style={{ position: "relative" }}>
            <CacNganhDaoTao data={ctrDaotao} />
          </div>
        );
      case "LICH_THI_TIENG_ANH":
        return (
          <div style={{ position: "relative" }}>
            <LichThiTiengAnhDauRa />
          </div>
        );
      case "DOI_NGU":
        return (
          <div style={{ position: "relative" }}>
            <DoiNgu data={doingu} />
          </div>
        );
      case "TIN_TUC":
        return (
          <div style={{ position: "relative" }}>
            <AwardsSection data={modules} />
            {/* <AwardsSection data={dataBlockTinTuc} /> */}
          </div>
        );
    }
  };
  const modules = (
    <div style={{ marginTop: 110 }}>
      {dataBlock.map((modules) => renderModules(modules))}
    </div>
  );
  console.log(dataBlock, 'data block trang chu');
  return (
    modules
  );
};

export async function getServerSideProps() {
  // Fetch data from external API

  let block = await axios.get(`${ip}/block`, {
    params: {
      page: 1,
      limit: 1000,
      cond: {
        hienThi: "show",
        // loaiComponent: "TIN_TUC",
      },
      sort: "thuTu",
      order: 1,
    },
  });
  const dataBlock = _.get(block, "data.data", {});

  let blockTinTuc = await axios.get(`${ip}/block`, {
    params: {
      page: 1,
      limit: 1000,
      cond: {
        hienThi: "show",
        loaiComponent: "TIN_TUC",
      },
      sort: "thuTu",
      order: 1,
    },
  });
  const dataBlockTinTuc = _.get(blockTinTuc, "data.data", {});

  let response = await axios.get(`${ip}/sliders/all`, {
    params: {
      cond: {
        site: "DAO_TAO",
      },
    },
  });
  const data = _.get(response, "data.data", {});

  response = await axios.get(`${ip}/bai-viet`, {
    params: {
      page: 1,
      limit: 8,
      cond: {
        maLoaiBaiViet: "DAO_TAO_TIN_TUC_HOC_VIEN",
      },
    },
  });
  const dataTintuc = _.get(response, "data.data", {});

  response = await axios.get(`${ip}/he-dao-tao`, {
    params: {
      page: 1,
      limit: 10,
      cond: {},
    },
  });
  const ctrDaotao = _.get(response, "data.data", {});

  response = await axios.get(`${ip}/can-bo`, {
    params: {
      page: 1,
      limit: 3,
      cond: {
        hienThi: "true",
      },
      sort: "thuTu",
      order: 1,
    },
  });
  const doingu = _.get(response, "data.data", {});

  response = await axios.get(`${ip}/bai-viet`, {
    params: {
      page: 1,
      limit: 4,
      cond: {
        maLoaiBaiViet: "DAO_TAO_TIN_TUC_GOC_SINH_VIEN",
      },
    },
  });
  const gocsinhvien = _.get(response, "data.data", {});

  // Pass data to the page via props
  return {
    props: {
      data,
      dataTintuc,
      ctrDaotao,
      doingu,
      gocsinhvien,
      dataBlock,
      dataBlockTinTuc,
    },
  };
}
