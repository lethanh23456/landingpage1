import { Button, Descriptions, Modal, Table } from "antd";
import axios from "axios";
import { ip } from "data/ip";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
moment.locale("vi");

export default function VanBangTable(props) {
  const [show, setshow] = useState(false);
  const [record, setrecord] = useState({});
  const handleView = async (record) => {
    // setshow(true);
    console.log(record);
    let arr = [];
    arr.push(record._id);
    const response = await axios.post(
      `${ip}/phu-luc-van-bang/exports-by-list-id-unauth`,
      arr
    );
    console.log(response, "exportSingle");
    window.open(response?.data?.data?.url ?? "");
  };

  const renderLast = (value, record) => (
    <>
      <Button
        type="primary"
        shape="circle"
        icon="eye"
        onClick={() => {
          // setshow(true);
          // setrecord(record);
          handleView(record);
        }}
        title="Chi tiết"
      />
    </>
  );
  const columns = [
    {
      title: "Mã SV",
      dataIndex: "maSv",
      key: "maSv",
      width: 150,
    },
    {
      title: "Họ đệm",
      dataIndex: "hoDem",
      key: "hoDem",
      width: 150,
    },
    {
      title: "Tên",
      dataIndex: "ten",
      key: "ten",
      width: 120,
    },
    {
      title: "Ngày sinh",
      dataIndex: "ngaySinh",
      key: "ngaySinh",
      render: (val) => moment(new Date(val)).format("DD/MM/YYYY"),
      width: 150,
    },
    {
      title: "Giới tính",
      dataIndex: "gioiTinh",
      key: "gioiTinh",
      width: 70,
      render: (val) => (val === 0 ? "Nam" : "Nữ"),
    },
    {
      title: "Lớp",
      dataIndex: "lop",
      key: "lop",
      width: 100,
    },
    {
      title: "Trình độ đào tạo",
      dataIndex: "trinhDoDT",
      key: "trinhDoDT",
      width: 100,
    },
    {
      title: "Hình thức đào tạo",
      dataIndex: "hinhThucDT",
      key: "hinhThucDT",
      width: 200,
    },
    {
      title: "Ngành",
      dataIndex: "nganh",
      key: "nganh",
      width: 200,
    },
    {
      title: "Niên khóa",
      dataIndex: "nienKhoa",
      key: "nienKhoa",
    },
    {
      title: "Thao tác",
      align: "center",
      render: (value, record) => renderLast(value, record),
      fixed: "right",
      width: 150,
    },
  ];

  useEffect(() => {
    if (props?.id) {
      console.log("props", props);
      console.log("props?.data?.[0]", props?.data?.[0]);
      setrecord(props?.data?.[0] ?? {});
      setshow(true);
    }
    return () => {
      setrecord({});
      setshow(false);
    };
  }, [props.id]);

  const onCloseModal = () => setshow(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const ngayNhap = record?.ngayNhapHoc ?? "";
  return (
    <div>
      <Table
        dataSource={props?.data ?? []}
        columns={columns}
        scroll={{ x: 1500 }}
        destroyOnClose
      />
      <Modal
        title="Thông tin chi tiết"
        visible={show}
        onOk={onCloseModal}
        onCancel={onCloseModal}
        cancelText="Đóng"
        {...(!isTabletOrMobile ? { width: "80%" } : {})}
        centered
        zIndex={1000}
      >
        <div style={{ maxHeight: "80vh", overflow: "auto" }}>
          {" "}
          <Descriptions
            bordered
            column={{
              xxl: 3,
              xl: 3,
              lg: 3,
              md: 3,
              sm: 2,
              xs: 1,
            }}
          >
            <Descriptions.Item label="Mã SV">{record?.maSv}</Descriptions.Item>
            <Descriptions.Item label="Họ tên">
              {record?.hoTen}
            </Descriptions.Item>
            <Descriptions.Item label="Ngày sinh">
              {moment(new Date(record?.ngaySinh)).format("DD/MM/YYYY")}
            </Descriptions.Item>
            <Descriptions.Item label="Giới tính">
              {record?.gioiTinh === 0 ? "Nam" : "Nữ"}
            </Descriptions.Item>
            <Descriptions.Item label="Nơi sinh">
              {record?.noiSinh}
            </Descriptions.Item>
            <Descriptions.Item label="Lớp">{record?.lop}</Descriptions.Item>
            <Descriptions.Item label="Hồ sơ" span={24}>
              Trình độ: {record?.trinhDoDT}
              <br />
              Hình thức đào tạo: {record?.hinhThucDT}
              <br />
              Ngành: {record?.nganh}
              <br />
              Chuyên ngành: {record?.chuyenNganh}
              <br />
              Niên khóa: {record?.nienKhoa ?? ""}
              <br />
              Thời gian đào tạo: {record?.thoiGianDT ?? ""}
              <br />
              Ngày nhập học:{" "}
              {ngayNhap !== "" &&
                moment(record?.ngayNhapHoc ?? "").format("DD/MM/YYYY")}
              <br />
              Đợt tốt nghiệp: {record?.dotTN?.tenDot ?? ""}
              <br />
              Xếp loại: {record?.xepLoai ?? ""}
              <br />
              Quyết định tốt nghiệp: {record?.quyetDinhTN ?? ""}
              <br />
              {/* Số vào sổ: {record?.soVaoSo ?? ''}
              <br /> */}
              Số hiệu VB: {record?.soHieuVB ?? ""}
              <br />
              Thời gian đào tạo: {record?.thoiGianDT ?? ""}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </Modal>
    </div>
  );
}
