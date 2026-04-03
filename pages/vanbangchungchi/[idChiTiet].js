import { Col, Descriptions, Divider, Empty, Row, Spin, Table } from "antd";
import axios from "axios";
import { ipPTIT } from "data/ip";
import moment from "moment";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import "./style.less";

const PDFViewerV2 = dynamic(
  () => import("../../components/PDFViewerV2/index.js"),
  { ssr: false },
);

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

const ChiTietVanBang = () => {
  const router = useRouter();
  const { idChiTiet } = router.query;
  const [record, setRecord] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchChiTiet = async (id) => {
    if (!id) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `${ipPTIT}vbcc/phu-luc-van-bang/public/chi-tiet-phu-luc/${id}`,
      );
      setRecord(res?.data?.data || {});
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu:", error);
      setRecord({});
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (idChiTiet) fetchChiTiet(idChiTiet);
  }, [idChiTiet]);

  return (
    <Spin spinning={loading}>
      <div className="vbcc-container">
        <div
          style={{
            maxWidth: 1200,
            margin: "auto",
            paddingTop: 30,
            paddingBottom: 30,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 36, flexWrap: "wrap", gap: 16 }}>
            <div style={{ fontSize: 28, fontWeight: "bold", color: "#1a253f", display: "flex", alignItems: "center", gap: 12 }}>
              <span>Chi tiết kết quả tra cứu</span>

              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.667 22L28.0003 27.3333"
                  stroke="#BC2626"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="14.6667"
                  cy="14.6667"
                  r="10.6667"
                  stroke="#BC2626"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {record?._id && (
              <div className="vbcc-verified" style={{ marginBottom: 0 }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2C13.2311 2 10.5243 2.82109 8.22202 4.35943C5.91973 5.89777 4.12532 8.08427 3.06569 10.6424C2.00607 13.2006 1.72882 16.0155 2.26901 18.7313C2.80921 21.447 4.14258 23.9416 6.10051 25.8995C8.05845 27.8574 10.553 29.1908 13.2687 29.731C15.9845 30.2712 18.7994 29.9939 21.3576 28.9343C23.9157 27.8747 26.1022 26.0803 27.6406 23.778C29.1789 21.4757 30 18.7689 30 16C30 12.287 28.525 8.72602 25.8995 6.10051C23.274 3.475 19.713 2 16 2ZM14 21.5908L9.00001 16.5908L10.5906 15L14 18.4092L21.41 11L23.0057 12.5859L14 21.5908Z" fill="#24A148" />
                </svg>

                <span>Thông tin đã được xác thực</span>
              </div>
            )}
          </div>

          {record?._id ? (
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <div className="vbcc-info-card">
                  <div className="vbcc-info-title">
                    Thông tin văn bằng
                  </div>
                  <Descriptions
                    column={{ xs: 1, sm: 1, md: 2 }}
                    bordered
                    size="middle"
                    className="vbcc-custom-descriptions"
                  >
                    <Descriptions.Item label="Họ và tên">
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
                    <Descriptions.Item label="Trình độ đào tạo">
                      {record?.thongTinTrinhDoDaoTao?.ten ??
                        record?.trinhDoDaoTao ??
                        "--"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Hình thức đào tạo">
                      {record?.thongTinHinhThucDaoTao?.ten ??
                        record?.hinhThucDaoTao ??
                        "--"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Ngành đào tạo">
                      {record?.thongTinNganhDaoTao?.ten ??
                        record?.nganhDaoTao ??
                        "--"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Số vào sổ">
                      {record?.soVaoSoBang ?? "--"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Số hiệu văn bằng">
                      {record?.soHieuVanBang ?? "--"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Số vào sổ (Tiếng Anh)">
                      {record?.bookEntryNumberFormat ?? "---"}
                    </Descriptions.Item>
                  </Descriptions>
                </div>
              </Col>

              <Col span={24}>
                <div className="vbcc-info-card">
                  <div className="vbcc-info-title">
                    Thông tin quyết định
                  </div>
                  <Descriptions
                    column={{ xs: 1, sm: 1, md: 2 }}
                    bordered
                    size="middle"
                    className="vbcc-custom-descriptions"
                  >
                    <Descriptions.Item label="Số quyết định">
                      {record?.quyetDinh?.soQuyetDinh ?? "--"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Ngày ban hành">
                      {record?.quyetDinh?.ngayBanHanh
                        ? moment(record.quyetDinh.ngayBanHanh).format("DD/MM/YYYY")
                        : "--"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Nội dung trích yếu" span={2}>
                      {record?.quyetDinh?.noiDung ?? "--"}
                    </Descriptions.Item>
                    {/* <Descriptions.Item label="Tập tin đính kèm" span={2}>
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
                    </Descriptions.Item> */}
                  </Descriptions>
                </div>
              </Col>

              {(() => {
                const templateElements = record?.quyetDinh?.bieuMau?.elements ?? [];
                const dataElements = record?.templateData ?? [];

                const elements = templateElements.length
                  ? templateElements.map((e) => ({
                    ...e,
                    value: dataElements.find(
                      (d) => d.headerName === e.headerName,
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
                        <div className="vbcc-info-card">
                          <div className="vbcc-info-title">
                            Thông tin phụ lục
                          </div>
                          <Descriptions
                            bordered
                            column={{ xs: 1, sm: 1, md: 2 }}
                            size="middle"
                            className="vbcc-custom-descriptions"
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
                        </div>
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

                        if (Array.isArray(item.value) && item.value.length > 0) {
                          return (
                            <Col span={24} key={index}>
                              <div className="vbcc-info-card">
                                <div className="vbcc-info-title">
                                  {item.headerName}
                                </div>
                                <Table
                                  size="middle"
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
                              </div>
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
                  <PDFViewerV2 url={record.fileVanBang} height={"650px"} />
                </Col>
              )}

              {record?.urlIpfs && (
                <Col span={24}>
                  <Divider orientation="left">Tệp tin IPFS</Divider>
                  <PDFViewerV2 url={record.urlIpfs} height={"650px"} />
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
        </div>
      </div>
    </Spin>
  );
};

export default ChiTietVanBang;
