import { Button, Descriptions, Modal, Table, Empty, Tag } from "antd";
import axios from "axios";
import { ip } from "data/ip";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
moment.locale("vi");

export default function VanBangTable(props) {
  const [show, setshow] = useState(false);
  const [record, setrecord] = useState({});
  const [recordXT, setrecordXT] = useState({});
  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "hoTen",
      align: "center",
      width: "150px",
      search: "search",
    },
    {
      title: "Ngày sinh",
      dataIndex: "ngaySinh",
      align: "center",
      width: "150px",
      search: "search",
      render: (val) => moment(val).format("DD/MM/YYYY"),
    },
    // {
    //   title: "Số thẻ cmt/cccd",
    //   dataIndex: "cmtCccd",
    //   align: "center",
    //   width: "150px",
    // },
    {
      title: "ĐTƯT",
      dataIndex: "doiTuongUuTienTuyenSinh",
      align: "center",
      width: "80px",
      search: "search",
      render: (val) => (val === "Không thuộc diện ưu tiên" ? "" : val),
    },
    {
      title: "KVƯT",
      dataIndex: "khuVucUuTien",
      align: "center",
      width: "80px",
      search: "search",
    },
    {
      title: "Điểm KQXT",
      dataIndex: "diemXetTuyen",
      align: "center",
      width: "80px",
    },
    {
      title: "Tổ hợp",
      dataIndex: "toHop",
      align: "center",
      width: "80px",
    },
    {
      title: "Kết quả xét tuyển",
      dataIndex: "ketQuaXetTuyen",
      align: "center",
      width: "200px",
    },
    {
      title: "Cơ sở đào tạo",
      dataIndex: "coSoDaoTao",
      align: "center",
      width: "80px",
      // render: (val) => (val ? <Tag color="red">{val}</Tag> : "CMT KHL"),
      // search: "sort",
    },
    {
      title: "Thứ tự nguyện vọng",
      dataIndex: "thuTuNguyenVong",
      align: "center",
      width: "80px",
    },
    {
      title: "Mã ngành",
      dataIndex: "maNganh",
      align: "center",
      width: "150px",
      // render: (val) => (val ? <p>{val}</p> : "CMT KHL"),
    },
    {
      title: "Ngành",
      dataIndex: "nganh",
      align: "center",
      width: "200px",
    },
  ];

  const columnsNhapHoc = [
    {
      title: "Họ và tên",
      dataIndex: "hoTen",
      align: "center",
      width: "150px",
      search: "search",
    },
    {
      title: "Ngày sinh",
      dataIndex: "ngaySinh",
      align: "center",
      width: "150px",
      search: "search",
      render: (val) => moment(val).format("DD/MM/YYYY"),
    },
    {
      title: "ĐTƯT",
      dataIndex: "doiTuongUuTienTuyenSinh",
      align: "center",
      width: "80px",
      search: "search",
      render: (val) => (val === "Không thuộc diện ưu tiên" ? "" : val),
    },
    {
      title: "KVƯT",
      dataIndex: "khuVucUuTien",
      align: "center",
      width: "80px",
      search: "search",
    },
    {
      title: "Điểm xét tuyển",
      dataIndex: "diemXetTuyen",
      align: "center",
      width: "80px",
    },
    {
      title: "Cơ sở đào tạo",
      dataIndex: "coSoDaoTao",
      align: "center",
      width: "80px",
    },
    {
      title: "Thứ tự nguyện vọng",
      dataIndex: "thuTuNguyenVong",
      align: "center",
      width: "80px",
    },
    {
      title: "Tổ hợp",
      dataIndex: "toHop",
      align: "center",
      width: "80px",
    },

    {
      title: "Mã ngành",
      dataIndex: "maNganh",
      align: "center",
      width: "150px",
      // render: (val) => (val ? <p>{val}</p> : "CMT KHL"),
    },
    {
      title: "Ngành",
      dataIndex: "nganh",
      align: "center",
      width: "200px",
    },
    {
      title: "Trạng thái",
      dataIndex: "trangThai",
      align: "center",
      width: "200px",
    },
    {
      title: "Trạng thái nhập học",
      dataIndex: "trangThaiNhapHoc",
      align: "center",
      width: "200px",
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
  const isMobile = useMediaQuery({ maxWidth: 767 });
  //   const recordXT = props?.data ?? [];

  return (
    <div>
      {isMobile && (
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
          <Descriptions.Item label="Họ tên">
            {props?.data?.[0]?.hoTen}
          </Descriptions.Item>
          <Descriptions.Item label="Ngày sinh">
            {props?.data?.[0]?.ngaySinh
              ? moment(props?.data?.[0]?.ngaySinh).format("DD/MM/YYYY")
              : ""}
          </Descriptions.Item>
          <Descriptions.Item label="Đối tượng ưu tiên">
            {props?.data?.[0]?.doiTuongUuTienTuyenSinh ===
            "Không thuộc diện ưu tiên"
              ? ""
              : props?.data?.[0]?.doiTuongUuTienTuyenSinh}
          </Descriptions.Item>
          <Descriptions.Item label="Khu vự ưu tiên">
            {props?.data?.[0]?.khuVucUuTien}
          </Descriptions.Item>
          <Descriptions.Item label="Điểm xét tuyển">
            {props?.data?.[0]?.diemXetTuyen}
          </Descriptions.Item>
          {props.type !== "nhaphoc" && (
            <Descriptions.Item label="Kết quả xét tuyển">
              {props?.data?.[0]?.ketQuaXetTuyen}
            </Descriptions.Item>
          )}

          <Descriptions.Item label="Cơ sở đào tạo">
            {props?.data?.[0]?.coSoDaoTao}
          </Descriptions.Item>
          <Descriptions.Item label="Thứ tự nguyện vọng">
            {props?.data?.[0]?.thuTuNguyenVong}
          </Descriptions.Item>
          <Descriptions.Item label="Tổ hợp">
            {props?.data?.[0]?.toHop}
          </Descriptions.Item>
          <Descriptions.Item label="Ngành">
            {props?.data?.[0]?.nganh}
          </Descriptions.Item>
          <Descriptions.Item label="Mã ngành">
            {props?.data?.[0]?.maNganh}
          </Descriptions.Item>
          {props.type === "nhaphoc" && (
            <>
              <Descriptions.Item label="Trạng thái">
                {props?.data?.[0]?.trangThai}
              </Descriptions.Item>
              <Descriptions.Item label="Trạng thái nhập học">
                {props?.data?.[0]?.trangThaiNhapHoc}
              </Descriptions.Item>
            </>
          )}
        </Descriptions>
      )}
      {!isMobile && (
        <Table
          dataSource={props?.data ?? []}
          columns={props?.type === "nhaphoc" ? columnsNhapHoc : columns}
          scroll={{ x: 1500 }}
          destroyOnClose
          locale={{
            emptyText: (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Trống" />
            ),
          }}
        />
      )}
    </div>
  );
}
