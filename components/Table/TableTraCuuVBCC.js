import { Button, Empty, Table, Tooltip } from "antd";
import moment from "moment";
import React from "react";

const KetQuaVanBang = ({ thongTinTraCuu = [] }) => {
  const columns = [
    {
      title: "Số vào sổ",
      dataIndex: ["DuLieu", "soVaoSoBang"],
      key: "soVaoSoBang",
      width: 120,
    },
    {
      title: "Số hiệu văn bằng",
      dataIndex: ["DuLieu", "soHieuVanBang"],
      key: "soHieuVanBang",
      width: 150,
    },
    {
      title: "Họ tên",
      dataIndex: ["DuLieu", "hoTen"],
      key: "hoTen",
      width: 160,
    },
    {
      title: "Ngày sinh",
      key: "ngaySinh",
      align: "center",
      width: 100,
      render: (_, record) =>
        record?.DuLieu?.ngaySinh
          ? moment(record.DuLieu.ngaySinh).format("DD/MM/YYYY")
          : "",
    },
    {
      title: "Mã người học",
      dataIndex: ["DuLieu", "maSinhVien"],
      key: "maSinhVien",
      width: 120,
    },
    {
      title: "Thao tác",
      align: "center",
      render: (val, rec) => (
        <Tooltip
          title={!rec?.DuLieu?._id ? "Chưa có thông tin văn bằng" : "Chi tiết"}
        >
          <Button
            type="primary"
            shape="circle"
            icon="eye"
            href={`/vanbangchungchi/${rec.DuLieu._id}`}
            disabled={!rec?.DuLieu?._id}
          />
        </Tooltip>
      ),
      fixed: "right",
      width: 150,
    },
  ];

  if (thongTinTraCuu?.Error) {
    return (
      <div style={{ padding: 16, textAlign: "center" }}>
        <i style={{ color: "red" }}>Không tồn tại thông tin văn bằng!</i>
      </div>
    );
  }

  const dataSource = thongTinTraCuu?.map((item, index) => ({
    ...item,
    stt: index + 1,
    key: item?._id || index,
  }));

  return (
    <div style={{ padding: 12 }}>
      <Table
        columns={columns}
        dataSource={dataSource}
        locale={{
          emptyText: (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Trống" />
          ),
        }}
      />
    </div>
  );
};

export default KetQuaVanBang;
