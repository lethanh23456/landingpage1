import {
  Button,
  Col,
  Descriptions,
  Divider,
  Empty,
  Modal,
  Row,
  Spin,
  Table,
  Tooltip,
} from "antd";
import success from "assets/image/success.svg";
import axios from "axios";
import { ipPTIT } from "data/ip";
import moment from "moment";
import React, { useState } from "react";
import "./style.less";

const renderField = (item) => {
  if (item.type === "Date") {
    return item.value ? moment(item.value).format("DD/MM/YYYY") : "---";
  }
  if (item.type === "Number") {
    return item.value ?? "---";
  }
  if (typeof item.value === "object") {
    return JSON.stringify(item.value);
  }
  return item.value || "---";
};

const KetQuaVanBang = ({ thongTinTraCuu = [] }) => {
  const [show, setShow] = useState(false);
  const onCloseModal = () => setShow(false);
  const [record, setRecord] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchChiTiet = async (id) => {
    if (!id) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `${ipPTIT}vbcc/phu-luc-van-bang/public/chi-tiet-phu-luc/${id}`
      );
      setRecord(res?.data?.data || {});
      setShow(true);
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu:", error);
      setRecord({});
      setShow(true);
    } finally {
      setLoading(false);
    }
  };

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
            onClick={() => fetchChiTiet(rec?.DuLieu?._id)}
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

      <Modal
        width={1000}
        title="Thông tin chi tiết"
        visible={show}
        onOk={onCloseModal}
        onCancel={onCloseModal}
        cancelText="Đóng"
        centered
        zIndex={1000}
      >
        <Spin spinning={loading}>
          <div style={{ textAlign: "center", fontSize: 22, marginBottom: 36 }}>
            <b>Chi tiết thông tin văn bằng</b>
          </div>

          {record?._id ? (
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <div className="vbcc-verified">
                  <img src={success} alt="" width={32} height={32} />
                  <span>Thông tin đã được xác thực!</span>
                </div>
              </Col>

              <Col span={24}>
                <Divider orientation="left">Thông tin văn bằng</Divider>
                <Descriptions
                  column={{ xs: 1, sm: 1, md: 2 }}
                  bordered
                  size="small"
                >
                  <Descriptions.Item label="Họ tên">
                    {record?.hoTen ?? "--"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Mã sinh viên">
                    {record?.maSinhVien ?? "--"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Ngày sinh">
                    {record?.ngaySinh
                      ? moment(record.ngaySinh).format("DD/MM/YYYY")
                      : "--"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Số vào sổ">
                    {record?.soVaoSoBang ?? "--"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Số hiệu văn bằng">
                    {record?.soHieuVanBang ?? "--"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Số vào sổ (Tiếng Anh)">
                    {record?.bookEntryNumberFormat ?? "--"}
                  </Descriptions.Item>
                </Descriptions>
              </Col>

              <Col span={24}>
                <Divider orientation="left">Thông tin quyết định</Divider>
                <Descriptions
                  column={{ xs: 1, sm: 1, md: 2 }}
                  bordered
                  size="small"
                >
                  <Descriptions.Item label="Số quyết định">
                    {record?.quyetDinh?.soQuyetDinh ?? "--"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Ngày ban hành">
                    {record?.quyetDinh?.ngayBanHanh
                      ? moment(record.quyetDinh.ngayBanHanh).format(
                          "DD/MM/YYYY"
                        )
                      : "--"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Nội dung trích yếu" span={2}>
                    {record?.quyetDinh?.noiDung ?? "--"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Tập tin đính kèm" span={2}>
                    {record?.quyetDinh?.url ? (
                      <a
                        href={record.quyetDinh.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Xem chi tiết
                      </a>
                    ) : (
                      "--"
                    )}
                  </Descriptions.Item>
                </Descriptions>
              </Col>

              {(() => {
                const templateElements =
                  record?.quyetDinh?.bieuMau?.elements ?? [];
                const dataElements = record?.templateData ?? [];

                const elements = templateElements.length
                  ? templateElements.map((e) => ({
                      ...e,
                      value: dataElements.find(
                        (d) => d.headerName === e.headerName
                      )?.value,
                    }))
                  : dataElements;

                const valuedElements = elements
                  ?.filter((item) => item.type !== "Table")
                  ?.filter((item) => !!item.value);

                return (
                  <>
                    {!!valuedElements.length && (
                      <Col span={24}>
                        <Divider orientation="left">Thông tin phụ lục</Divider>
                        <Descriptions
                          bordered
                          column={{ xs: 1, sm: 1, md: 2 }}
                          size="small"
                        >
                          {valuedElements.map((item, index) => (
                            <Descriptions.Item
                              label={item.headerName}
                              key={index}
                            >
                              {renderField(item)}
                            </Descriptions.Item>
                          ))}
                        </Descriptions>
                      </Col>
                    )}

                    {elements
                      ?.filter((item) => item.type === "Table")
                      ?.map((item, index) => {
                        const columns =
                          item?.cot?.map((i) => ({
                            title: i.headerName,
                            dataIndex: i.headerName,
                            key: i.headerName,
                            width: i.type === "Text" ? 150 : 120,
                            render: (val) =>
                              i.type === "Text" ? <span>{val}</span> : val,
                          })) ?? [];

                        if (
                          Array.isArray(item.value) &&
                          item.value.length > 0
                        ) {
                          return (
                            <Col span={24} key={index}>
                              <Divider orientation="left">
                                {item.headerName}
                              </Divider>
                              <Table
                                size="small"
                                columns={columns}
                                dataSource={item.value}
                                pagination={false}
                                rowKey={(r, idx) => idx}
                                bordered
                                scroll={{ x: "max-content" }}
                                style={{
                                  maxWidth: "100%",
                                  overflowX: "auto",
                                }}
                              />
                            </Col>
                          );
                        }
                        return null;
                      })}
                  </>
                );
              })()}

              {!!record?.fileVanBang && (
                <Col span={24}>
                  <Divider orientation="left">Tệp tin văn bằng</Divider>
                  <div style={{ height: 650 }}>
                    <iframe
                      src={record.fileVanBang}
                      title="File Văn Bằng"
                      width="100%"
                      height="100%"
                      style={{ border: "none" }}
                    />
                  </div>
                </Col>
              )}

              {record?.urlIpfs && (
                <Col span={24}>
                  <Divider orientation="left">Tệp tin IPFS</Divider>
                  <iframe
                    src={record.urlIpfs}
                    title="File IPFS"
                    width="100%"
                    height="650"
                    style={{ border: "none" }}
                  />
                </Col>
              )}

              {record?.signature && (
                <Col span={24}>
                  <div className="vbcc-signature">
                    <img src="/images/tick.svg" alt="" width={24} height={24} />
                    <span style={{ fontWeight: 600 }}>
                      Thông tin văn bằng đã được ký số:
                    </span>
                    <a
                      href={`https://jwt.io/#debugger-io?token=${record.signature}`}
                      target="_blank"
                      className="text-primary"
                      rel="noreferrer"
                    >
                      Kiểm tra chữ ký số (JWS)
                    </a>
                  </div>
                </Col>
              )}
            </Row>
          ) : (
            <Empty
              description="Không tìm thấy thông tin phụ lục"
              style={{ marginBottom: 32, marginTop: 32 }}
            />
          )}
        </Spin>
      </Modal>
    </div>
  );
};

export default KetQuaVanBang;
